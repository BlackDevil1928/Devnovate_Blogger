export interface BlogData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; avatar?: string };
  publishedDate: string;
  readTime: string;
  likes: number;
  comments: number;
  tags: string[];
  featured?: boolean;
}

export const mockBlogs: BlogData[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn the best practices for creating maintainable and scalable React applications using TypeScript, including advanced patterns and performance optimizations.",
    content:
      `# Building Scalable React Applications with TypeScript\n\nTypeScript helps you scale apps with confidence. In this article, we explore project structure, typing patterns, and performance tips.\n\n## Key Topics\n- Project structure\n- Advanced typing\n- Performance and DX\n\n> Start small, refactor often, and keep types close to the logic.`,
    author: { name: "Sarah Chen", avatar: "" },
    publishedDate: "Dec 15",
    readTime: "8 min read",
    likes: 124,
    comments: 18,
    tags: ["React", "TypeScript", "Frontend"],
    featured: true,
  },
  {
    id: "2",
    title: "The Complete Guide to Node.js Microservices",
    excerpt:
      "Discover how to build, deploy, and manage microservices architecture using Node.js, Docker, and Kubernetes for enterprise-grade applications.",
    content:
      `# The Complete Guide to Node.js Microservices\n\nThis guide covers service boundaries, inter-service communication, and deployment strategies.\n\n## Highlights\n- Dockerization\n- Observability\n- CI/CD pipelines`,
    author: { name: "Alex Rodriguez", avatar: "" },
    publishedDate: "Dec 12",
    readTime: "12 min read",
    likes: 89,
    comments: 23,
    tags: ["Node.js", "Microservices", "Backend"],
  },
  {
    id: "3",
    title: "Modern CSS Grid Layouts for Responsive Design",
    excerpt:
      "Master CSS Grid with practical examples and learn how to create complex, responsive layouts without relying on external frameworks.",
    content:
      `# Modern CSS Grid Layouts\n\nCSS Grid enables powerful responsive designs with minimal code. Learn track sizing, auto-fit, and named areas.`,
    author: { name: "Maria Garcia", avatar: "" },
    publishedDate: "Dec 10",
    readTime: "6 min read",
    likes: 67,
    comments: 12,
    tags: ["CSS", "Frontend", "Design"],
  },
  {
    id: "4",
    title: "Building RESTful APIs with Express.js and MongoDB",
    excerpt:
      "A comprehensive guide to creating robust REST APIs using Express.js and MongoDB, including authentication, validation, and error handling.",
    content:
      `# Building RESTful APIs with Express\n\nWe build a production-ready REST API using Express.js and MongoDB with validation and testing.`,
    author: { name: "David Kim", avatar: "" },
    publishedDate: "Dec 8",
    readTime: "10 min read",
    likes: 156,
    comments: 31,
    tags: ["Express.js", "MongoDB", "API"],
  },
  {
    id: "5",
    title: "Introduction to Machine Learning with Python",
    excerpt:
      "Get started with machine learning using Python, scikit-learn, and practical examples that you can implement in your projects.",
    content:
      `# Intro to ML with Python\n\nWe cover datasets, preprocessing, model training, and evaluation with scikit-learn.`,
    author: { name: "Dr. Emily Watson", avatar: "" },
    publishedDate: "Dec 5",
    readTime: "15 min read",
    likes: 203,
    comments: 45,
    tags: ["Python", "Machine Learning", "AI"],
  },
  {
    id: "6",
    title: "GraphQL vs REST: When to Use Each",
    excerpt:
      "Compare GraphQL and REST APIs, understand their strengths and weaknesses, and learn how to choose the right approach for your project.",
    content:
      `# GraphQL vs REST\n\nWe compare the paradigms across performance, flexibility, and tooling.`,
    author: { name: "James Wilson", avatar: "" },
    publishedDate: "Dec 3",
    readTime: "7 min read",
    likes: 98,
    comments: 19,
    tags: ["GraphQL", "REST", "API Design"],
  },
];

export default mockBlogs;
