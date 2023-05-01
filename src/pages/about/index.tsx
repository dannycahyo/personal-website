import About from "src/components/about";

function AboutPage() {
  return <About />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default AboutPage;
