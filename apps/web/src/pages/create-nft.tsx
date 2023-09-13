import { CHAIN_IDS } from 'utils/wagmi'

import CreateNFT from '../views/CreateNFT'

const CreateNFTPage = () => {
  return <CreateNFT />
}

CreateNFTPage.chains = CHAIN_IDS

export default CreateNFTPage
