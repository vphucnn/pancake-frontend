import { ChainId } from '@pancakeswap/sdk'

import { ChainMap, BatchMulticallConfigs } from '../types'

const DEFAULT: BatchMulticallConfigs = {
  defaultConfig: {
    gasLimitPerCall: 1_000_000,
  },
  gasErrorFailureOverride: {
    gasLimitPerCall: 2_000_000,
  },
  successRateFailureOverrides: {
    gasLimitPerCall: 2_000_000,
  },
}

export const BATCH_MULTICALL_CONFIGS: ChainMap<BatchMulticallConfigs> = {
  [ChainId.BSC_TESTNET]: DEFAULT,
  [ChainId.BSC]: DEFAULT,
  [ChainId.ETHEREUM]: DEFAULT,
  [ChainId.GOERLI]: DEFAULT,
  [ChainId.ARBITRUM_ONE]: DEFAULT,
  [ChainId.ARBITRUM_GOERLI]: DEFAULT,
  [ChainId.POLYGON_ZKEVM]: {
    defaultConfig: {
      gasLimitPerCall: 500000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 1500000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 1500000,
    },
  },
  [ChainId.POLYGON_ZKEVM_TESTNET]: {
    defaultConfig: {
      gasLimitPerCall: 500000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 1500000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 1500000,
    },
  },
  [ChainId.ZKSYNC]: {
    defaultConfig: {
      gasLimitPerCall: 1000000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 2000000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 3000000,
    },
  },
  [ChainId.ZKSYNC_TESTNET]: DEFAULT,
  [ChainId.LINEA]: DEFAULT,
  [ChainId.LINEA_TESTNET]: DEFAULT,
  [ChainId.BASE]: DEFAULT,
  [ChainId.BASE_TESTNET]: DEFAULT,
  [ChainId.OPBNB_TESTNET]: DEFAULT,
  [ChainId.SCROLL_SEPOLIA]: DEFAULT,
  [ChainId.SEPOLIA_TEST]: {
    defaultConfig: {
      gasLimitPerCall: 0,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 0,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 0,
    },
  },
  [ChainId.POOLS]: {
    defaultConfig: {
      gasLimitPerCall: 0,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 0,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 0,
    },
  },
}
