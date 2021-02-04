import React from "react";
import Head from "next/head";

import "@public/static/styles/reset.css";
import "@public/static/styles/style.scss";

import Header from "@components/_Header";
import Content from "@components/_Content";
import Footer from "@components/_Footer";
import ScrollToTop from "@components/ScrollToTop";
import Carousel from "@components/Carousel";

import { GlobalProvider } from "@utils/Global";
import { ModalProvider } from "@utils/Modal";

//////////////////////// COMPONENT ////////////////////////
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <GlobalProvider>
      <ModalProvider>
        <Head>
          <title>Chelsea DiIonno</title>

          <meta name="description" content="Chelsea DiIonno | Character Designer & Visual Developer" />
          <meta name="og:image" content="/preview.png" />
          <meta name="copyright" content="Chelsea DiIonno" />

          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        {!loading ? (
          <div id="root">
            <Header />
            <Content>
              <Component {...pageProps} />
            </Content>
            <Footer />
            <ScrollToTop />
            <Carousel />
          </div>
        ) : null}
      </ModalProvider>
    </GlobalProvider>
  );
}
