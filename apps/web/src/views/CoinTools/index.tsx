import Page from '../Page'
import { useAccount, useBalance } from 'wagmi'


export default function CoinTools() {

  const { address } = useAccount()

  const { data, isError, isLoading } = useBalance({
    address: address,
  })

  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
  return (
    <Page>
      <div>
        Balance: {data?.formatted} {data?.symbol}
      </div>
    </Page>
  )
}
