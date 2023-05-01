import Home from "src/components/home";

function HomePage() {
  return <Home />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default HomePage;
