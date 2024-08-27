// types.ts

// Define the Author type
export interface Author {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
  }
  
  // Define the Blog type
  export interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: Author | null; // author can be null
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: Blog[]; // An array of related blogs
    skills: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Define the type for an array of blogs
  export type BlogList = Blog[];
  