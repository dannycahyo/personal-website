import Head from "next/head";
import Layout from "src/containers/layout";
import ComingSoon from "src/containers/coming-soon/ComingSoon";
import BlogList from "./BlogList";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Danny Dwi Cahyono Blog</title>
        <meta
          name="description"
          content="Check out Danny Dwi Cahyono's latest blog posts on software engineering, web development, and more. Stay up-to-date on the latest trends and insights in the industry."
        />

        <link rel="canonical" href="https://dannydwicahyono.com/blog" />
        <meta property="og:url" content="https://dannydwicahyono.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Danny's Blog" />
        <meta
          property="og:description"
          content="Check out Danny Dwi Cahyono's latest blog posts on software engineering, web development, and more. Stay up-to-date on the latest trends and insights in the industry."
        />
        <meta
          property="og:image"
          content="assets/image/core-values/DannyCoreValues.jpg"
        />
      </Head>
      <BlogList />
      {/* <ComingSoon /> */}
    </Layout>
  );
};

export default Blog;
