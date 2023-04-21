import Footer from "src/containers/Footer";
import Header from "src/containers/Header";
import Heroes from "./Heroes";
import Contact from "./Contact";
import WorkEperiences from "./WorkExperiences";

const Home = () => {
  return (
    <div>
      <Header />
      <Heroes />
      <WorkEperiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
