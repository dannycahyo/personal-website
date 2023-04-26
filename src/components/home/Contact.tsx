import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";

import ContactCard from "src/containers/card/ContactCard";
import { contactData } from "src/constant/contact";
import ChakraCarousel from "src/containers/ChakraCarousel";

const Contact = () => {
  const bgBasedOnColorMode = useColorModeValue(
    "personalLight.100",
    "personalDark.400"
  );

  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  const [isMobileSize] = useMediaQuery("(max-width: 500px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg={bgBasedOnColorMode}
      py={{ base: "8", md: "8", lg: "53px" }}
      px={{ base: "8", md: "12", lg: "24", xl: "24", "2xl": "32" }}
    >
      <Grid justifyContent="center" alignItems="center">
        <GridItem>
          <Heading
            size={{ base: "lg", md: "xl" }}
            mb={{ base: "16px", md: "0" }}
            textAlign="center"
          >
            Let’s Connect and Say Hi
          </Heading>
          <Divider
            borderBottomWidth="2px"
            mt="4"
            mb={{ base: "4", md: "0" }}
            borderColor={borderColorBasedOnColorMode}
          />
        </GridItem>
      </Grid>
      {isMobileSize ? (
        <ChakraCarousel gap={6}>
          {contactData?.map((contact) => (
            <React.Fragment key={contact.name}>
              <ContactCard
                name={contact.name}
                label={contact.label}
                urlLink={contact.urlLink}
              />
            </React.Fragment>
          ))}
        </ChakraCarousel>
      ) : (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
          gap={6}
          mt="36px"
          py={{ base: "2", md: "4", lg: "37px" }}
        >
          {contactData?.map((contact) => (
            <React.Fragment key={contact.name}>
              <ContactCard
                name={contact.name}
                label={contact.label}
                urlLink={contact.urlLink}
              />
            </React.Fragment>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Contact;
