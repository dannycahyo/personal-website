import {
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Box,
  Grid,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import ChakraCarousel from "src/containers/ChakraCarousel";
import { workExperienceData } from "src/constant/workExperience";

const WorkEperiences = () => {
  const bgBasedOnColorMode = useColorModeValue(
    "linear-gradient(180deg, #00C0FD 0%, #0056FD 100%)",
    "personalDark.400"
  );

  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  // TODO: USE THIS COMPONENT FOR TALK SECTION
  // TODO: REPLACE THIS SECTION WITH THE ONE LOOKS LIKE GARY SHENG

  return (
    <Box
      py={{ base: "8", md: "8", lg: "42px" }}
      px={{ base: "0px", md: "8", lg: "12", xl: "110px", "2xl": "32" }}
    >
      <Grid justifyContent="center" alignItems="center">
        <Heading size={{ base: "lg", md: "xl" }}>My Journey</Heading>
        <Divider
          borderBottomWidth="2px"
          mt="4"
          borderColor={borderColorBasedOnColorMode}
        />
      </Grid>
      <ChakraCarousel gap={32}>
        {workExperienceData.map((workExperience) => (
          <Box
            mt="40px"
            width="full"
            key={workExperience.title}
            bg={bgBasedOnColorMode}
            color="white"
            borderRadius="40px"
            pt={{ base: "20px", md: "40px" }}
            pl={{ base: "3", md: "56px" }}
            pr={{ base: "3", md: "47px" }}
            pb="31px"
          >
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="left"
                w="full"
              >
                {`${workExperience.title} - ${workExperience.employmentType}`}
              </Heading>
              <Text
                size="sm"
                textAlign="left"
                w="full"
                mt="0px !important"
                mb="12px !important"
              >
                {workExperience.period}
              </Text>
              {workExperience.description.map((desc) => (
                <HStack gap={2} w="full" alignItems="flex-start" key={desc}>
                  <CheckCircleIcon boxSize="22px" color="white" mt="1" />
                  <Text size="sm" fontWeight="500">
                    {desc}
                  </Text>
                </HStack>
              ))}
            </VStack>

            <Button
              borderRadius="25px"
              bg="linear-gradient(180deg, #FAFEFF 0%, #FFFFFF 100%)"
              _hover={{
                bg: "linear-gradient(180deg, #FAFEFF 0%, #FFFFFF 100%)",
              }}
              mt="8"
            >
              <Text
                size="sm"
                bgGradient="linear(to-l, #4299E1, #3182CE)"
                bgClip="text"
                fontWeight="600"
              >
                See Detail
              </Text>
            </Button>
            <Flex justifyContent="flex-end">
              <Box as="div">
                <Heading
                  size={{ base: "lg", md: "xl" }}
                  mt={{ base: "8", md: "0" }}
                  as="a"
                  href="https://ruangguru.com"
                  target="_blank"
                >
                  {workExperience.company}
                </Heading>
                <Divider borderBottomWidth="4px" mt="4" borderColor="yellow" />
              </Box>
            </Flex>
          </Box>
        ))}
      </ChakraCarousel>
    </Box>
  );
};

export default WorkEperiences;
