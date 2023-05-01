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

import { headerMenus } from "src/constant/header";

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
      px={{ base: "4", md: "8", lg: "12", xl: "12", "2xl": "32" }}
      justifyContent="space-between"
      as="div"
    >
      <MotionHeading
        variants={headingParts}
        whileHover="hover"
        whileTap="tap"
        size="lg"
      >
        <Link href="/">Danny Dwi Cahyono</Link>
      </MotionHeading>
      <Grid
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "flex"]}
      >
        {headerMenus.map((menu, index) => (
          <GridItem
            colStart={index * 2 + 1}
            colEnd={index * 2 + 2}
            px="6"
            key={menu.name}
          >
            <MotionHeading
              variants={headingParts}
              whileHover="hover"
              whileTap="tap"
              size="md"
              fontWeight="normal"
            >
              <Link href={menu.path}>{menu.name}</Link>
            </MotionHeading>
          </GridItem>
        ))}
        <GridItem
          colStart={headerMenus.length * 2 + 1}
          colEnd={headerMenus.length * 2 + 2}
          px="6"
        >
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
              {headerMenus.map((menu, index) => {
                const delay = index * 0.2 + 0.5;
                return (
                  <MotionHeading
                    key={menu.name}
                    textAlign="center"
                    fontWeight="normal"
                    size="lg"
                    my="8"
                    initial={{ rotate: 180 }}
                    animate={{
                      rotate: 360,
                      transition: { delay, duration: 1, type: "spring" },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={menu.path}>{menu.name}</Link>
                  </MotionHeading>
                );
              })}
            </MotionBox>
          </MotionBox>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
