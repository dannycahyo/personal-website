import Head from "next/head";
import Layout from "src/containers/layout";
import Heroes from "./Heroes";
import ContentCreator from "./ContentCreator";
import TechSpeaker from "./TechSpeaker";
import CoreValues from "./CoreValues";
import Hobbies from "./Hobbies";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Danny Dwi Cahyono</title>
        <meta
          name="description"
          content="Welcome to my About page! Here, you'll find everything you need to know about me and my mission. First and foremost, I'm committed to achieving my goals and making a positive impact on the world. I believe that by continuously learning and sharing knowledge with others, we can all work together to create a better future. As a content creator, I'm passionate about using my skills and expertise to create valuable resources for others. Whether it's through blog posts, podcasts, or videos, I'm dedicated to sharing my knowledge and experiences with the world. In addition to my content creation work, I also speak at conferences and lead workshops to help others achieve their goals. It's important to me to give back to the community and help others succeed in their own endeavors. Finally, at the core of everything I do are my values. Integrity, collaboration, and kindness are just a few of the values that guide me in both my personal and professional life. Thank you for visiting my About page, and I look forward to connecting with you further!"
        />
        <link rel="canonical" href="https://dannydwicahyono.com/about" />
        <meta property="og:url" content="https://dannydwicahyono.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Danny Dwi Cahyono" />
        <meta
          property="og:description"
          content="Welcome to my About page! Here, you'll find everything you need to know about me and my mission. First and foremost, I'm committed to achieving my goals and making a positive impact on the world. I believe that by continuously learning and sharing knowledge with others, we can all work together to create a better future. As a content creator, I'm passionate about using my skills and expertise to create valuable resources for others. Whether it's through blog posts, podcasts, or videos, I'm dedicated to sharing my knowledge and experiences with the world. In addition to my content creation work, I also speak at conferences and lead workshops to help others achieve their goals. It's important to me to give back to the community and help others succeed in their own endeavors. Finally, at the core of everything I do are my values. Integrity, collaboration, and kindness are just a few of the values that guide me in both my personal and professional life. Thank you for visiting my About page, and I look forward to connecting with you further!"
        />
        <meta
          property="og:image"
          content="assets/image/core-values/DannyCoreValues.jpg"
        />
      </Head>
      <Heroes />
      <ContentCreator />
      <TechSpeaker />
      <CoreValues />
      {/* TODO: Enable this component once the UI is finished */}
      {/* <Hobbies /> */}
    </Layout>
  );
};

export default About;
