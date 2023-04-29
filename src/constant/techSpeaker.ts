type TechSpeakerData = {
  title: string;
  date: string;
  organizer: string;
  image: string;
  topics: string[];
  organizerLink?: string;
  eventLink: string;
  videoLink?: string;
};

const techSpeakerData: TechSpeakerData[] = [
  {
    title: "Getting Started with JavaScript",
    date: "11 March 2023",
    topics: ["JavaScript", "Basic"],
    eventLink: "https://www.instagram.com/p/CpZ5EzMv7ib/",
    image: "/assets/image/tech-speaker/Getting Started To JavaScript.jpeg",
    organizer: "Gatherloop",
    organizerLink: "https://gatherloop.co/",
    videoLink: "https://www.youtube.com/watch?v=qH39M3Jn6hk&t=563s",
  },
  {
    title: "Getting Started to Functional Programming",
    date: "14 January 2023",
    eventLink: "https://www.instagram.com/p/CnD921Ey8t8/",
    topics: ["JavaScript", "Functional"],
    image:
      "/assets/image/tech-speaker/Getting Started to Functional Programming.jpeg",
    organizer: "Gatherloop",
    organizerLink: "https://gatherloop.co/",
  },
];

export { techSpeakerData };
export type { TechSpeakerData };
