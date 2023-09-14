import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
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

import { Bytecode as helloWorldBytecode, Abi as helloWorldTokenAbi } from '../../constract/hello-world.json'
import { StyledTableRow } from '../Component/Style/StyledTableRow'
import { StyledTableCell } from '../Component/Style/StyledTableCell'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function Staking() {
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
        Staking {canBurn.toString()}
      </Typography>
      <Divider
        variant="middle"
        sx={{
          widht: '80%',
          bgcolor: '#D1D1D1',
          ml: 5,
          mt: 2,
        }}
      />

      <Grid container sx={{ pl: 5, pt: 2 }}>
        <Grid xs={6} md={6}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
        <Grid xs={6} md={6} container alignItems="right" justifyContent="right">
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

      <Divider
        variant="middle"
        sx={{
          widht: '80%',
          bgcolor: '#D1D1D1',
          ml: 5,
          mt: 2,
        }}
      />

      <Grid container sx={{ pl: 5, pt: 2 }}>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ pl: 5, pt: 2 }}>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            Est. Total Value
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#D1D1D1',
            }}
          >
            0.00324797 ≈ 0.00324797
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ pl: 5, pt: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </CoinToolLayout>
  )
}
