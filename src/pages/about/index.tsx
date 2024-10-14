import About from "src/components/about";
import type { GetServerSidePropsContext } from "next";

function AboutPage() {
  return <About />;
}

export async function getServerSideProps({
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    "Vercel-CDN-Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );
  return { props: {} };
}

export default AboutPage;
