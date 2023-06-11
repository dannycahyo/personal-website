type WorkExperience = {
  title: string;
  description: string;
  employmentType: string;
  company: string;
  period: string;
  imageName: string;
  contributions: string[];
};

const workExperienceData: WorkExperience[] = [
  {
    title: "Frontend Engineer",
    employmentType: "Full Time",
    description:
      "Committing to an edutech company was an exciting opportunity to continue my passion for creating technology solutions for education. I was tasked with working on the Learning Management System, which involved providing applications for students, teachers, and parents to create a seamless online learning environment. Working closely with the CTO allowed me to gain a deeper understanding of the product's end-to-end process and the overall business model. ",

    company: "Gredu Asia",
    period: "Dec 2022 - Present",
    imageName: "GreduLogo.jpeg",
    contributions: [
      "Played a key role in the Frontend Team, including brainstorming, design screening, ideation, coordinating, and code review until the successful delivery of the product.",
      "Responsible for tackling all of the bug fixes on the production environment, ensuring a seamless user experience for customers.",
      "Took the initiative to develop an internal tool using Chat GPT API, which helped speed up the development mode from the Frontend side 2x faster.",
      "Contributed to developing a report feature that enabled teachers to create digital learning reports for students. This feature replaced the traditional manual process of creating reports with a more efficient and digital solution, benefiting all stakeholders, including parents, students, and teachers. The introduction of this feature helped to streamline the reporting process and provide easy access to digital reports, improving the overall experience for all users.",
      "Became the primary person responsible for implementing attendance features for students and teachers, which led to a higher level of engagement and loyalty from users, resulting in continued subscriptions.",
      "Developed a new CMS from scratch for better content distribution for teachers in schools. The CMS aimed to allow teachers to easily share tasks, exercises, exams, and assignments, improving the learning experience for students.",
    ],
  },
  {
    title: "Software Engineer (FE)",
    employmentType: "Full Time",
    description:
      "Joining the largest edutech company in Southeast Asia was a huge milestone in my career. It was exciting to work on a big and supportive team, where I was able to see and coordinate various teams and roles in tech, such as the platform team and the team focused on delivering products. It was a great opportunity to meet so many skillful people in each of these areas, and gain a wealth of knowledge and skill. Throughout the experience, I was able to improve my frontend skills in all aspects, and it gave me the confidence to continue growing in my career.",
    company: "Ruangguru",
    period: "Jan 2022 - Nov 2022",
    imageName: "RuangguruLogo.png",
    contributions: [
      "Contributed to the technical planning and delivery of the Prakerja Project, a pivotal initiative in adapting the company's website and mobile apps to adhere to the latest government regulations. This resulted in winning the Prakerja Market and generating billions of Rupiah in revenue.",
      "Involved in the technical planning and delivery of the Skill Academy (SA) PPD's SEO project, which achieved a remarkable 6+ times increase in organic traffic from Jan-Jun 2022 and saved hundreds of millions of Rupiah in ad spending each month. This success is further bolstered by the fact that organic traffic users in SA are six times more engaged than paid traffic users.",
      "Streamlined the Skill Academy main pages by refactoring them into small, reusable components, significantly reducing duplication codes and making the code base easier to maintain for developers.",
      "Reorganized the tracker implementation of Skill Academy websites, making it easier for the data team to classify user interaction and obtain precise and proper data for decision-making purposes in business and marketing.",
      "Worked on the technical planning and delivery of the Skill Academy Boot Camp project, achieving a 3.3x increase in transactions from its first launch in August 2022.",
      "Contributed towards the delivery of the Skill Academy Dynamic Home Page project, resulting in a more efficient process for the operation team to change homepage assets, decreasing the asset adjustment speed to less than 0.5 days. Additionally, it improved front-end productivity in adjusting homepage assets from 1 man week to 0.2 man week for minor interface changes.",
      "Worked on the technical planning and delivery of the Gamification project, which introduced a reward mechanism using coins as tokens that can be exchanged for prizes, including the reward disbursement process and reward disbursement history. This project significantly increased the course purchase rate and saved the operation team approximately 4 hours.",
    ],
  },
  {
    title: "Frontend Engineer",
    employmentType: "Part Time",
    description:
      "Joining an edutech company after my internship was the next milestone in my career journey. As someone who's passionate about education, it was a dream come true to be able to work in a company that empowers people through technology. I was given the responsibility to design and architect the frontend side of the product. Working on the project using Scrum methodologies allowed me to gain experience with agile development and how to collaborate more effectively with my team. The experience helped me grow both as a developer and as a team member.",
    company: "Kompeten CO",
    period: "Aug 2021 - Dec 2021",
    imageName: "KompetenLogo.jpeg",
    contributions: [
      "Spearheaded the development of Career Guidance web applications using Next.js, React, and Chakra UI Framework. Ensured smooth operation and optimal performance by leveraging JavaScript and the latest technologies.",
      "Elevated the performance, accessibility, and search engine optimization (SEO) of web applications through rigorous analysis and improvements using the Lighthouse tool. Resulted in an increased organic search presence and better performance of the website.",
      "Implemented an event tracker using Firebase to analyze user behavior and optimize the business model. Provided valuable insights into user journeys and helped in evaluating the effectiveness of the current features.",
    ],
  },
  {
    title: "Software Engineer (FE)",
    employmentType: "Internship",
    description:
      "Starting my tech career with my first internship was a dream come true. I gained real-world project experience for the first time and learned a lot about how the industry works. I was impressed by the internal library developed by the company, and it was amazing to see how my contributions were making an impact. This experience gave me the confidence to pursue a career in tech and I'm grateful for the opportunity to have started my journey with such a great company.",
    company: "Hash Rekayasa Teknologi",
    period: "Jun 2021 - Sep 2021",
    imageName: "HashLogo.jpeg",
    contributions: [
      "Developed and maintained web applications for Licensing Services using Next, Typescript, GraphQL, Material UI, and an internal company library. These applications streamlined the licensing process, resulting in faster turnaround times and increased efficiency for both customers and internal stakeholders.",
      "Collaborated with cross-functional teams to redesign outdated website layouts into modern and intuitive designs, resulting in a significant improvement in user engagement and overall customer satisfaction.",
    ],
  },
];

export { workExperienceData };
export type { WorkExperience };
