import { useIsMounted } from "@pancakeswap/hooks";
import React, { useEffect } from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

import { vars } from "../../css/vars.css";
import { LogoWithTextIcon } from "../Svg";
import { FooterProps } from "./types";
import PoolsLogo from "../Svg/PoolsLogo";
import styled from "styled-components";
import { Text } from "@pancakeswap/uikit";

const StyledLink = styled("a")`
  display: flex;
  .logo {
    width: 60px;
  }
`;

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  buyCakeLink,
  chainId,
  ...props
}) => {
  const isMounted = useIsMounted();
  useEffect(() => {
    if (!isDark) toggleTheme(true);
  }, []);
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} position="relative" {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1500px"]}>
        {/* <StyledIconMobileContainer display={["block", null, "none"]}>
          <PoolsLogo width="130px" />
        </StyledIconMobileContainer> */}
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          <Box>
            <StyledLink as="a">
              <PoolsLogo className="logo" />
            </StyledLink>
            <Text>PLAYGROUND PLANET PTE. LTD.</Text>
            <Text>Copyright ©2023 Pools Phone All Right Reserved</Text>
          </Box>
          <Box>
            <Link
              data-theme="dark"
              href={"https://www.poolschain.org/#community"}
              target="_blank"
              rel="noreferrer noopener"
              bold={false}
            >
              {" "}
              Community
            </Link>

            <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
          </Box>

          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      data-theme="dark"
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? vars.colors.warning : "text"}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}

          <Box>
            <Text>Get the latest updates on products</Text>
            <Text>and developments.</Text>
            <Text>Hear it first from POOLS</Text>
          </Box>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
