import Head from "next/head";
import Layout from "src/containers/layout";
import Heroes from "./Heroes";
import Contact from "./Contact";
import WorkEperiences from "./WorkExperiences";
import Portfolios from "./Portfolios";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Danny Dwi Cahyono</title>
        <meta
          name="description"
          content="Welcome to my personal website! Get to know me through my quick introduction and check out my working experience, portfolios, and contacts. Let's connect and see how we can collaborate."
        />
        <link rel="canonical" href="https://dannydwicahyono.com/" />
        <meta property="og:url" content="https://dannydwicahyono.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Danny Dwi Cahyono" />
        <meta
          property="og:description"
          content="Welcome to my personal website! Get to know me through my quick introduction and check out my working experience, portfolios, and contacts. Let's connect and see how we can collaborate."
        />
        <meta
          property="og:image"
          content="assets/image/core-values/DannyCoreValues.jpg"
        />
      </Head>
      <Heroes />
      <WorkEperiences />
      <Portfolios />
      <Contact />
    </Layout>
  );
};

export default Home;
