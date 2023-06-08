import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  Link,
  useMediaQuery,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

import Layout from "src/containers/layout";
import React from "react";

type Style = {
  [key: string]: React.CSSProperties;
};

const BlogDetail = ({
  slug,
  markdownContent,
}: {
  slug: string;
  markdownContent: string;
}) => {
  const { data, content } = matter(markdownContent);

  const { title, imgLink, imgSource, imgSourceLink, date, readEstimation } =
    data;

  const [markdownTheme, setMarkdownTheme] = useState<Style>();
  const [isMobileSize] = useMediaQuery("(max-width: 500px)", {
    ssr: true,
    fallback: false,
  });

  const blogDate = new Date(date);

  const formattedDate = blogDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const headingFontSize = {
    "2xl": isMobileSize ? "xl" : "2xl",
    xl: isMobileSize ? "lg" : "xl",
    lg: isMobileSize ? "md" : "lg",
    md: isMobileSize ? "sm" : "md",
    sm: isMobileSize ? "xs" : "sm",
  };

  const matchResult = content.match(/## Background\s*\n(.+)/s);
  const firstParagraph = matchResult ? matchResult[1] : "";

  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism").then((module) => {
      setMarkdownTheme(module.darcula);
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={firstParagraph} />

        <link
          rel="canonical"
          href={`https://dannydwicahyono.com/blog/${slug}`}
        />
        <meta
          property="og:url"
          content={`https://dannydwicahyono.com/blog/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={firstParagraph} />
        <meta property="og:image" content={imgLink} />
      </Head>

      <Container
        maxW={{ base: "sm", md: "2xl", xl: "4xl" }}
        px={{ xs: "1", md: "4" }}
      >
        <Center flexDir="column" py={{ base: "4", md: "8" }}>
          <Box pb="8">
            <Heading size={{ base: "lg", md: "xl" }}>{title}</Heading>
            <Text mt="2">{`${formattedDate} --- ${readEstimation} minutes read`}</Text>
          </Box>
          <Image
            src={imgLink}
            alt={title}
            width={614}
            height={370}
            style={{ borderRadius: 10 }}
          />
          <Link href={imgSourceLink} target="_blank" mt="4" color="blue.400">
            {imgSource}
          </Link>
        </Center>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <Heading size={headingFontSize["2xl"]} py="6" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <Heading size={headingFontSize["xl"]} py="4" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <Heading size={headingFontSize["lg"]} py="3" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <Heading size={headingFontSize["md"]} py="2" {...props} />
            ),
            h5: ({ node, ...props }) => (
              <Heading size={headingFontSize["sm"]} py="1" {...props} />
            ),
            h6: ({ node, ...props }) => <Heading size="xs" {...props} />,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={markdownTheme}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
            p: ({ node, ...props }) => (
              <Text py="2" fontSize={{ base: "sm", md: "18px" }} {...props}>
                {props.children}
              </Text>
            ),
            ol: ({ node, ...props }) => (
              <OrderedList py="2" pl="2" {...props}>
                {props.children}
              </OrderedList>
            ),
            ul: ({ node, ...props }) => (
              <UnorderedList py="2" pl="2" {...props}>
                {props.children}
              </UnorderedList>
            ),
            li: ({ node, ...props }) => (
              <ListItem py="1" {...props}>
                <Text fontSize={{ base: "sm", md: "18px" }}>
                  {props.children}
                </Text>
              </ListItem>
            ),
            a: ({ node, ...props }) => (
              <Link color="blue.400" {...props}>
                {props.children}
              </Link>
            ),
            blockquote: ({ node, ...props }) => (
              <Box borderLeft="4px solid" borderColor="gray.300" pl="4" py="2">
                {props.children}
              </Box>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Container>
    </Layout>
  );
};

export default BlogDetail;
