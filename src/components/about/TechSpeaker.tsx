import Image from "next/image";
import {
  Heading,
  Button,
  Text,
  Flex,
  Box,
  Grid,
  useColorModeValue,
  Divider,
  Container,
  Center,
  Tag,
  HStack,
  TagLabel,
  IconButton,
  Stack,
} from "@chakra-ui/react";

import { FaYoutube } from "react-icons/fa";
import ChakraCarousel from "src/containers/ChakraCarousel";
import { techSpeakerData } from "src/constant/techSpeaker";

const TechSpeaker = () => {
  const bgBasedOnColorMode = useColorModeValue("#F7F7F7F7", "personalDark.400");

  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Container
      centerContent
      maxW={{ base: "fit-content", md: "2xl", lg: "3xl", xl: "4xl" }}
      p="0px"
    >
      <Grid justifyContent="center" alignItems="center">
        <Heading size={{ base: "lg", md: "xl" }}>My Inspiring Talks</Heading>
        <Divider
          borderBottomWidth="2px"
          mt="4"
          borderColor={borderColorBasedOnColorMode}
        />
      </Grid>
      <ChakraCarousel gap={32}>
        {techSpeakerData.map((event) => (
          <Box
            mt={{ base: "20px", md: "40px" }}
            width={{ base: "full", md: "80%" }}
            marginX="auto"
            key={event.title}
            bg={bgBasedOnColorMode}
            borderRadius="40px"
            p={{ base: "16px", md: "40px" }}
            pt="10px"
          >
            <Flex
              justifyContent="space-between"
              flexDir={{ base: "column", md: "row" }}
              alignItems="center"
              mt="4"
            >
              <Box>
                <Heading
                  fontSize={{ base: "md", md: "md", lg: "lg", xl: "xl" }}
                  lineHeight={{ base: "inherit" }}
                  textAlign="left"
                >
                  {event.title}
                </Heading>
                <HStack mt="1">
                  <Box
                    as="div"
                    w="12px"
                    height="12px"
                    bg="#68D94A"
                    borderRadius="full"
                  />
                  <Text size={{ base: "xs", md: "sm" }} textAlign="left">
                    {event.date}
                  </Text>
                </HStack>
              </Box>
              <HStack
                gap={1}
                mt={{ base: "3", md: "0" }}
                alignSelf="flex-start"
              >
                {event.topics.map((topic) => (
                  <Tag
                    size="lg"
                    colorScheme="cyan"
                    key={topic}
                    borderRadius="full"
                  >
                    <TagLabel>
                      <Text size="xs">{topic}</Text>
                    </TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Flex>

            <Center pt="4">
              <Image
                alt={event.title}
                width={400}
                height={400}
                src={event.image}
                style={{ borderRadius: "20px", width: "100%" }}
              />
            </Center>

            <Flex justifyContent="space-between" alignItems="center" mt="4">
              <Stack gap={2} flexDir={{ base: "column", md: "row" }}>
                <Button
                  borderRadius="25px"
                  bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
                  _hover={{
                    bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
                    opacity: 0.8,
                  }}
                  color="white"
                  as="a"
                  href={event.eventLink}
                  target="_blank"
                  size={{ base: "sm", lg: "lg" }}
                >
                  <Text size="sm" fontWeight="600">
                    See Detail
                  </Text>
                </Button>
                {event.videoLink !== undefined ? (
                  <IconButton
                    as="a"
                    href={event.videoLink}
                    aria-label="event video"
                    icon={<FaYoutube fontSize="1.25rem" />}
                    variant="outline"
                    colorScheme="red"
                    size="sm"
                  />
                ) : null}
              </Stack>
              <Box as="div">
                <Heading
                  size={{ base: "sm", lg: "xl" }}
                  as="a"
                  href={event.organizerLink}
                  target="_blank"
                >
                  {event.organizer}
                </Heading>
                <Divider borderBottomWidth="4px" mt="4" borderColor="yellow" />
              </Box>
            </Flex>
          </Box>
        ))}
      </ChakraCarousel>
    </Container>
  );
};

export default TechSpeaker;
