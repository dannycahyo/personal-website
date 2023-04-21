import * as React from "react";
import Link from "next/link";
import {
  Flex,
  Heading,
  HeadingProps,
  Grid,
  GridItem,
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const { toggleColorMode, colorMode } = useColorMode();

  const bgBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  const MotionBox = motion<BoxProps>(Box);

  const MotionHeading = motion<HeadingProps>(Heading);

  const MotionIconButton = motion<IconButtonProps>(IconButton);

  const mobileMenu = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut" },
    },
  };

  const headingParts = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 1.2,
    },
  };

  return (
    <Flex
      alignItems="center"
      py={{ base: "2", md: "8" }}
      px={{ base: "4", md: "8", lg: "12", xl: "24" }}
      justifyContent="space-between"
    >
      <MotionHeading
        variants={headingParts}
        whileHover="hover"
        whileTap="tap"
        size="lg"
        fontWeight={540}
      >
        <Link href="/">Danny Dwi Cahyono</Link>
      </MotionHeading>
      <Grid
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "flex"]}
      >
        <GridItem colStart={1} colEnd={2} px="6">
          <MotionHeading
            variants={headingParts}
            whileHover="hover"
            whileTap="tap"
            size="md"
            fontWeight="normal"
          >
            <Link href="/blog">Blog</Link>
          </MotionHeading>
        </GridItem>
        <GridItem colStart={3} colEnd={4} px="6">
          <MotionHeading
            variants={headingParts}
            whileHover="hover"
            whileTap="tap"
            size="md"
            fontWeight="normal"
          >
            <Link href="/about">About</Link>
          </MotionHeading>
        </GridItem>
        <GridItem colStart={5} colEnd={6} pl="6">
          <MotionIconButton
            variants={headingParts}
            whileHover="hover"
            aria-label="exit-menu"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            size="lg"
            borderRadius="full"
          />
        </GridItem>
      </Grid>
      <Box display={["flex", "flex", "none"]}>
        <MotionIconButton
          variants={headingParts}
          whileHover="hover"
          whileTap="tap"
          aria-label="menu button"
          icon={<HamburgerIcon />}
          onClick={() => setMenu(true)}
          size="lg"
          borderRadius="full"
          fontWeight="extrabold"
        />
        {menu && (
          <MotionBox
            variants={mobileMenu}
            exit="hidden"
            position="fixed"
            top="0"
            left="0"
            width="full"
            height="23rem"
            bg={bgBasedOnColorMode}
            zIndex="1"
          >
            <MotionIconButton
              variants={headingParts}
              whileHover="hover"
              aria-label="exit-menu"
              icon={<CloseIcon />}
              position="absolute"
              top="12"
              right="12"
              onClick={() => setMenu(false)}
              size="lg"
              borderRadius="full"
            />
            <MotionIconButton
              variants={headingParts}
              whileHover="hover"
              aria-label="exit-menu"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              position="absolute"
              top="12"
              left="12"
              onClick={toggleColorMode}
              size="lg"
              borderRadius="full"
            />
            <MotionBox my="32" mx="auto">
              <MotionHeading
                textAlign="center"
                fontWeight="normal"
                size="lg"
                my="8"
                initial={{ rotate: 180 }}
                animate={{
                  rotate: 360,
                  transition: { delay: 0.5, duration: 1, type: "spring" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/blog">Blog</Link>
              </MotionHeading>
              <MotionHeading
                textAlign="center"
                fontWeight="normal"
                size="lg"
                my="8"
                initial={{ rotate: 180 }}
                animate={{
                  rotate: 360,
                  transition: { delay: 0.7, duration: 1, type: "spring" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about">About</Link>
              </MotionHeading>
            </MotionBox>
          </MotionBox>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
