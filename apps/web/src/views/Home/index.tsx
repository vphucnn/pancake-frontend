import { styled } from 'styled-components'
import { Flex, Heading, PageSection, Text } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import { Group1 } from '../Component/LadingPage/Grou1'
import { Groups2 } from '@mui/icons-material'
import { Group2 } from '../Component/LadingPage/Group2'
import { JoinSvg } from '../Component/LadingPage/JoinSvg'
import { GroupCompanySvg } from '../Component/LadingPage/GroupCompanySvg'
import { IndustryPartners } from '../Component/LadingPage/IndustryPartners'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles1 = {
    margin: '0',
    width: '100%',
    maxWidth: '1921px',
    height: '1078px',
  }

  const HomeSectionContainerStyles2 = {
    margin: '0',
    width: '100%',
    maxWidth: '1920px',
    height: '1275px',
  }

  const HomeSectionContainerStyles3 = {
    margin: '0',
    width: '100%',
    maxWidth: '1920px',
    height: '900px',
  }

  const HomeSectionContainerStyles4 = {
    margin: '0',
    width: '100%',
    maxWidth: '1152px',
    height: '765px',
  }

  const HomeSectionContainerStyles5 = {
    margin: '0',
    width: '100%',
    maxWidth: '1920px',
    height: '953px',
    backgroud: ``,
  }

  const HomeSectionContainerStyles6 = {
    margin: '0',
    width: '1923px',
    height: '620px',
  }
  const HomeSectionContainerStyles7 = {
    margin: '0',
    width: '100%',
    maxWidth: '1923px',
    height: '767px',
  }
  const HomeSectionContainerStyles8 = {
    margin: '0',
    width: '100%',
    maxWidth: '1923px',
    height: '767px',
  }

  const { t } = useTranslation()

  return (
    <>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
          }
          #home-10 .page-bg {
            background-size: 100%;
            background-repeat: no-repeat;
          }
          #home-20 .page-bg {
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          [data-theme='dark'] #home-1 .page-bg {
            background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          }
          #home-2 .page-bg {
            background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
          }
          [data-theme='dark'] #home-2 .page-bg {
            background: linear-gradient(180deg, #09070c 22%, #201335 100%);
          }
          #home-3 .page-bg {
            background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
          }
          [data-theme='dark'] #home-3 .page-bg {
            background: linear-gradient(180deg, #0b4576 0%, #091115 100%);
          }
          #home-4 .inner-wedge svg {
            fill: #d8cbed;
          }
          [data-theme='dark'] #home-4 .inner-wedge svg {
            fill: #201335;
          }
        `}
      </style>
      {/* <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      > */}
      {/* {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
      {/* <MultipleBanner /> */}
      {/* <Hero /> */}
      {/* </StyledHeroSection> */}
      {/* <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection> */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles1 }}
        background={'url(/images/lading-page/p1.png)'}
        containerProps={{
          id: 'home-10',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles2 }}
        background={'url(/images/lading-page/p2.png)'}
        containerProps={{
          id: 'home-20',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex alignItems={['flex-end', null, null, 'center']} justifyContent="center" mt={['60px', null, null, null]}>
          <Group1></Group1>
        </Flex>
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles3 }}
        background={'url(/images/lading-page/p3.png)'}
        containerProps={{
          id: 'home-30',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex alignItems={['flex-end', null, null, 'center']} justifyContent="center" mt={['60px', null, null, null]}>
          <Group2></Group2>
        </Flex>
      </PageSection>
    
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles4 }}
        background={'#000000'}
        containerProps={{
          id: 'home-40',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex flexDirection="column">
          <Flex
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              flex="0.8"
              mt={['60px', null, null, null]}
              ml={['100px', null, null, null]}
              mr={['100px', null, null, null]}
              alignSelf={['flex-start', null, null, 'center']}
            >
              <Heading scale="xl">
                <span style={{ color: '#E6CB82' }}>Heelo</span>
                Ban
              </Heading>
              <Text color="#FFFFFF" mb="24px">
                vvv
              </Text>
            </Flex>
            <Flex
              height={['192px', null, null, '100%']}
              width={['192px', null, null, '100%']}
              flex={[null, null, null, '1']}
              mb={['24px', null, null, '0']}
            >
              {/* <CompositeImage {...images} /> */}
            </Flex>
          </Flex>
        </Flex>
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles5 }}
        background={'url(/images/lading-page/p5.png)'}
        containerProps={{
          id: 'home-50',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex flexDirection="column">
          <Flex
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              flex="0.8"
              mt={['60px', null, null, null]}
              ml={['100px', null, null, null]}
              mr={['100px', null, null, null]}
              alignSelf={['flex-start', null, null, 'center']}
            >
              <Heading scale="xl">
                <span style={{ color: '#E6CB82' }}>Heelo</span>
                Ban
              </Heading>
              <Text color="#FFFFFF" mb="24px">
                vvv
              </Text>
            </Flex>
            <Flex
              height={['192px', null, null, '100%']}
              width={['192px', null, null, '100%']}
              flex={[null, null, null, '1']}
              mb={['24px', null, null, '0']}
            >
              {/* <CompositeImage {...images} /> */}
            </Flex>
          </Flex>
        </Flex>
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles6 }}
        background={'url(/images/lading-page/p6.png)'}
        containerProps={{
          id: 'home-60',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        {/* <SalesSection {...swapSectionData(t)} /> */}
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles7 }}
        background={'#000000'}
        containerProps={{
          id: 'home-70',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex alignItems={['flex-end', null, null, 'center']} justifyContent="center" mt={['60px', null, null, null]}>
          <JoinSvg></JoinSvg>
        </Flex>
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles8 }}
        background={'#000000'}
        containerProps={{
          id: 'home-80',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex alignItems={['flex-end', null, null, 'center']} justifyContent="center" mt={['60px', null, null, null]}>
          <IndustryPartners></IndustryPartners>
        </Flex>
        <Flex alignItems={['flex-end', null, null, 'center']} justifyContent="center" mt={['60px', null, null, null]}>
          <GroupCompanySvg></GroupCompanySvg>
        </Flex>
      </PageSection>
 
    </>
  )
}

export default Home
