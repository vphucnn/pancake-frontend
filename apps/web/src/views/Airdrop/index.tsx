import ContentCut from '@mui/icons-material/ContentCut'
import { Button, MenuItem, MenuList } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useAccount, useBalance } from 'wagmi'
import { useModal } from '../../../../../packages/uikit/src'
import { useMenuItems } from '../../components/Menu/hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from '../../components/Menu/utils'
import USCitizenConfirmModal from '../../components/Modal/USCitizenConfirmModal'
import { IdType } from '../../hooks/useUserIsUsCitizenAcknowledgement'
import CTButtom from '../Component/CTButtom'
import CTTextField from '../Component/CTextField'
import IOSSwitch from '../Component/IOSSwithc'
import { CoinToolLayout } from '../../components/Layout/CoinToolLayout'

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

  const [name, setName] = React.useState('')
  const [checked, setChecked] = React.useState(true)
  const { data, isError, isLoading } = useBalance({
    address: useAccount().address,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setChecked(event.target.checked)
  }

  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
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
        Contract generator
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
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
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
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
          />
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            required
            shrink
            htmlFor="name"
          >
            Initial supply
          </InputLabel>
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
          />
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            required
            shrink
            htmlFor="name"
          >
            Decimals (0-18)
          </InputLabel>
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
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
          <IOSSwitch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Burn</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Mint</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Pause</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
          <Box sx={{ display: 'inline', ml: 3 }}>Can Blacklist</Box>
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <IOSSwitch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }} />
          <Box sx={{ display: 'inline', ml: 3 }}>Apply Burn Fee (Deflationary token )</Box>
        </Grid>

        <Grid sx={{ mt: 3 }}>
          <InputLabel
            sx={{
              color: '#D1D1D1',
            }}
            required
            shrink
            htmlFor="name"
          >
            Decimals (0-18)
          </InputLabel>
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
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
            required
            shrink
            htmlFor="name"
          >
            Decimals (0-18)
          </InputLabel>
          <CTTextField size='small'
            fullWidth
            id="name"
            InputProps={{ sx: { borderRadius: 3, color: '#9E9E9E' } }}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
          />
          <Box sx={{ display: 'block', mt: 1, ml: 2, fontSize: '0.8rem' }}>
            Specify the tax / fee in basis points (bps), i.e. 1% is equal to 100 bps. Example: to charge a tax / fee of
            3.5%, enter the number 350. Can be updated after initial token creation.
          </Box>
        </Grid>
        <Grid container alignItems="left" justifyContent="left" sx={{ pt: 5 }}>
          <CTButtom
            className='show'
            sx={{
              width: '300px',
              borderRadius: 2,
            }}
            variant="contained"
          >
            Create Token
          </CTButtom>
        </Grid>
      </Grid>
    </CoinToolLayout>
  )
}
