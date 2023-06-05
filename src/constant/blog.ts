type BlogPost = {
  title: string;
  date: string;
  slug: string;
  readEstimate: number;
  imageURL: string;
};

const blogPost: BlogPost[] = [
  {
    title: "Why Bother Learning Data Structures And Algorithms?",
    slug: "why-bother-learning-data-structures-and-algorithms",
    imageURL:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "2022-06-04",
    readEstimate: 5,
  },
];

export type { BlogPost };
export { blogPost };