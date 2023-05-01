import { useRef, useEffect } from "react";
import {
  Grid,
  GridItem,
  Text,
  Heading,
  Button,
  Divider,
  Box,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

const BrandingSection = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Box px={{ base: "2" }}>
      <Heading size="lg" fontWeight="500px">
        Danny
      </Heading>
      <Divider
        width="16%"
        borderBottomWidth="2px"
        mt="4"
        borderColor={borderColorBasedOnColorMode}
      />
      <Text
        pt="16px"
        pb="24px"
        bgGradient="linear(to-l, #256BF4, #3AC1DE)"
        bgClip="text"
        size={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
        fontWeight="extrabold"
      >
        Front-End Engineer
      </Text>
      <Text size="sm" width={{ base: "100%", md: "80%", lg: "80%", xl: "70%" }}>
        A Front-End Engineer with a high curiosity in mind. His interest makes
        him connect the dots between mathematics and philosophy in programming.
        In addition to his day-to-day work, he loves mentoring, spreading
        knowledge through sharing sessions and content creation to educate
        others.
      </Text>
      <Button
        mt="40px"
        borderRadius="25px"
        color="white"
        width="200px"
        height="44px"
        as="a"
        href="mailto:@dannydwicahyono@gmail.com"
        target="_blank"
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        _hover={{
          bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
          opacity: 0.9,
        }}
      >
        Contact Me
      </Button>
    </Box>
  );
};

const AnimationSection = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Box
      width={{ base: "300px", lg: "400px", xl: "541px" }}
      height={{ base: "300px", lg: "400", xl: "556px" }}
      margin={{ base: "auto" }}
      mt={{ base: "2" }}
    >
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets7.lottiefiles.com/packages/lf20_8zzltjyc.json"
      />
    </Box>
  );
};

const Heroes = () => {
  const [isMobileSize] = useMediaQuery("(max-width: 500px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      py={{ base: "2", md: "4" }}
      px={{ base: "4", md: "8", lg: "12", xl: "24", "2xl": "32" }}
    >
      <GridItem colStart={1} colEnd={[5, 3, 3, 3]} pb={{ xl: "12" }}>
        {isMobileSize ? <AnimationSection /> : <BrandingSection />}
      </GridItem>
      <GridItem colStart={[1, 3, 3, 3]} colEnd={[5, 6, 6, 6]}>
        {isMobileSize ? <BrandingSection /> : <AnimationSection />}
      </GridItem>
    </Grid>
  );
};

export default Heroes;
