import "../styles/globals.scss";
import Layout from "../components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { resourcesApi } from "../redux/apiStore";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps, router }) {
  const varients = {
    pageInitial: {
      opacity: 0.5,
    },
    pageAnimate: {
      opacity: 1,
    },
  };
  return (
    <ApiProvider api={resourcesApi}>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Layout>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={varients}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </Provider>
    </ApiProvider>
  );
}

export default MyApp;
