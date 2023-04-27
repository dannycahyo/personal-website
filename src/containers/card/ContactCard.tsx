import Image from "next/image";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Tag,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import type React from "react";

type ContactCardProps = {
  name: string;
  label: string;
  urlLink: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ name, label, urlLink }) => {
  const bgCardBasedOnColorMode = useColorModeValue(
    "rgba(165, 202, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box
      height="256px"
      bg={bgCardBasedOnColorMode}
      width="full"
      borderRadius="8px"
      padding="16px"
      as="div"
    >
      <HStack justifyContent="space-between">
        <Image
          alt={name}
          height={84}
          width={84}
          src={`/assets/image/${name}.png`}
        />
        <Tag size="lg" colorScheme="cyan" borderRadius="full">
          <TagLabel>
            <Text size={{ base: "sm", md: "md", lg: "md", xl: "xs" }}>
              {label}
            </Text>
          </TagLabel>
        </Tag>
      </HStack>
      <Heading size="lg" mt="24px">
        {name}
      </Heading>
      <Button
        as="a"
        target="_blank"
        href={urlLink}
        mt="26px"
        borderRadius="25px"
        color="white"
        width="100%"
        height="44px"
        bg="linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)"
        _hover={{
          bg: "linear-gradient(90.55deg, #256BF4 -13.39%, #3AC1DE 99.74%)",
          opacity: 0.9,
        }}
      >
        Follow Me
      </Button>
    </Box>
  );
};

export default ContactCard;
export type { ContactCardProps };
