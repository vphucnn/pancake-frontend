import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.pancakeswap.finance/contact-us",
        isHighlighted: true,
      },
      {
        label: t("Brand"),
        href: "https://docs.pancakeswap.finance/brand",
      },
      // {
      //   label: t("Blog"),
      //   href: "https://blog.pancakeswap.finance/",
      // },
      // {
      //   label: t("Community"),
      //   href: "https://docs.pancakeswap.finance/contact-us/telegram",
      // },
      // {
      //   label: t("Litepaper"),
      //   href: "https://v2litepaper.pancakeswap.finance/",
      // },
      // {
      //   label: t("CAKE Emission Projection"),
      //   href: "https://analytics.pancakeswap.finance/",
      // },
      // {
      //   label: t("Terms Of Service"),
      //   href: "https://pancakeswap.finance/terms-of-service",
      // },
      // {
      //   label: "—",
      // },
      // {
      //   label: t("Merchandise"),
      //   href: "https://merch.pancakeswap.finance/",
      //   isHighlighted: true,
      // },
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
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance",
      },
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
