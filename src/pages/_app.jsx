import React from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {  

  return (
        <Layout>
          <Component {...pageProps}/>  
        </Layout>
  );
}

export default MyApp;
