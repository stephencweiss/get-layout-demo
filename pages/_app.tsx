import React from "react";
// import App from "next/app";
// import SiteLayout from "../components/SiteLayout";
// import AccountSettingsLayout from "../components/AccountSettingsLayout";
// import "../css/tailwind.css";
// import "../styles/theme.scss";
// import "../styles/reset.scss";
// import "../styles/globals.scss";
// import "prismjs/themes/prism-solarizedlight.css";

import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { getLayout as getDefaultLayout } from "../components/SiteLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => getDefaultLayout(page));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
