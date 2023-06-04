import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "src/constant/blog";
import type React from "react";

type BlogListProps = {
  blogPost: BlogPost[];
};

const BlogList: React.FC<BlogListProps> = ({ blogPost }) => {
  return (
    <Container
      centerContent
      maxW={{ base: "sm", md: "4xl", xl: "5xl" }}
      py="12"
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} spacing={8}>
        {blogPost.map((blog) => {
          const date = new Date(blog.date);

          const formattedDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <Box key={blog.slug} width="full">
              <Link href={`/blog/${blog.slug}`}>
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={blog.imageURL}
                    alt="Coming Soon Image"
                    width={450}
                    height={450}
                    style={{ borderRadius: "8px" }}
                  />
                </AspectRatio>
                <Text fontSize="20px" mt="3" color="GrayText">
                  {`${formattedDate} --- ${blog.readEstimate} min read`}
                </Text>
                <Heading size="lg" mt="4">
                  {blog.title}
                </Heading>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default BlogList;
