import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useAccount, useBalance, useNetwork, useWalletClient } from 'wagmi'
import { useModal, useToast } from '../../../../../packages/uikit/src'
import { CoinToolLayout } from '../../components/Layout/CoinToolLayout'
import { useMenuItems } from '../../components/Menu/hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from '../../components/Menu/utils'
import USCitizenConfirmModal from '../../components/Modal/USCitizenConfirmModal'
import { IdType } from '../../hooks/useUserIsUsCitizenAcknowledgement'
import CTButtom from '../Component/CTButtom'
import CTTextField from '../Component/CTextField'
import IOSSwitch from '../Component/IOSSwithc'

import { Bytecode as ERC20TokenBytecode, Abi as ERC20TokenTokenAbi } from '../../constract/ERC20Token.json'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function CoinTools() {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const [onUSCitizenModalPresent] = useModal(
    <USCitizenConfirmModal title={t('PancakeSwap Perpetuals')} id={IdType.PERPETUALS} />,
    false,
    false,
    'usCitizenConfirmModal',
  )
  const { pathname } = useRouter()
  const menuItems = useMenuItems(onUSCitizenModalPresent)
  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  // parameter contract
  const [name, setName] = React.useState('')
  const [symbol, setSymbol] = React.useState()
  const [initialSupply, setInitialSupply] = React.useState()
  const [decimals, setDecimals] = React.useState()
  const [canBurn, setCanBurn] = React.useState(false)
  const [canMint, setCanMint] = React.useState(false)
  const [canPause, setCanPause] = React.useState(false)
  const [canBlacklist, setCanBlacklist] = React.useState(false)
  const [applyBrunFee, setApplyBrunFee] = React.useState(false)
  const [recipientAddress, setRecipientAddress] = React.useState()
  const [txFee, setTxFee] = React.useState()
  const { data, isError, isLoading } = useBalance({
    address: useAccount().address,
  })
  // submit
  const { data: walletClient } = useWalletClient()
  const { chain, chains } = useNetwork()
  const [hash, setHash] = React.useState<undefined | `0x${string}`>()
  const { toastSuccess, toastError } = useToast()

  async function onSubmit() {
    try {
      let brunAddress = '0x0000000000000000000000000000000000000000'
      let brunFee = 0
      if (applyBrunFee) {
        if (recipientAddress) brunAddress = recipientAddress
        brunFee = txFee
      }
      const response = await walletClient?.deployContract({
        abi: ERC20TokenTokenAbi,
        bytecode: ERC20TokenBytecode as `0x${string}`,
        args: [name, symbol, initialSupply, decimals, canBurn, canMint, canPause, canBlacklist, brunAddress, brunFee],
        chain,
      })
      setHash(response)
    } catch (e) {
      toastError(e as string)
    }
  }

  const handleChange = (value, f) => {
    f(value)
  }

  return (
    <CoinToolLayout>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: 'white',
          pl: 5,
          pt: 2,
        }}
      >
        Contract generator {canBurn.toString()}
      </Typography>

      <Grid sx={{ pl: 5, pt: 2 }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: '#D1D1D1',
          }}
        >
          Basic setting
        </Typography>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Token Name
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event) => handleChange(event.target.value, setName)}
          />
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Symbol
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={symbol}
            onChange={(event) => handleChange(event.target.value, setSymbol)}
          />
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Initial supply
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={initialSupply}
            onChange={(event) => handleChange(event.target.value, setInitialSupply)}
          />
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Decimals (0-18)
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={decimals}
            onChange={(event) => handleChange(event.target.value, setDecimals)}
          />
        </Grid>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: '#D1D1D1',
          }}
        >
          Token configuration
        </Typography>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch
            checked={canBurn}
            onChange={(event) => handleChange(event.target.checked, setCanBurn)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Burn</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch
            checked={canMint}
            onChange={(event) => handleChange(event.target.checked, setCanMint)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Mint</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch
            checked={canPause}
            onChange={(event) => handleChange(event.target.checked, setCanPause)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Pause</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch
            checked={canBlacklist}
            onChange={(event) => handleChange(event.target.checked, setCanBlacklist)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Blacklist</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch
            checked={applyBrunFee}
            onChange={(event) => handleChange(event.target.checked, setApplyBrunFee)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Box sx={{ display: 'inline', ml: 3 }}>Apply Burn Fee (Deflationary token )</Box>
        </Grid>

        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Recipient address
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={recipientAddress}
            onChange={(event) => handleChange(event.target.value, setRecipientAddress)}
          />
          <Box sx={{ display: 'block', mt: 1, ml: 2, fontSize: '0.8rem' }}>
            Can be updated after initial token creation.
          </Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Can be updated after initial token creation.
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            value={txFee}
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            onChange={(event) => handleChange(event.target.value, setTxFee)}
          />
          <Box sx={{ display: 'block', mt: 1, ml: 2, fontSize: '0.8rem' }}>
            Specify the tax / fee in basis points (bps), i.e. 1% is equal to 100 bps. Example: to charge a tax / fee of
            3.5%, enter the number 350. Can be updated after initial token creation.
          </Box>
        </Grid>
        <Grid container alignItems="left" justifyContent="left" sx={{ pt: 5 }}>
          <CTButtom
            className="show"
            sx={{
              width: '300px',
              borderRadius: 2,
            }}
            variant="contained"
            onClick={onSubmit}
          >
            Create Token
          </CTButtom>
        </Grid>
      </Grid>
    </CoinToolLayout>
  )
}
