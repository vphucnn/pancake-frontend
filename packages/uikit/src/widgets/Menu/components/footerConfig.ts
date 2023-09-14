import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    href: "https://www.poolschain.org/",
    items: [
      {
        label: t("POOLS Scan"),
        href: "https://scan.poolsmobility.com/",
        isHighlighted: false,
      },
      {
        label: t("POOLS Phone"),
        href: "https://poolsmobility.com/",
      },
      {
        label: t("POOLS Mall"),
        href: "https://mall.poolsmobility.com/",
      },
      {
        label: t("POOLS Wallet"),
        href: "https://www.poolschain.org/",
      },
      {
        label: t("NFT Marketplace"),
        href: "https://v2litepaper.pancakeswap.finance/",
      },
    ],
  },
  // {
  //   label: t("Help"),
  //   items: [
  //     {
  //       label: t("Customer Support"),
  //       href: "https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: t("Troubleshooting"),
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: t("Guides"),
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  {
    label: t("Gitbook Docs"),
    href: "https://pools-chain.gitbook.io/documentation/getting-started/background",

    items: [
      {
        label: "Gitbook Docs",
        href: "https://github.com/pancakeswap",
      },
      // {
      //   label: t("Documentation"),
      //   href: "https://docs.pancakeswap.finance",
      // },
      // {
      //   label: t("Bug Bounty"),
      //   href: "https://docs.pancakeswap.finance/code/bug-bounty",
      // },
      // {
      //   label: t("Audits"),
      //   href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      // {
      //   label: t("Careers"),
      //   href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      // },
    ],
  },
];
