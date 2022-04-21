import '../styles/index.css';
import type { AppProps } from 'next/app';
import Layout from "/layouts/Layout";
import Head from "next/head";

const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
      <>
           <Head>
              <meta charSet="utf-8" />
              <title>MfonAbasi Udobia | Fullstack Developer</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="shortcut icon" href="/images/logo.png"  type="image/x-icon"/>
            </Head>
          <Layout>
            <div className="page-wrapper">
               <Component {...pageProps} />
            </div>
          </Layout>
      </>
  )
}

export default MyApp