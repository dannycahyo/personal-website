import React, { useState, useEffect } from "react";

import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
  Box,
  Grid,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import ChakraCarousel from "src/containers/ChakraCarousel";

const WorkEperiences = () => {
  const [data, setData] = useState([]);
  const bgBasedOnColorMode = useColorModeValue(
    "linear-gradient(180deg, #00C0FD 0%, #0056FD 100%)",
    "personalDark.400"
  );

  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Box
      py={{ base: "2", md: "8", lg: "42px" }}
      px={{ base: "4", md: "8", lg: "12", xl: "110px" }}
    >
      <Grid justifyContent="center" alignItems="center">
        <Heading size="xl">Working Experiences</Heading>
        <Divider
          borderBottomWidth="2px"
          mt="4"
          borderColor={borderColorBasedOnColorMode}
        />
      </Grid>
      <ChakraCarousel gap={32}>
        {data.slice(10, 15).map((post: any, index) => (
          <Box
            mt="40px"
            width="full"
            key={index}
            bg={bgBasedOnColorMode}
            color="white"
            borderRadius="40px"
            pt="40px"
            pl="56px"
            pr="47px"
            pb="31px"
          >
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="left"
                w="full"
              >
                Frontend Engineer - Full Time
              </Heading>
              <Text
                size="sm"
                textAlign="left"
                w="full"
                mt="0px !important"
                mb="12px !important"
              >
                Jan 2022 - Nov 2022
              </Text>
              <HStack gap={2} w="full" alignItems="flex-start">
                <CheckCircleIcon boxSize="22px" color="white" mt="1" />
                <Text size="sm" fontWeight="500">
                  Involved in the delivery of the Prakerja Project. This project
                  includes developing and adjusting the website and mobile apps
                  to follow the government&apos;s latest rules. Resulting in
                  billions of Rupiah of revenue by winning the Prakerja Market.
                </Text>
              </HStack>
              <HStack gap={2} w="full" alignItems="flex-start">
                <CheckCircleIcon boxSize="22px" color="white" mt="1" />
                <Text size="sm" fontWeight="500">
                  Involved in the delivery of the Prakerja Project. This project
                  includes developing and adjusting the website and mobile apps
                  to follow the government&apos;s latest rules. Resulting in
                  billions of Rupiah of revenue by winning the Prakerja Market.
                </Text>
              </HStack>
              <HStack gap={2} w="full" alignItems="flex-start">
                <CheckCircleIcon boxSize="22px" color="white" mt="1" />
                <Text size="sm" fontWeight="500">
                  Involved in the delivery of the Prakerja Project. This project
                  includes developing and adjusting the website and mobile apps
                  to follow the government&apos;s latest rules. Resulting in
                  billions of Rupiah of revenue by winning the Prakerja Market.
                </Text>
              </HStack>
              <HStack gap={2} w="full" alignItems="flex-start">
                <CheckCircleIcon boxSize="22px" color="white" mt="1" />
                <Text size="sm" fontWeight="500">
                  Involved in the delivery of the Prakerja Project. This project
                  includes developing and adjusting the website and mobile apps
                  to follow the government&apos;s latest rules. Resulting in
                  billions of Rupiah of revenue by winning the Prakerja Market.
                </Text>
              </HStack>
            </VStack>

            <Button
              borderRadius="25px"
              bg="linear-gradient(180deg, #FAFEFF 0%, #FFFFFF 100%)"
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
              <Box>
                <Heading size="xl">Ruangguru</Heading>
                <Divider
                  borderBottomWidth="2px"
                  mt="4"
                  borderColor={borderColorBasedOnColorMode}
                />
              </Box>
            </Flex>
          </Box>
        ))}
      </ChakraCarousel>
    </Box>
  );
};

export default WorkEperiences;
