import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  SimpleGrid,
  Button,
  useMediaQuery,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

import { FaPlayCircle } from "react-icons/fa";
import { contactData } from "src/constant/contact";

const ContentVideoSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgCardBasedOnColorMode = useColorModeValue(
    "rgba(165, 202, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  const [selectedVideoId, setSelectedVideoId] = useState<string>("");

  const handlePreviewContent = ({ videoId }: { videoId: string }) => {
    setSelectedVideoId(videoId);
    onOpen();
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={4}
      mt={{ base: "8", md: "8", lg: "0" }}
    >
      <GridItem rowSpan={1} colSpan={2}>
        <Image
          alt="Content Creator Banner"
          height={226}
          width={896}
          src="/assets/image/content-creator/ContentCreatorBanner.png"
          style={{
            borderRadius: "20px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Heading size="sm" textAlign="center" mt="3">
          See My Content Example Below
        </Heading>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        <Box p="2" bg={bgCardBasedOnColorMode} borderRadius="md" pos="relative">
          <IconButton
            pos="absolute"
            colorScheme="blackAlpha"
            color="white"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            aria-label="Preview Video"
            icon={<FaPlayCircle fontSize="2rem" />}
            onClick={() =>
              handlePreviewContent({ videoId: "7197007372299111706" })
            }
          />
          <Image
            alt="Technical Content Cover"
            width={318}
            height={414}
            src="/assets/image/content-creator/TechnicalContentCover.jpeg"
            style={{
              width: "100%",
              maxHeight: "414px",
              objectFit: "cover",
            }}
          />
        </Box>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        <Box pos="relative" p="2" bg={bgCardBasedOnColorMode} borderRadius="md">
          <IconButton
            pos="absolute"
            colorScheme="blackAlpha"
            color="white"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            aria-label="Preview Video"
            icon={<FaPlayCircle fontSize="2rem" />}
            onClick={() =>
              handlePreviewContent({ videoId: "7197651078098210074" })
            }
          />
          <Image
            alt="Fun Content Cover"
            width={318}
            height={414}
            src="/assets/image/content-creator/FunContentCover.jpeg"
            style={{
              width: "100%",
              maxHeight: "414px",
              objectFit: "cover",
            }}
          />
        </Box>
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Previewing the content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isOpen ? (
              <iframe
                title="TikTok video"
                src={`https://www.tiktok.com/embed/v2/${selectedVideoId}?muted=0`}
                style={{ width: "100%", minHeight: "600px" }}
                allowFullScreen
              />
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

const ContentTextSection = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  const bgCardBasedOnColorMode = useColorModeValue(
    "rgba(165, 202, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Box>
      <Heading size={{ base: "lg", md: "xl", lg: "lg", xl: "xl" }}>
        Content Creation and Beyond
      </Heading>
      <Divider
        borderBottomWidth="2px"
        mt="2"
        borderColor={borderColorBasedOnColorMode}
        width="80%"
      />
      <Box mt="8">
        <Box pb="6">
          <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>
            Building Better Code
          </Heading>
          <Text mt="2">
            Elevate your inner developer with my practical and informative
            content on Javascript, React, and more. I&apos;m here to help you
            take your skills to the next level.
          </Text>
        </Box>
        <Box pb="4">
          <Heading size={{ md: "sm", lg: "md", xl: "lg" }}>
            The Programmer Life
          </Heading>
          <Text mt="2">
            Need a break from coding? Join me for funny and relatable content
            that all programmers can relate to. From debugging headaches to
            coding memes, and more. Let&apos;s laugh together and enjoy the
            lighter side of coding.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mt="4">
          {contactData
            .filter(
              (contact) =>
                contact.name !== "LinkedIn" && contact.name !== "Github"
            )
            .map(({ name, urlLink }) => (
              <Box
                key={name}
                bg={bgCardBasedOnColorMode}
                width="full"
                borderRadius="8px"
                padding="16px"
                as="div"
              >
                <Image
                  alt={`${name} Logo`}
                  height={isLargerThan1025 ? 80 : 60}
                  width={isLargerThan1025 ? 80 : 60}
                  src={`/assets/image/${name}.png`}
                />
                <Heading size="md" mt="2">
                  {name}
                </Heading>
                <Button
                  as="a"
                  size={isLargerThan1025 ? "md" : "sm"}
                  target="_blank"
                  href={urlLink}
                  mt={isLargerThan1025 ? "8" : "4"}
                  borderRadius="25px"
                  color="white"
                  width="100%"
                  bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
                  _hover={{
                    bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
                    opacity: 0.9,
                  }}
                >
                  Follow Me
                </Button>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

const ContentCreator = () => {
  const [isLargerThan996] = useMediaQuery("(min-width: 996px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Box
      py={{ base: "2", md: "12", lg: "16" }}
      px={{ base: "5", md: "12", lg: "8", xl: "12", "2xl": "32" }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        spacingX={{ lg: 10, "2xl": 20 }}
        spacingY={0}
        py={{ base: "4" }}
      >
        {isLargerThan996 ? <ContentVideoSection /> : <ContentTextSection />}
        {isLargerThan996 ? <ContentTextSection /> : <ContentVideoSection />}
      </SimpleGrid>
    </Box>
  );
};

export default ContentCreator;
