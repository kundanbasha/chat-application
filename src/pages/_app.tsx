import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import theme from "@/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page: any) => page);

  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
    </ChakraProvider>
  );
}
