type WorkExperience = {
  title: string;
  description: string;
  employmentType: string;
  company: string;
  companyDescription?: string;
  companyURL: string;
  period: string;
  imageName: string;
  contributions: string[];
};

const workExperienceData: WorkExperience[] = [
  {
    title: "Frontend Engineer",
    employmentType: "Full Time",
    company: "Hijra",
    companyURL: "https://www.linkedin.com/company/hijrabyalamigroup",
    period: "Aug 2023 - Present",
    imageName: "HijraLogo.png",
    description:
      "My role as a Frontend Engineer at Hijra (formerly the ALAMI Group) has been pivotal in our journey within the world of ethical finance and Sharia-compliant financial technology. I've been instrumental in developing and advancing various innovative services, including a peer-to-peer lending platform, CMS dashboard for disbursement, and a mobile banking app—each thoughtfully grounded in Sharia principles.",
    companyDescription:
      "Hijra (previously known as the ALAMI Group) is a financial technology company that follows sharia principles. The company offers a range of services, including a peer-to-peer lending platform, mobile banking app, business accelerator, and research institute, all of which are based on sharia principles. Hijra has a presence in 482 cities across 32 Indonesian provinces through both commercial and social initiatives.",
    contributions: [
      "Played a pivotal role in the Mina frontend-backend separation project, actively assisting the platform and principal engineer teams in successfully segregating Mina's backend and frontend. Additionally, spearheaded testing of the separation in the payor's project, which led to streamlined development processes, increased productivity, and an enhanced developer experience.",
      "Led the initiation of technical documentation and system design for the frontend in the FOS disbursement project, establishing a strong foundation for smooth frontend implementation.",
      "Made significant contributions to code reviews in both frontend, mobile, and QA domains. Elevated the standards and attention to detail within the engineering frontend team, impacting several of Hijra's and Alami's project. Prompt responses in code reviews improved overall team efficiency and work quality.",
    ],
  },
  {
    title: "Frontend Engineer",
    employmentType: "Full Time",
    description:
      "Committing to an edutech company was an exciting opportunity to continue my passion for creating technology solutions for education. I was tasked with working on the Learning Management System, which involved providing applications for students, teachers, and parents to create a seamless online learning environment. Working closely with the CTO allowed me to gain a deeper understanding of the product's end-to-end process and the overall business model.",
    company: "Gredu Asia",
    companyURL: "https://www.linkedin.com/company/gredu",
    companyDescription:
      "GREDU is a social ed-tech platform dedicated to enhancing the school experience for teachers, parents, and students. The company has secured $4 million in Series A, as reported by Crunchbase.",
    period: "Dec 2022 - Jun 2023",
    imageName: "GreduLogo.jpeg",
    contributions: [
      "Spearheaded a key role in the Frontend Team, including brainstorming, design screening, ideation, coordinating, and code review until the successful delivery of the product.",
      "Championed responsibility for tackling all of the bug fixes on the production environment, ensuring a seamless user experience for customers.",
      "Pioneered the development of an internal tool using Chat GPT API, which significantly expedited the Frontend development process, making it 2x faster.",
      "Innovated by contributing to the development of a report feature that empowered teachers to create digital learning reports for students, revolutionizing the traditional manual process and providing a more efficient and digital solution. This feature greatly benefited all stakeholders, including parents, students, and teachers, streamlining the reporting process and enhancing the overall user experience.",
      "Led the implementation of attendance features for students and teachers, resulting in heightened engagement and loyalty from users, leading to sustained subscriptions.",
      "Crafted a new CMS from scratch for optimized content distribution among teachers in schools, facilitating effortless sharing of tasks, exercises, exams, and assignments, resulting in a remarkable improvement in the learning experience for students.",
    ],
  },
  {
    title: "Software Engineer (FE)",
    employmentType: "Full Time",
    description:
      "Joining the largest edutech company in Southeast Asia was a huge milestone in my career. It was exciting to work on a big and supportive team, where I was able to see and coordinate various teams and roles in tech, such as the platform team and the team focused on delivering products. It was a great opportunity to meet so many skillful people in each of these areas, and gain a wealth of knowledge and skill. Throughout the experience, I was able to improve my frontend skills in all aspects, and it gave me the confidence to continue growing in my career.",
    company: "Ruangguru",
    companyDescription:
      "Ruangguru is the leading education-focused technology company in Indonesia, serving over 15 million users. The company has received substantial funding, including $150 million in Series C funding in December 2019 and of $55 million in April 2021, as reported by Crunchbase.",
    companyURL: "https://www.linkedin.com/company/ruangguru-com/",
    period: "Jan 2022 - Nov 2022",
    imageName: "RuangguruLogo.png",
    contributions: [
      "Spearheaded the technical planning and delivery of the Prakerja Project, a pivotal initiative that revolutionized the company's website and mobile apps to comply with the latest government regulations. This resulted in a resounding victory in the Prakerja Market, generating billions of Rupiah in revenue.",
      "Orchestrated technical planning and delivery of the Skill Academy (SA) PPD's SEO project. Increased organic traffic by 6+ times (Jan-Jun 2022) and saved ad spending by hundreds of millions of Rupiah/month (e.g., 500+ Million in June 2022). As further notes, organic traffic users in SA are six times more engaged than paid traffic users.",
      "Optimized the Skill Academy main pages by meticulously refactoring them into small, reusable components, eliminating code duplication and significantly enhancing the code base's maintainability for developers.",
      "Revamped the tracker implementation of Skill Academy websites, streamlining the data team's ability to categorize user interactions and obtain precise data for informed decision-making in business and marketing.",
      "Led the technical planning and delivery of the Skill Academy Boot Camp project, resulting in a remarkable 3.3x increase in transactions since its initial launch in August 2022.",
      "Contributed significantly to the delivery of the Skill Academy Dynamic Home Page project, revolutionizing the asset adjustment process for the operation team and reducing asset adjustment speed to less than 0.5 days. Additionally, it streamlined FE team productivity for minor interface changes from 1 man week to 0.2 man week.",
      "Drove the technical planning and delivery of the Gamification project, introducing a captivating reward mechanism using coins as tokens for prizes, including the development of the reward disbursement process and reward disbursement history. This project substantially increased the course purchase rate and saved the operation team approximately 4 hours.",
    ],
  },
  {
    title: "Frontend Engineer",
    employmentType: "Part Time",
    description:
      "Joining an edutech company after my internship was the next milestone in my career journey. As someone who's passionate about education, it was a dream come true to be able to work in a company that empowers people through technology. I was given the responsibility to design and architect the frontend side of the product. Working on the project using Scrum methodologies allowed me to gain experience with agile development and how to collaborate more effectively with my team. The experience helped me grow both as a developer and as a team member.",
    company: "Kompeten CO",
    companyURL: "https://www.linkedin.com/company/kompeten-co/",
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
    companyURL: "https://www.linkedin.com/company/hash-indonesia/",
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
