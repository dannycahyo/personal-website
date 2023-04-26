import React from "react";
import Layout from "src/containers/layout";
import Heroes from "./Heroes";
import ContentCreator from "./ContentCreator";
import Community from "./Community";
import CoreValues from "./CoreValues";
import Hobbies from "./Hobbies";

const About = () => {
  return (
    <Layout>
      <Heroes />
      <ContentCreator />
      <Community />
      <CoreValues />
      <Hobbies />
    </Layout>
  );
};

export default About;
