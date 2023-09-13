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

import { Bytecode as helloWorldBytecode, Abi as helloWorldTokenAbi } from '../../constract/hello-world.json'
import CTDecrementButton from '../Component/CTDecrementButton '
import CTIncrementButton from '../Component/CTIncrementButton '
import CTRadio from '../Component/CTRadio'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Airdrop() {
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

  /* parameter contract */
  const [name, setName] = React.useState('')
  const [symbol, setSymbol] = React.useState()
  const [initialSupply, setInitialSupply] = React.useState()
  const [decimals, setDecimals] = React.useState()
  const [canBurn, setCanBurn] = React.useState(false)
  const [canMint, setCanMint] = React.useState(false)
  const [canPause, setCanPause] = React.useState(false)
  const [canBlacklist, setCanBlacklist] = React.useState(false)
  const [applyTxFee, setApplyTxFee] = React.useState(false)
  const [recipientAddress, setRecipientAddress] = React.useState()
  const [txFee, setTxFee] = React.useState()
  const { data, isError, isLoading } = useBalance({
    address: useAccount().address,
  })
  /* submit */
  const { data: walletClient } = useWalletClient()
  const { chain, chains } = useNetwork()
  const [hash, setHash] = React.useState<undefined | `0x${string}`>()
  const { toastSuccess, toastError } = useToast()

  async function onSubmit() {
    try {
      const response = await walletClient?.deployContract({
        abi: helloWorldTokenAbi,
        bytecode: helloWorldBytecode as `0x${string}`,
        args: [],
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
  /* ratio */
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChangeRatio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
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
        Airdrop {canBurn.toString()}
      </Typography>

      <Box sx={{ pl: 5, pt: 2 }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: '#D1D1D1',
          }}
        >
          Create Airdrop
        </Typography>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            required
            shrink
            htmlFor="name"
          >
            Token Address
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
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid xs={6} md={6} sx={{}}>
            <Box sx={{ display: 'block', width: '100%', border: 1, borderRadius: 3, borderColor: '#E8CC93' }}>
              <CTRadio
                sx={{
                  color: '#9E9E9E',
                }}
                checked={selectedValue === 'a'}
                onChange={handleChangeRatio}
                value="a"
                name="radio-buttons"
                size="small"
                inputProps={{ 'aria-label': 'A' }}
              />
              <Box sx={{ display: 'inline' }}>Designated Wallet</Box>
            </Box>
          </Grid>
          <Grid xs={6} md={6} sx={{}}>
            <Box sx={{ display: 'block', width: '100%', border: 1, borderRadius: 3, borderColor: '#9E9E9E' }}>
              <CTRadio
                sx={{
                  color: '#9E9E9E',
                }}
                checked={selectedValue === 'b'}
                onChange={handleChangeRatio}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                size="small"
              />
              <Box sx={{ display: 'inline' }}>Any Wallet</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Airdrop Amount
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

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid xs={4} md={4} sx={{}}>
            <Box sx={{ display: 'block', width: '100%', border: 1, borderRadius: 3, borderColor: '#E8CC93' }}>
              <CTRadio
                sx={{
                  color: '#9E9E9E',
                }}
                checked={selectedValue === 'a'}
                onChange={handleChangeRatio}
                value="a"
                name="radio-buttons"
                size="small"
                inputProps={{ 'aria-label': 'A' }}
              />
              <Box sx={{ display: 'inline' }}>Random</Box>
            </Box>
          </Grid>
          <Grid xs={4} md={4} sx={{}}>
            <Box sx={{ display: 'block', width: '100%', border: 1, borderRadius: 3, borderColor: '#9E9E9E' }}>
              <CTRadio
                sx={{
                  color: '#9E9E9E',
                }}
                checked={selectedValue === 'b'}
                onChange={handleChangeRatio}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                size="small"
              />
              <Box sx={{ display: 'inline' }}>Equaly</Box>
            </Box>
          </Grid>
          <Grid xs={4} md={4} sx={{}}>
            <Box sx={{ display: 'block', width: '100%', border: 1, borderRadius: 3, borderColor: '#9E9E9E' }}>
              <CTRadio
                sx={{
                  color: '#9E9E9E',
                }}
                checked={selectedValue === 'b'}
                onChange={handleChangeRatio}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                size="small"
              />
              <Box sx={{ display: 'inline' }}>Manual Import</Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <InputLabel
            size="small"
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Random Amount Range
          </InputLabel>
          <Grid container spacing={0} sx={{}}>
            <Grid xs={5.8} md={5.8} sx={{}}>
              <CTTextField
                size="small"
                fullWidth
                id="name"
                InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
                value={initialSupply}
                onChange={(event) => handleChange(event.target.value, setInitialSupply)}
              />
            </Grid>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" xs sx={{}}>
              <Box>-</Box>
            </Grid>
            <Grid xs={5.8} md={5.8} sx={{}}>
              <CTTextField
                size="small"
                fullWidth
                id="name"
                InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
                value={initialSupply}
                onChange={(event) => handleChange(event.target.value, setInitialSupply)}
              />
            </Grid>
          </Grid>
        </Box>

        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Decimals
          </InputLabel>
          <Box sx={{ display: 'flex' }}>
            <CTDecrementButton variant="contained" href="#contained-buttons">
              -
            </CTDecrementButton>
            <CTTextField
              fullWidth
              size="small"
              id="name"
              type="number"
              inputProps={{ min: 0, style: { textAlign: 'center' } }}
              InputProps={{ sx: { color: '#9E9E9E', borderRadius: `0px 0px 0px 0px` } }}
              value={decimals}
              onChange={(event) => handleChange(event.target.value, setDecimals)}
            />
            <CTIncrementButton variant="contained" href="#contained-buttons">
              +
            </CTIncrementButton>
          </Box>
        </Grid>

        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              display: 'inline',
              color: '#D1D1D1',
            }}
            shrink
            htmlFor="name"
          >
            Address List
          </InputLabel>
          <InputLabel
            sx={{
              display: 'inline',

              color: '#D1D1D1',
              float: 'right',
            }}
            shrink
            htmlFor="name"
          >
            Upload File
          </InputLabel>
          <CTTextField
            size="small"
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event) => handleChange(event.target.value, setTxFee)}
          />
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
      </Box>
    </CoinToolLayout>
  )
}
