import React from "react";

import { getLayout as getDefaultLayout } from "../components/SiteLayout";
import { AppPropsWithLayout } from "../types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: AppPropsWithLayout) => getDefaultLayout(page));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
