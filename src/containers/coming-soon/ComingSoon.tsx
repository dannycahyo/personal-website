import { Button, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ComingSoon = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 10000);
  }, [route]);

  const handleNavigationToHomePage = () => route.push("/");

  return (
    <Container centerContent maxW="3xl" py="12">
      <Image
        src="/assets/svg/CoomingSoonIlustration.svg"
        alt="Coming Soon Image"
        width={450}
        height={450}
      />
      <Heading size={{ base: "md", md: "lg" }} mt="8" mb="2" textAlign="center">
        Stay Tuned for Updates! My Blog is Coming Soon
      </Heading>
      <Text textAlign="center">
        I&apos;m working hard to bring you fresh and insightful content. Check
        back soon for updates on my blog.
      </Text>
      <Button mt="4" onClick={handleNavigationToHomePage}>
        Back To Home
      </Button>
    </Container>
  );
};

export default ComingSoon;
