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
import { CreateContractIcon } from '../../views/Component/Icon/CreactContractIcon'

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
      <Box width="1200px" display="flex" maxWidth="1200px">
        <Box sx={{ display: 'inline', minHeight: '100%', background: '#131313', minWidth: "250px" }}>
          <MenuList>
            {menuItems[0].items.map((item) => (
              <MenuItem>
                {item.href === activeSubMenuItem.href ? (
                  <MenuItem>
                    <CreateContractIcon fill="#FFFFFF" />
                    <Box sx={{ display: 'inline', ml: 3 }}>{item.label}</Box>
                  </MenuItem>
                ) : (
                  <Link style={{ textDecoration: 'none' }} href={item.href} underline="hover">
                    <MenuItem>
                      <CreateContractIcon sx={{ ml: 3 }} />
                      <Box sx={{ display: 'inline', ml: 3 }}>{item.label}</Box>
                    </MenuItem>
                  </Link>
                )}

                {/* <Box sx={{ display: 'inline', ml: 3 }} >{item.label}</Box> */}
              </MenuItem>
            ))}
          </MenuList>
        </Box>
        <Box sx={{ width: '100%' }}>  
          {children}
        </Box>
      </Box>
    </Box>
  )
}
