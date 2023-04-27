import Image from "next/image";
import {
  Box,
  useColorModeValue,
  Heading,
  Button,
  Flex,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import type React from "react";

type PortfolioCardProps = {
  name: string;
  urlLink: string;
  githubRepoLink: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  name,
  urlLink,
  githubRepoLink,
}) => {
  const cardBgBasedOnTheme = useColorModeValue(
    "rgba(165, 202, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box
      bg={cardBgBasedOnTheme}
      as="a"
      href={urlLink}
      target="_blank"
      backdropFilter="blur(25px)"
      borderRadius="20px"
      px="16px"
      pt="16px"
      pb="20px"
      _hover={{
        bg: "linear-gradient(180deg, #FFB94A 0%, #F4693F 100%)",
        color: "personalLight.100",
        boxShadow: "40px 50px 40px rgba(120, 122, 145, 0.3)",
        borderRadius: "20px",
      }}
    >
      <Image
        alt={name}
        style={{
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          height: "237px",
          width: "100%",
          objectFit: "cover",
        }}
        height={237}
        width={380}
        src={`/assets/image/${name}.jpg`}
      />
      <Heading size="md" my="18px">
        {name}
      </Heading>
      <Flex justifyContent="space-between" alignItems="center">
        <Button
          leftIcon={<FaGithub color="white" />}
          as="a"
          aria-label="Github Repo Link"
          href={githubRepoLink}
          target="_blank"
          borderRadius="25px"
          bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
          _hover={{
            bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
            opacity: 0.9,
          }}
        >
          <Text size="sm" color="personalLight.100" fontWeight="600">
            Repo Link
          </Text>
        </Button>
        <Button
          as="a"
          href={urlLink}
          target="_blank"
          borderRadius="25px"
          bg="linear-gradient(180deg, #FAFEFF 0%, #FFFFFF 100%)"
          _hover={{
            bg: "linear-gradient(180deg, #FAFEFF 0%, #FFFFFF 100%)",
          }}
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
      </Flex>
    </Box>
  );
};

export default PortfolioCard;
export type { PortfolioCardProps };
