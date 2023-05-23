import BlogDetail from "src/components/blog/detail";
import type { GetStaticPropsContext } from "next";

import fs from "fs";
import path from "path";

const markdownPath = path.join(process.cwd(), "src", "markdown");

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: "why-bother-learning-data-structures-and-algorithms" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug ?? "";
  const markdownFile = path.join(markdownPath, `${slug}.md`);
  const markdownContent = fs.readFileSync(markdownFile, "utf-8");

  return {
    props: { slug: slug, markdownContent: markdownContent },
  };
}

function BlogDetailPage({
  slug,
  markdownContent,
}: {
  slug: string;
  markdownContent: string;
}) {
  return <BlogDetail slug={slug} markdownContent={markdownContent} />;
}

export default BlogDetailPage;
