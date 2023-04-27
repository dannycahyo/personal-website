import Image from "next/image";
import {
  Heading,
  Box,
  Grid,
  useColorModeValue,
  Divider,
  GridItem,
  AspectRatio,
  Text,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from "@chakra-ui/react";
import { workExperienceData } from "src/constant/workExperience";
import { MdCheckCircle } from "react-icons/md";
import React from "react";

const WorkEperiences = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  const accordionBgBasedOnColorMode = useColorModeValue(
    "blackAlpha.50",
    "gray.600"
  );

  return (
    <Box
      py={{ base: "8", md: "8", lg: "42px" }}
      px={{ base: "0px", md: "8", lg: "12", xl: "110px", "2xl": "32" }}
    >
      <Grid
        justifyContent="center"
        alignItems="center"
        mb={{ base: "4", md: "2" }}
      >
        <Heading size="xl">My Journey</Heading>
        <Divider
          borderBottomWidth="2px"
          mt="4"
          borderColor={borderColorBasedOnColorMode}
        />
      </Grid>

      {workExperienceData.map((workExperience) => (
        <Grid
          pt={{ base: "2", md: "8" }}
          pb={{ base: "4", sm: "0" }}
          templateColumns="repeat(5, 1fr)"
          gap={{ base: 2, md: 10 }}
          px={{ base: "4" }}
          key={workExperience.title}
        >
          <GridItem colSpan={{ base: 5, md: 1 }} rowSpan={{ md: 1 }}>
            <AspectRatio maxW="200px" ratio={4 / 3}>
              <Image
                alt={workExperience.company}
                src={`/assets/image/${workExperience.imageName}`}
                style={{ objectFit: "cover" }}
                width={200}
                height={150}
              />
            </AspectRatio>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 4 }} rowSpan={{ md: 3 }}>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
              w="full"
            >
              {`${workExperience.title}`}
            </Heading>
            <Heading size="md" mb="2">
              {`${workExperience.company} - ${workExperience.employmentType}`}
            </Heading>
            <Heading
              size="sm"
              textAlign="left"
              w="full"
              mb="12px"
              color="yellow.500"
            >
              {workExperience.period}
            </Heading>
            <Text size="sm" my="4">
              {workExperience.description}
            </Text>

            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton pl="2" bg={accordionBgBasedOnColorMode}>
                  <Box as="span" flex="1" textAlign="left">
                    See Detail Contribution
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} pl={0}>
                  <List spacing={3}>
                    {workExperience.contributions.map((contribution) => (
                      <ListItem key={contribution}>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {contribution}
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};

export default WorkEperiences;
