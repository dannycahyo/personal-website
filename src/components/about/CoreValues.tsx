import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const TextSection = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Box mt="8">
      <Heading size={{ base: "lg", md: "xl" }}>My Core Values Of Life</Heading>
      <Divider
        borderBottomWidth="2px"
        mt="2"
        borderColor={borderColorBasedOnColorMode}
        width="80%"
      />
      <Box py="4">
        <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>TikTok</Heading>
        <Text mt="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus praesentium architecto nostrum amet repudiandae quia nam
          soluta velit unde ducimus quo, iure, quos esse consectetur est beatae
          eius. Eum!
        </Text>
      </Box>
      <Box pb="4">
        <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>Instagram</Heading>
        <Text mt="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus praesentium architecto nostrum amet repudiandae quia nam
          soluta velit unde ducimus quo, iure, quos esse consectetur est beatae
          eius. Eum!
        </Text>
      </Box>
      <Box pb="4">
        <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>Youtube</Heading>
        <Text mt="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus praesentium architecto nostrum amet repudiandae quia nam
          soluta velit unde ducimus quo, iure, quos esse consectetur est beatae
          eius. Eum!
        </Text>
      </Box>
    </Box>
  );
};

const ImageSection = () => (
  <Box bg="papayawhip" h={{ base: "80", md: "full" }} />
);

const CoreValues = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Container
      py={{ base: "2", md: "8" }}
      px={{ base: "6", md: "12", lg: "16", xl: "20", "2xl": "32" }}
      maxW={{ xl: "8xl" }}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 2, md: 10 }}>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          {isLargerThan769 ? <TextSection /> : <ImageSection />}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          {isLargerThan769 ? <ImageSection /> : <TextSection />}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CoreValues;
