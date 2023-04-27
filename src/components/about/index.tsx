import React from "react";
import Layout from "src/containers/layout";
import Heroes from "./Heroes";
import ContentCreator from "./ContentCreator";
import TechSpeaker from "./TechSpeaker";
import CoreValues from "./CoreValues";
import Hobbies from "./Hobbies";

const About = () => {
  return (
    <Layout>
      <Heroes />
      <ContentCreator />
      <TechSpeaker />
      <CoreValues />
      <Hobbies />
    </Layout>
  );
};

export default About;
