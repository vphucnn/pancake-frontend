import { CHAIN_IDS } from 'utils/wagmi'

import CoinTools from '../views/CoinTools'

const CoinToolsPage = () => {
  return <CoinTools />
}

CoinToolsPage.chains = CHAIN_IDS

export default CoinToolsPage
