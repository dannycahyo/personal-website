import Image from "next/image";
import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

const TextSection = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Box mt={{ base: "8", md: "0" }}>
      <Heading size={{ base: "lg", md: "xl" }}>My Core Values Of Life</Heading>
      <Divider
        borderBottomWidth="2px"
        mt="2"
        borderColor={borderColorBasedOnColorMode}
        width="80%"
      />
      <Box mt="8">
        <Box pb="4">
          <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>
            A Lifelong Pursuit of Knowledge
          </Heading>
          <Text mt="2">
            As someone who believes in the lifelong pursuit of knowledge, I
            recognize that the more I learn, the more I realize how much I still
            have to learn. I am committed to continuously learning and improving
            myself so that I can be of greater use and value to those around me.
            Learning is not just a means to an end for me, it is a way of life
            that fuels my curiosity and helps me grow as a person.
          </Text>
        </Box>
        <Box pb="4">
          <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>
            Spread kindness through sharing
          </Heading>
          <Text mt="2">
            For me, spreading kindness through sharing is not just a social
            responsibility, it is a way to fulfill my soul and bring about the
            perfection of my character. I believe that sharing my knowledge,
            skills, and experiences with others is one of the most important
            things I can do to make a positive impact on the world around me.
            Whether it&apos;s through teaching, mentoring, or just offering a
            listening ear, I strive to be a source of kindness and support for
            those who need it most.
          </Text>
        </Box>
        <Box pb="4">
          <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>
            Synergy in Collaboration
          </Heading>
          <Text mt="2">
            I believe that teamwork truly does make the dream work. By bringing
            together diverse perspectives, ideas, and experiences, we can
            achieve great things that we never could have accomplished on our
            own. Collaboration is not just about working together towards a
            common goal, it&apos;s about building relationships, fostering
            mutual respect and understanding, and creating something truly
            amazing together.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const ImageSection = () => (
  <Box
    h="full"
    w="full"
    display={{ base: "flex", lg: "block" }}
    justifyContent="center"
    alignItems="center"
  >
    <Image
      alt="Danny Photos"
      src="/assets/image/core-values/DannyCoreValues.jpg"
      width={600}
      height={600}
      style={{ borderRadius: "5%" }}
    />
  </Box>
);

const CoreValues = () => {
  const [isLargerThan996] = useMediaQuery("(min-width: 996px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Box
      py={{ base: "8", md: "12", lg: "16" }}
      px={{ base: "5", md: "12", lg: "8", xl: "12", "2xl": "32" }}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 2, md: 12, xl: 20 }}>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          {isLargerThan996 ? <TextSection /> : <ImageSection />}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          {isLargerThan996 ? <ImageSection /> : <TextSection />}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CoreValues;
