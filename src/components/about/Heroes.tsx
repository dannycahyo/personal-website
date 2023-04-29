import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

const Heroes = () => {
  const { colorMode } = useColorMode();

  const dotDecoration =
    colorMode === "light"
      ? "/assets/svg/DotDecoration.svg"
      : "/assets/svg/DotDecorationDark.svg";
  const dotDecorationMobile =
    colorMode === "light"
      ? "/assets/svg/DotDecorationMobile.svg"
      : "/assets/svg/DotDecorationMobileDark.svg";

  const [isMobileSize] = useMediaQuery("(max-width: 500px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Container
      centerContent
      maxW={{ base: "sm", md: "2xl", xl: "4xl" }}
      pt={{ base: "8", md: "8", lg: "42px" }}
      pos="relative"
    >
      <Box display="inline">
        <Heading
          fontSize={{ base: "40px", md: "48px" }}
          lineHeight="72px"
          display="inline"
        >
          Hi, I&#39;m&nbsp;
        </Heading>
        <Text
          bgGradient="linear(to-r, #00C0FD, #0056FD)"
          bgClip="text"
          display="inline"
          fontSize={{ base: "40px", md: "48px" }}
          lineHeight="72px"
          fontWeight="bold"
        >
          Danny
        </Text>
      </Box>
      <Text
        size={{ base: "md", md: "lg" }}
        mt="20px"
        mb="4"
        fontWeight="500"
        textAlign="center"
      >
        I strive to create valuable content that cuts through the noise and
        provides real value those who engage with it. Through speaking and
        teaching, I aim to help other engineers grow their skills and reach
        their full potential in the tech industry.
      </Text>
      <Box>
        <Image
          alt="Danny Profile's Image"
          src="/assets/image/JohnDoe.png"
          width={420}
          height={468}
        />
      </Box>
      <Box
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        color="white"
        borderRadius="100px"
        height={{ base: "30px", md: "44px" }}
        p={{ base: "6px 18px", md: "10px 24px" }}
        pos="absolute"
        bottom={32}
        left={{ base: 8, md: 14, lg: 20, xl: 36 }}
      >
        <Text size={{ base: "xs", md: "sm" }} fontWeight="600">
          Tech Speaker
        </Text>
      </Box>
      <Box
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        color="white"
        borderRadius="100px"
        height={{ base: "30px", md: "44px" }}
        p={{ base: "6px 18px", md: "10px 24px" }}
        pos="absolute"
        bottom={8}
      >
        <Text size={{ base: "xs", md: "sm" }} fontWeight="600">
          Front-End Engineer
        </Text>
      </Box>
      <Box
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        color="white"
        borderRadius="100px"
        height={{ base: "30px", md: "44px" }}
        p={{ base: "6px 18px", md: "10px 24px" }}
        pos="absolute"
        bottom={32}
        right={{ base: 4, md: 10, lg: 16, xl: 24 }}
      >
        <Text size={{ base: "xs", md: "sm" }} fontWeight="600">
          Tech Content Creator
        </Text>
      </Box>
      <Box pos="absolute" bottom={20} zIndex="-2">
        {isMobileSize ? (
          <Image
            alt="Dot Deccoration Mobile"
            src={dotDecorationMobile}
            width={751}
            height={751}
          />
        ) : (
          <Image
            alt="Dot Deccoration"
            src={dotDecoration}
            width={751}
            height={751}
          />
        )}
      </Box>
      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Big HalF Circle Decoration"
          src="/assets/svg/BigHalfCircle.svg"
          width={751}
          height={751}
        />
      </Box>
      {isMobileSize ? null : (
        <Box pos="absolute" bottom={0} zIndex="-2">
          <Image
            alt="Big HalF Circle Decoration"
            src="/assets/svg/BigHalfCircle.svg"
            width={751}
            height={751}
          />
        </Box>
      )}
      {isMobileSize ? null : (
        <Box pos="absolute" bottom={0} zIndex="-2">
          <Image
            alt="Small HalF Circle Decoration"
            src="/assets/svg/SmallHalfCircle.svg"
            width={651}
            height={651}
          />
        </Box>
      )}

      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Blur Background"
          src={
            isMobileSize
              ? "/assets/image/MobileBlueBlurBg.png"
              : "/assets/image/BlueBlurBg.png"
          }
          width={1241}
          height={1241}
        />
      </Box>
    </Container>
  );
};

export default Heroes;
