import Blog from "src/components/blog";

function BlogPage() {
  return <Blog />;
}

export async function getServerSideProps() {
  return { props: {} };
}
export default BlogPage;
