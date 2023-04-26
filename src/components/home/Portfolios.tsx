import React from "react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import PortfolioCard from "src/containers/card/PortfolioCard";
import { portfolioData } from "src/constant/portfolio";

const Portfolios = () => {
  const borderColorBasedOnColorMode = useColorModeValue(
    "personalLight.300",
    "personalDark.100"
  );

  return (
    <Box borderTopRadius="60px" pt="40px" bgPos="revert">
      <Grid justifyContent="center" alignItems="center">
        <GridItem>
          <Heading size="xl">Find My Work</Heading>
          <Divider
            borderBottomWidth="2px"
            mt="4"
            borderColor={borderColorBasedOnColorMode}
          />
        </GridItem>
      </Grid>
      <GridItem>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
          bgGradient="radial(100% 42.06% at 49.96% 50.94%, #00C0FD 0%, rgba(194, 200, 255, 0) 100%)"
          gap={6}
          justifyContent="center"
          alignItems="center"
          mt="36px"
          pt="40px"
          pb={{ base: "12", md: "90px" }}
          px={{ base: "4", md: "8", lg: "8", xl: "24", "2xl": "32" }}
        >
          {portfolioData.map((portfolio) => (
            <React.Fragment key={portfolio.name}>
              <PortfolioCard
                name={portfolio.name}
                urlLink={portfolio.urlLink}
                githubRepoLink={portfolio.githubRepoLink}
              />
            </React.Fragment>
          ))}
        </SimpleGrid>
      </GridItem>
    </Box>
  );
};

export default Portfolios;
