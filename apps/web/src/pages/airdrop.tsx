import { CHAIN_IDS } from 'utils/wagmi'

import Airdrop from '../views/Airdrop'

const AirdropPage = () => {
  return <Airdrop />
}

AirdropPage.chains = CHAIN_IDS

export default AirdropPage
