import { CHAIN_IDS } from 'utils/wagmi'

import { MintNFTForm } from 'views/MintNft'

const MintNFTPage = () => {
  return <MintNFTForm />
}

MintNFTPage.chains = CHAIN_IDS

export default MintNFTPage
