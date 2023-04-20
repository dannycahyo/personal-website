import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const AboutPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <Stack>
        <Box backgroundColor="personalDark.100">
          <Heading size="2xl">Front-End Developer</Heading>
          <Text size="sm">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere,
            whose upper half was strewn with silver. Looking down into the dark
            gulf below, I could see a ruddy light streaming through a rift in
            the clouds.
          </Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutPage;
