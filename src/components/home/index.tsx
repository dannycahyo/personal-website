import Layout from "src/containers/layout";
import Heroes from "./Heroes";
import Contact from "./Contact";
import WorkEperiences from "./WorkExperiences";
import Portfolios from "./Portfolios";

const Home = () => {
  return (
    <Layout>
      <Heroes />
      <WorkEperiences />
      <Portfolios />
      <Contact />
    </Layout>
  );
};

export default Home;
