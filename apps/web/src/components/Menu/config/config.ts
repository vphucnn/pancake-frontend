import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems, MenuItemsType, SwapFillIcon, SwapIcon } from '@pancakeswap/uikit'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('POOLS Chain'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: 'https://scan.poolsmobility.com',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('dApps'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: 'https://www.poolschain.org/#d-apps',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },

    {
      label: t('Community'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: 'https://www.poolschain.org/#community',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Tools'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Contract generator'),
          href: '/',
        },
        {
          label: t('Create NFT contract'),
          href: '/create-nft',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('About'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: 'https://www.poolsmobility.com/',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },

    // {
    //   label: t('Earn'),
    //   href: '/farms',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   supportChainIds: SUPPORT_FARMS,
    //   items: [
    //     {
    //       label: t('Farms'),
    //       href: '/farms',
    //       supportChainIds: SUPPORT_FARMS,
    //     },
    //     {
    //       label: t('Pools'),
    //       href: '/pools',
    //       supportChainIds: POOL_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Liquid Staking'),
    //       href: '/liquid-staking',
    //       supportChainIds: LIQUID_STAKING_SUPPORTED_CHAINS,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Win'),
    //   href: '/prediction',
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   items: [
    //     {
    //       label: t('Trading Reward'),
    //       href: '/trading-reward',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Trading Competition'),
    //       href: '/competition',
    //       image: '/images/decorations/tc.png',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     {
    //       label: t('Pottery (BETA)'),
    //       href: '/pottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //   ],
    // },
    // {
    //   label: t('NFT'),
    //   href: `${nftsBaseUrl}`,
    //   icon: NftIcon,
    //   fillIcon: NftFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   image: '/images/decorations/nft.png',
    //   items: [
    //     {
    //       label: t('Overview'),
    //       href: `${nftsBaseUrl}`,
    //     },
    //     {
    //       label: t('Collections'),
    //       href: `${nftsBaseUrl}/collections`,
    //     },
    //     {
    //       label: t('Activity'),
    //       href: `${nftsBaseUrl}/activity`,
    //     },
    //   ],
    // },
    // {
    //   label: t('Game'),
    //   icon: PancakeProtectorIcon,
    //   hideSubNav: true,
    //   items: [
    //     {
    //       label: t('Pancake Protectors'),
    //       href: 'https://protectors.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //       status: { text: t('New'), color: 'success' },
    //     },
    //   ],
    // },
    // {
    //   label: '',
    //   href: '/info',
    //   icon: MoreIcon,
    //   hideSubNav: true,
    //   items: [
    //     {
    //       label: t('Info'),
    //       href: '/info/v3',
    //     },
    //     {
    //       label: t('IFO'),
    //       href: '/ifo',
    //       supportChainIds: SUPPORT_ONLY_BSC,
    //       image: '/images/ifos/ifo-bunny.png',
    //     },
    //     {
    //       label: t('Affiliate Program'),
    //       href: '/affiliates-program',
    //     },
    //     {
    //       label: t('Voting'),
    //       href: '/voting',
    //       supportChainIds: SUPPORT_ONLY_BSC,
    //       image: '/images/voting/voting-bunny.png',
    //     },
    //     {
    //       type: DropdownMenuItemType.DIVIDER,
    //     },
    //     {
    //       label: t('Leaderboard'),
    //       href: '/teams',
    //       supportChainIds: SUPPORT_ONLY_BSC,
    //       image: '/images/decorations/leaderboard.png',
    //     },
    //     {
    //       type: DropdownMenuItemType.DIVIDER,
    //     },
    //     {
    //       label: t('Blog'),
    //       href: 'https://blog.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Docs'),
    //       href: 'https://docs.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
