import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  return (
    <Container
      centerContent
      maxW={{ base: "sm", md: "4xl", xl: "5xl" }}
      py="12"
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} spacing={8}>
        {Array.from({ length: 6 }, (_, i) => (
          <Box key={i} width="full">
            <Link href={`/blog/${i + 1}`}>
              <Image
                src="/assets/image/portfolios/Majer Otang.jpg"
                alt="Coming Soon Image"
                width={450}
                height={450}
                style={{ borderRadius: "8px", height: 320 }}
              />
              <Text fontSize="20px" mt="3">
                Jun3 4th, 2019 - 3 min read
              </Text>

              <Heading size="lg" mt="4">
                Why should we learn and care with Data Structure & Algorithms
              </Heading>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BlogList;
