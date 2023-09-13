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
import CTMenuItem from 'views/Component/CTMenuItem'
import CreateNFT from 'views/CreateNFT'
import { CreateNFTIcon } from 'views/Component/Icon/CreateNFTIcon'
import { AirDropIcon } from 'views/Component/Icon/AirDropIcon'
import { StakingIcon } from 'views/Component/Icon/StakingIcon'

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

  const getIconItemMenu = (href: string, fill: string) => {
    switch (href) {
      case '/coin-tools':
        return <CreateContractIcon fill={fill} width="25" height="25" />
        break;
      case '/create-nft':
        return <CreateNFTIcon fill={fill} width="25" height="25" />
        break;
      case '/airdrop':
        return <AirDropIcon fill={fill} width="25" height="25" />
        break;
      case '/pools-staking':
        return <StakingIcon fill={fill} width="25" height="25" />
        break;
      default:
        return <CreateContractIcon fill={fill} width="25" height="25" />
    }

  }

  return (
    <Box sx={{ p: 10, minHeight: '100%' }} display="flex" justifyContent="center">
      <Box width="1200px" display="flex" maxWidth="1200px">
        <Box sx={{ display: 'inline', minHeight: '100%', background: '#131313', minWidth: "250px" }}>
          <MenuList>
            {menuItems[0].items.map((item) => (
              <>
                {item.href === activeSubMenuItem.href ? (
                  <CTMenuItem sx={{ m: 3 }} >
                    {getIconItemMenu(item.href, '#A2A3A4')}
                    <Box sx={{ display: 'inline', ml: 1 }}>{item.label}</Box>
                  </CTMenuItem>
                ) : (
                  <MenuItem sx={{ m: 3 }}>
                    <Link style={{ textDecoration: 'none' }} href={item.href} underline="hover">
                      {getIconItemMenu(item.href, 'none')}
                      <Box sx={{ display: 'inline', ml: 1 }}>{item.label}</Box>
                    </Link>
                  </MenuItem>

                )}
              </>
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
