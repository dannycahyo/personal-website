import Blog from "src/components/blog";
import type { GetServerSidePropsContext } from "next";

function BlogPage() {
  return <Blog />;
}

export async function getServerSideProps({
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );
  return { props: {} };
}

export default BlogPage;
