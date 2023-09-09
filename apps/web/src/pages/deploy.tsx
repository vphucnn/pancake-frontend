import { CHAIN_IDS } from 'utils/wagmi'
import Deploy from '../views/Deploy'

const DeployPage = () => {
  return <Deploy />
}

DeployPage.chains = CHAIN_IDS

export default DeployPage
