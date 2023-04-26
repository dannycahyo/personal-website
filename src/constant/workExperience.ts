type WorkExperience = {
  title: string;
  employmentType: string;
  company: string;
  period: string;
  description: string[];
};

const workExperienceData: WorkExperience[] = [
  {
    title: "Frontend Engineer",
    employmentType: "Full Time",
    company: "Gredu Asia",
    period: "Dec 2022 - Present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam delectus ducimus eius perspiciatis rerum est enim error quae? Molestiae debitis veritatis similique commodi nihil eaque? Officia amet cumque fuga!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam delectus ducimus eius perspiciatis rerum est enim error quae? Molestiae debitis veritatis similique commodi nihil eaque? Officia amet cumque fuga!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam delectus ducimus eius perspiciatis rerum est enim error quae? Molestiae debitis veritatis similique commodi nihil eaque? Officia amet cumque fuga!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam delectus ducimus eius perspiciatis rerum est enim error quae? Molestiae debitis veritatis similique commodi nihil eaque? Officia amet cumque fuga!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam delectus ducimus eius perspiciatis rerum est enim error quae? Molestiae debitis veritatis similique commodi nihil eaque? Officia amet cumque fuga!",
    ],
  },
  {
    title: "Frontend Engineer",
    employmentType: "Full Time",
    company: "Ruangguru",
    period: "Jan 2022 - Nov 2022",
    description: [
      "Involved in technical planning and delivery of the Prakerja Project. This project includes developing and adjusting the website and mobile apps to follow the government's latest rules. Resulting in billions of Rupiah of revenue by winning the Prakerja Market.",
      "Involved in technical planning and delivery of the Skill Academy (SA) PPD's SEO project. Increased organic traffic by 6+ times (Jan-Jun 2022) and saved ad spending by hundreds of millions of Rupiah/month (e.g., 500+ Million in June 2022). As further notes, organic traffic users in SA are six times more engaged than paid traffic users.",
      "Refactored several Skill Academy main pages to reduce duplication codes into small pieces and reusable components so that the developers could easily maintain the code base.",
      "Recategorized the tracker implementation of Skill Academy websites to help the data team classify the user interaction so that the team can get precise and proper data for business, marketing, and other decision-making purposes.",
      "Involved in technical planning and delivery of the Skill Academy Boot Camp project. This project was launched on Aug 2022 and the transactions grew 3.3x from the first launch",
      "Involved in the delivery of the Skill Academy Dynamic Home Page project. It helped the operation team to change the home page assets effectively. Increased assets adjustment speed to less than 0.5 days. Moreover, increased front-ends productivity in adjusting homepage assets from 1 man week to 0.2 man week for homepage minor interface changes.",
      "Involved in technical planning and delivery of the Gamification project, where a reward mechanism uses coins as tokens that can be exchanged for prizes. Including the reward disbursement process and reward disbursement history. Thus, this project increases the course purchase rate and saves the operation team time approximately 4 hours.",
    ],
  },
  {
    title: "Frontend Engineer",
    employmentType: "Part Time",
    company: "Kompeten CO",
    period: "Aug 2021 - Dec 2021",
    description: [
      "Spearheaded the development of Career Guidance web applications using Next.js, React, and Chakra UI Framework. Ensured smooth operation and optimal performance by leveraging JavaScript and the latest technologies.",
      "Elevated the performance, accessibility, and search engine optimization (SEO) of web applications through rigorous analysis and improvements using the Lighthouse tool. Resulted in an increased organic search presence and better performance of the website.",
      "Implemented an event tracker using Firebase to analyze user behavior and optimize the business model. Provided valuable insights into user journeys and helped in evaluating the effectiveness of the current features.",
    ],
  },
  {
    title: "Software Engineer",
    employmentType: "Internship",
    company: "Hash Rekayasa Teknologi",
    period: "Jun 2021 - Sep 2021",
    description: [
      "Developed and maintained web applications for Licensing Services using Next, Typescript, GraphQL, Material UI, and an internal company library. These applications streamlined the licensing process, resulting in faster turnaround times and increased efficiency for both customers and internal stakeholders.",
      "Collaborated with cross-functional teams to redesign outdated website layouts into modern and intuitive designs, resulting in a significant improvement in user engagement and overall customer satisfaction.",
    ],
  },
];

export { workExperienceData };
export type { WorkExperience };
