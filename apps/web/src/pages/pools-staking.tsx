import { CHAIN_IDS } from 'utils/wagmi'

import Staking from '../views/Staking'

const StakingPage = () => {
  return <Staking />
}

StakingPage.chains = CHAIN_IDS

export default StakingPage
