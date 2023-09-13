import { ContentCut } from '@mui/icons-material'
import { Box, BoxProps, Button, Grid, Link, MenuItem, MenuList } from '@mui/material'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import { useModal } from '../../../../../packages/uikit/src'
import { IdType } from '../../hooks/useUserIsUsCitizenAcknowledgement'
import CTButtom from '../../views/Component/CTButtom'
import { useMenuItems } from '../Menu/hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from '../Menu/utils'
import USCitizenConfirmModal from '../Modal/USCitizenConfirmModal'

export const CoinToolLayout: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const [onUSCitizenModalPresent] = useModal(
    <USCitizenConfirmModal title={t('PancakeSwap Perpetuals')} id={IdType.PERPETUALS} />,
    false,
    false,
    'usCitizenConfirmModal',
  )
  const router = useRouter()
  const { pathname } = useRouter()
  const menuItems = useMenuItems(onUSCitizenModalPresent)
  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const handleClick = (href) => {
    router.push(href)
  }

  return (
    <Box sx={{ p: 10, minHeight: '100%' }} display="flex" justifyContent="center">
      <Grid width={'1200px'} container maxWidth={'1200px'}>
        <Grid xs={2} md={2} sx={{ minHeight: '100%', background: '#131313' }}>
          <MenuList>
            {menuItems[0].items.map((item) => (
              <MenuItem>
                {item.href == activeSubMenuItem.href ? (
                  <CTButtom
                    sx={{
                      width: '300px',
                    }}
                    variant="contained"
                  >
                    <ContentCut color="success" fontSize="small" />
                    <Link href={item.href}>{item.label}</Link>
                  </CTButtom>
                ) : (
                  <Button
                    sx={{
                      width: '300px',
                      color: '#A2A3A4',
                    }}
                    variant="text"
                  >
                    <ContentCut color="success" fontSize="small" />
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                )}

                {/* <Box sx={{ display: 'inline', ml: 3 }} >{item.label}</Box> */}
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
        <Grid xs={10} md={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}
