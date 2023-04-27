import Image from "next/image";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";

const Heroes = () => {
  const { colorMode } = useColorMode();

  const dotDecoration =
    colorMode === "light"
      ? "/assets/svg/DotDecoration.svg"
      : "/assets/svg/DotDecorationDark.svg";

  return (
    <Container
      centerContent
      maxW={{ base: "sm", md: "2xl", xl: "4xl" }}
      pt={{ base: "8", md: "8", lg: "42px" }}
      pos="relative"
    >
      <Box display="inline">
        <Heading fontSize="48px" lineHeight="72px" display="inline">
          Hi, I&#39;m&nbsp;
        </Heading>
        <Text
          bgGradient="linear(to-r, #00C0FD, #0056FD)"
          bgClip="text"
          display="inline"
          fontSize="48px"
          lineHeight="72px"
          fontWeight="bold"
        >
          Danny
        </Text>
      </Box>
      <Text size="lg" mt="24px" fontWeight="500" textAlign="center">
        I am a User Interface Designer & Front-end Developer. I design
        delightful products & code web templates.
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
        height="44px"
        p="10px 24px"
        pos="absolute"
        bottom={32}
        left={36}
      >
        <Text size="sm" fontWeight="600">
          Tech Speaker
        </Text>
      </Box>
      <Box
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        color="white"
        borderRadius="100px"
        height="44px"
        p="10px 24px"
        pos="absolute"
        bottom={8}
      >
        <Text size="sm" fontWeight="600">
          Front-End Engineer
        </Text>
      </Box>
      <Box
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        color="white"
        borderRadius="100px"
        height="44px"
        p="10px 24px"
        pos="absolute"
        bottom={32}
        right={24}
      >
        <Text size="sm" fontWeight="600">
          Tech Content Creator
        </Text>
      </Box>
      <Box pos="absolute" bottom={20} zIndex="-2">
        <Image
          alt="Dot Deccoration"
          src={dotDecoration}
          width={751}
          height={751}
        />
      </Box>
      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Big HalF Circle Decoration"
          src="/assets/svg/BigHalfCircle.svg"
          width={751}
          height={751}
        />
      </Box>
      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Big HalF Circle Decoration"
          src="/assets/svg/BigHalfCircle.svg"
          width={751}
          height={751}
        />
      </Box>
      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Small HalF Circle Decoration"
          src="/assets/svg/SmallHalfCircle.svg"
          width={651}
          height={651}
        />
      </Box>
      <Box pos="absolute" bottom={0} zIndex="-2">
        <Image
          alt="Blur Background"
          src="/assets/image/BlueBlurBg.png"
          width={1241}
          height={1241}
        />
      </Box>
    </Container>
  );
};

export default Heroes;
