import type { BlogData } from './portfolio.types';

export const personalInfo = {
  name: "Mradul Singhal",
  title: "Software Engineer",
  description: "Software Engineer skilled in designing scalable microservices with Spring Boot, Scala, and AWS, experienced in event-driven architectures and distributed systems.",
  about: "Software Engineer skilled in designing scalable microservices with Spring Boot, Scala, and AWS, experienced in event-driven architectures and distributed systems. Proven track record in cost optimisation, system performance improvement, and mentoring, with hands-on expertise in cloud computing, system design, and developing highly configurable applications.",
  email: "singhalmradul@gmail.com",
  linkedin: "https://www.linkedin.com/in/singhalmradul",
  github: "https://github.com/singhalmradul",
  blogUrl: "https://medium.com/@singhalmradul",
  resumeUrl: "/resume-singhalmradul.pdf"
};

export const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "MicroStrategy",
    duration: "Nov 2024 – Present",
    responsibilities: [
      "Optimised resource handling by stopping unused EC2 instances, leading to a 45% cost reduction for dev and qa environments",
      "Reduced testing time by 75% by implementing checkpoint logic using Aspect-Oriented Programming (AOP) to track the progress of AMI creation, allowing for resuming from the last developer's desired step in case of testing multiple functionalities",
      "Refactored legacy code to improve maintainability, promoting loose coupling and reducing technical debt, resulting in streamlined development"
    ]
  },
  {
    id: 2,
    title: "Software Engineer – Intern",
    company: "NxtPe",
    duration: "May 2024 – Sep 2024",
    responsibilities: [
      "Replaced Amazon API Gateway with a custom Spring Cloud Gateway, reducing cost by 90% and enabling customisability",
      "Handled request/response/URL transformations using Freemarker templates, enhancing flexibility in data presentation",
      "Improved system resilience by implementing Circuit Breaker pattern using Resilience4j",
      "Integrated 3rd party APIs following REST principles, ensuring efficient and reliable data retrieval",
      "Configured Keycloak for user and 3rd party authentication and authorisation, ensuring secure access to resources"
    ]
  },
  {
    id: 3,
    title: "Technical Instructor (Part-Time)",
    company: "Crust to Core",
    duration: "Jan 2023 – Jan 2024",
    responsibilities: [
      "Conducted live sessions on Java, Spring Boot fundamentals, Data Structures and Algorithms, and Object-oriented Programming",
      "Designed project-based learning modules for backend development, which increased student project completion rates",
      "Mentored over 50 students, enhancing their understanding of complex concepts and problem-solving skills"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Comet: QA Automation Engine",
    description: "A comprehensive automation engine for Quality Engineers using Spring Boot, React, and Fargate, streamlining MicroStrategy environment testing and reducing manual effort by 90%.",
    longDescription: "Built an automation engine for Quality Engineers using Spring Boot, React, and Fargate, streamlining MicroStrategy environment testing and reducing manual effort by 90%. Designed a custom Domain Specific Language (DSL) with Scala infix notation, enabling Quality Engineers to define test cases in a simplified, readable format. Utilised Fargate to execute tests in isolated, language- and framework-agnostic environments. Developed an intuitive interface for configuring, executing, and viewing test results via MicroStrategy Library.",
    technologies: ["Spring Boot", "React", "Scala DSL", "AWS Fargate", "Docker"],
    features: [
      "Custom DSL with Scala infix notation for simplified test case definitions",
      "Framework-agnostic execution engine with AWS Fargate",
      "Isolated test environments for language and framework independence",
      "Intuitive interface for configuring, executing, and viewing test results",
      "Integration with MicroStrategy Library for seamless workflow"
    ],
    isFeatured: true
  },
  {
    id: 2,
    title: "HiV - Social Platform",
    description: "Developed using React.js, supported by Spring Cloud microservices with REST communication. Implemented OAuth2 and OpenID Connect for secure authentication.",
    longDescription: "Developed using React.js, supported by Spring Cloud microservices with REST communication. Implemented OAuth2 and OpenID Connect for secure authentication and leveraged PostgreSQL, MongoDB, Apache Cassandra, and Neo4j based on their respective strengths.",
    githubLink: "https://www.github.com/singhalmradul/high-five",
    technologies: ["React.js", "Spring Cloud", "OAuth2", "OpenID Connect", "PostgreSQL", "MongoDB", "Apache Cassandra", "Neo4j"],
    features: [
      "Microservices architecture with Spring Cloud",
      "OAuth2 and OpenID Connect authentication",
      "Multi-database approach using different databases for their strengths",
      "REST API communication between services"
    ],
    isFeatured: true
  }
];

export const skills = {
  backend: ["Java", "Scala", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"],
  cloud: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins"],
  frontend: ["React.js", "Redux Saga", "TypeScript"],
  databases: ["PostgreSQL", "MongoDB", "Apache Cassandra", "Neo4j", "Redis", "MySQL"],
  tools: ["JUnit", "Mockito", "Freemarker Template", "Swagger"],
  other: ["REST APIs", "Microservices", "Kafka", "RabbitMQ", "Scripting", "Python"]
};

export const blog: BlogData = {
  isComingSoon: false, // Set to false to show blog posts
  title: "Blog & Writing",
  description: "I'm passionate about sharing knowledge and insights from my experience in software engineering, system design, and modern development practices. I write about technical deep-dives, best practices, and lessons learned from building scalable systems.",
  comingSoonMessage: "Stay tuned for technical insights, tutorials, and industry perspectives!",
  upcomingTopics: [
    {
      id: 1,
      title: "Building scalable microservices with Spring Boot and Kafka",
      emoji: "🏗️",
      category: "Architecture"
    },
    {
      id: 2,
      title: "Event-driven architecture patterns and best practices",
      emoji: "🔄",
      category: "Architecture"
    },
    {
      id: 3,
      title: "AWS cost optimization strategies for startups",
      emoji: "☁️",
      category: "Cloud"
    },
    {
      id: 4,
      title: "CI/CD pipeline optimization and deployment strategies",
      emoji: "🚀",
      category: "DevOps"
    },
    {
      id: 5,
      title: "Monitoring and observability in distributed systems",
      emoji: "📊",
      category: "Monitoring"
    },
    {
      id: 6,
      title: "Performance tuning and optimization techniques",
      emoji: "🔧",
      category: "Performance"
    }
  ],
  posts: [
    {
      id: 1,
      title: "Processes and Threads",
      description: "A comprehensive guide to understanding processes and threads, their differences, and how they work in modern operating systems.",
      content: "Deep dive into the fundamental concepts of processes and threads, exploring their characteristics, differences, and practical applications in software development.",
      date: "2025-01-01",
      category: "System Programming",
      tags: ["Processes", "Threads", "Operating Systems", "Concurrency"],
      readTime: 8,
      slug: "processes-and-threads",
      url: "https://medium.com/@singhalmradul/processes-and-threads-b7ef7e0e4dd3"
    }
  ]
};
