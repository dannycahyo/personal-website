import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const bgBasedOnColorMode = useColorModeValue(
    "personalLight.100",
    "personalDark.400"
  );

  const bgCardBasedOnColorMode = useColorModeValue(
    "rgba(165, 202, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg={bgBasedOnColorMode}
      py={{ lg: "53px" }}
    >
      <Heading size="xl" textAlign="center">
        Let’s Connect and Say Hi
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        justifyContent="center"
        alignItems="center"
        mt="36px"
        py={{ base: "2", md: "4", lg: "37px" }}
        px={{ base: "4", md: "8", lg: "24", xl: "24" }}
      >
        <GridItem
          height="256px"
          bg={bgCardBasedOnColorMode}
          borderRadius="8px"
          padding="16px"
        >
          <Image
            alt="LinkedIn 3D Logo"
            height={84}
            width={84}
            src="/assets/image/LinkedIn.png"
          />
          <Heading size="lg" mt="24px">
            LinkedIn
          </Heading>
          <Button
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/danny-cahyo"
            mt="26px"
            borderRadius="25px"
            color="white"
            width="200px"
            height="44px"
            bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
            _hover={{
              bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
              opacity: 0.9,
            }}
          >
            Follow Me
          </Button>
        </GridItem>
        <GridItem
          height="256px"
          bg={bgCardBasedOnColorMode}
          borderRadius="8px"
          padding="16px"
        >
          <Image
            alt="LinkedIn 3D Logo"
            height={84}
            width={84}
            src="/assets/image/Instagram.png"
          />
          <Heading size="lg" mt="24px">
            Instagram
          </Heading>
          <Button
            as="a"
            target="_blank"
            href="https://www.instagram.com/danny_cahyo/"
            mt="26px"
            borderRadius="25px"
            color="white"
            width="200px"
            height="44px"
            bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
            _hover={{
              bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
              opacity: 0.9,
            }}
          >
            Follow Me
          </Button>
        </GridItem>
        <GridItem
          height="256px"
          bg={bgCardBasedOnColorMode}
          borderRadius="8px"
          padding="16px"
        >
          <Image
            alt="LinkedIn 3D Logo"
            height={84}
            width={84}
            src="/assets/image/Github.png"
          />
          <Heading size="lg" mt="24px">
            Github
          </Heading>
          <Button
            as="a"
            target="_blank"
            href="https://github.com/dannycahyo"
            mt="26px"
            borderRadius="25px"
            color="white"
            width="200px"
            height="44px"
            bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
            _hover={{
              bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
              opacity: 0.9,
            }}
          >
            Follow Me
          </Button>
        </GridItem>
        <GridItem
          height="256px"
          bg={bgCardBasedOnColorMode}
          borderRadius="8px"
          padding="16px"
        >
          <Image
            alt="LinkedIn 3D Logo"
            height={84}
            width={84}
            src="/assets/image/Tiktok.png"
          />
          <Heading size="lg" mt="24px">
            TikTok
          </Heading>
          <Button
            as="a"
            target="_blank"
            href="https://www.tiktok.com/@dannydwic"
            mt="26px"
            borderRadius="25px"
            color="white"
            width="200px"
            height="44px"
            bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
            _hover={{
              bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
              opacity: 0.9,
            }}
          >
            Follow Me
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
