import Head from "next/head";
import Layout from "src/containers/layout";
import BlogList from "./BlogList";

import {
  Text,
  Container,
  Divider,
  Heading,
  useColorModeValue,
  Center,
  Box,
} from "@chakra-ui/react";

import { blogPost } from "src/constant/blog";

const Blog = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Layout>
      <Head>
        <title>The Danny D. Cahyono Blog</title>
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

      <Container maxW={{ base: "sm", md: "3xl", xl: "4xl" }} px={{ base: "2" }}>
        <Center>
          <Box>
            <Heading size="xl" textAlign="center" pt={{ base: "4", md: "0" }}>
              My Blog Post
            </Heading>
            <Divider
              width="full"
              borderBottomWidth="2px"
              mt="4"
              borderColor={borderColorBasedOnColorMode}
            />
          </Box>
        </Center>
        <Text pt="4" textAlign="center">
          Here, you&apos;ll find a collection of my thoughts, ideas, and
          experiences on a variety of topics that I&apos;m passionate about. As
          a software developer, I&apos;m constantly learning and exploring new
          technologies, and I&apos;m excited to share my insights with you. My
          blog is a place for me to express my ideas and engage with fellow
          developers. Whether you&apos;re just starting out in the field or a
          seasoned pro, I hope that my blog will inspire you and spark new
          ideas.
        </Text>
      </Container>

      <BlogList blogPost={blogPost} />
    </Layout>
  );
};

export default Blog;
