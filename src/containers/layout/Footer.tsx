import Link from "next/link";
import {
  Box,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiTwotoneMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const bgBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );
  return (
    <Box
      as="footer"
      py={{ base: "4", md: "8" }}
      px={{ base: "0", lg: "12", xl: "12", "2xl": "32" }}
    >
      <Divider mb="6" />
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Stack>
          <Link href="/">
            <Heading size={{ base: "md", md: "lg" }}>Dany Dwi Cahyono</Heading>
          </Link>
          <Text
            fontSize="md"
            color="subtle"
            display={{ base: "inline", md: "flex" }}
            textAlign="center"
          >
            <Text>All rights reserved &copy;</Text>
            <Text>Danny Dwi Cahyono {new Date().getFullYear()}</Text>
          </Text>
        </Stack>
        <Stack pt={{ base: "3", md: "0" }} alignItems="center">
          <Heading size={{ base: "md", md: "lg" }}>Get in touch!</Heading>
          <Stack
            justify="space-between"
            direction="row"
            align="center"
            pt={{ base: "3", md: "0" }}
          >
            <ButtonGroup variant="ghost" gap={2}>
              <IconButton
                bg={bgBasedOnColorMode}
                _hover={{
                  background:
                    "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
                  opacity: 0.8,
                }}
                as="a"
                href="mailto:@dannydwicahyono@gmail.com"
                target="_blank"
                aria-label="Email"
                icon={<AiTwotoneMail fontSize="1.25rem" />}
              />
              <IconButton
                bg={bgBasedOnColorMode}
                _hover={{
                  background:
                    "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
                  opacity: 0.8,
                }}
                as="a"
                href="https://www.linkedin.com/in/danny-cahyo"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                bg={bgBasedOnColorMode}
                _hover={{
                  background:
                    "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
                  opacity: 0.8,
                }}
                as="a"
                href="https://github.com/dannycahyo"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
