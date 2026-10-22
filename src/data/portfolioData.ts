import { Project, SkillCategory, EducationItem, CertificationItem, HighlightItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ashin K',
  title: 'AI/ML Engineer & Software Developer',
  subtitle: 'Computer Science Engineering · AI & ML',
  heroHeadline: 'Building Intelligent Solutions Through Code.',
  heroDescription:
    "I'm Ashin K, an AI/ML-focused Computer Science Engineering student who enjoys building practical machine learning applications, intelligent tools, and full-stack products.",
  email: 'ashin.k.8.2006@gmail.com',
  github: 'https://github.com/ashin8k',
  linkedin: 'https://linkedin.com/in/ashin-k',
  institution: 'AJ Institute of Engineering and Technology, Mangaluru',
  location: 'Mangaluru, Karnataka, India',
  expectedGraduation: '2027',
  aboutSummary:
    'I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology, Mangaluru. My focus is on developing practical, deployable applications that combine robust backend architectures with data science and machine learning pipelines.',
  aboutPoints: [
    'Artificial intelligence and machine learning algorithms for real-world utility.',
    'Natural language processing, text representation, and supervised classification pipelines.',
    'Python application architecture, API development with FastAPI and Flask.',
    'Database schema design and data modeling with SQL, PostgreSQL, and MySQL.',
    'Containerization with Docker and interactive dashboards using Streamlit.'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Machine Learning & Data Science',
    description: 'Text preprocessing, feature engineering, embeddings, and supervised learning.',
    icon: 'Brain',
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'TF-IDF',
      'Multinomial Naive Bayes',
      'Sentence Transformers'
    ]
  },
  {
    title: 'Web & Backend Development',
    description: 'RESTful API construction, microservices, and interactive web interfaces.',
    icon: 'Server',
    skills: [
      'FastAPI',
      'Flask',
      'Streamlit',
      'HTML'
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for systems fundamentals and scientific computing.',
    icon: 'Code2',
    skills: [
      'Python',
      'C'
    ]
  },
  {
    title: 'Databases & Data Modeling',
    description: 'Relational storage, schema design, and query optimization.',
    icon: 'Database',
    skills: [
      'SQL',
      'PostgreSQL',
      'MySQL'
    ]
  },
  {
    title: 'Tools & Deployment',
    description: 'Version control, containerization, and modern development environments.',
    icon: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'VS Code'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'spamguard-ai',
    title: 'SpamGuard AI',
    subtitle: 'SMS/Email Spam Classifier',
    githubUrl: 'https://github.com/ashin8k/spam-message',
    description:
      'A machine learning application that classifies messages as Spam or Ham using TF-IDF text vectorization and a Multinomial Naive Bayes classifier.',
    features: [
      'Text preprocessing and classification pipeline',
      'TF-IDF feature extraction for token importance',
      'Real-time predictions through an interactive Streamlit interface',
      'Confidence display and model analytics dashboard',
      'Standalone command-line prediction functionality'
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'TF-IDF',
      'Multinomial Naive Bayes',
      'Streamlit'
    ],
    type: 'ML Application',
    diagramType: 'classifier'
  },
  {
    id: 'ai-career-platform',
    title: 'AI Career Intelligence Platform',
    subtitle: 'Resume & Job Description Matcher',
    githubUrl: 'https://github.com/ashin8k/ai-career-platform',
    description:
      'An AI-powered career platform that compares resumes with job descriptions and provides career-oriented insights, skill-gap identification, and preparation roadmaps.',
    features: [
      'Resume and job-description semantic matching',
      'TF-IDF and sentence embedding techniques',
      'Skill-gap analysis with actionable guidance',
      'ATS-oriented verification checks',
      'FastAPI backend service with clean API endpoints',
      'PostgreSQL database for career insights and profile storage',
      'Streamlit dashboard for intuitive user interactions',
      'Docker Compose deployment for reproducible environments',
      'Personalized learning roadmaps and targeted interview questions'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Scikit-learn',
      'Sentence Transformers',
      'PostgreSQL',
      'Streamlit',
      'Docker'
    ],
    type: 'Full-Stack Platform',
    diagramType: 'career-pipeline'
  },
  {
    id: 'movie-genre-predictor',
    title: 'Movie Genre Predictor',
    subtitle: 'Plot Summary Text Classifier',
    githubUrl: 'https://github.com/ashin8k/movie-genre',
    description:
      'A Python machine learning application that predicts a movie’s genre using a trained classification model applied to plot narratives.',
    features: [
      'Supervised text classification pipeline for narrative text',
      'Feature extraction and text tokenization',
      'Clean evaluation workflow for genre categorical prediction',
      'Lightweight CLI and prediction scripts for rapid inference'
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy'
    ],
    type: 'ML Application',
    diagramType: 'genre-flow'
  },
  {
    id: 'centralized-college-database',
    title: 'Centralized College Database System',
    subtitle: 'Relational Academic Management System',
    githubUrl: 'https://github.com/ashin8k/Centalized-College-Database',
    description:
      'A collaborative college management system project involving student, department, instructor, course, and enrollment data, built to explore Flask and MySQL application structure.',
    features: [
      'Normalized relational schema covering students, instructors, and departments',
      'Flask backend architecture handling CRUD operations and queries',
      'Structured MySQL database integration with relational constraints',
      'Collaborative software engineering workflow and database modeling'
    ],
    technologies: [
      'Python',
      'Flask',
      'MySQL',
      'SQL',
      'HTML'
    ],
    type: 'Collaborative System',
    diagramType: 'college-db'
  }
];

export const EDUCATION: EducationItem = {
  institution: 'AJ Institute of Engineering and Technology, Mangaluru',
  degree: 'Bachelor of Engineering — Computer Science Engineering (AI & ML)',
  period: 'October 2023 – August 2027',
  graduationNote: 'Expected graduation: 2027',
  location: 'Mangaluru, Karnataka, India',
  courseworkHighlights: [
    'Artificial Intelligence & Machine Learning Foundations',
    'Data Structures & Algorithms',
    'Object-Oriented Programming & Systems Design',
    'Database Management Systems & SQL',
    'Applied Linear Algebra & Statistics for Computing'
  ]
};

export const CERTIFICATION: CertificationItem = {
  title: 'Complete Python Course: Learn From Beginner to Advanced',
  platform: 'Udemy',
  date: 'September 2026',
  description:
    'Comprehensive training covering Python core language syntax, object-oriented programming, data structures, module architecture, file handling, and real-world scripting.'
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Spam Classification System',
    category: 'Machine Learning & NLP',
    description:
      'Engineered an end-to-end spam detection pipeline utilizing TF-IDF vectorization and Multinomial Naive Bayes with an interactive Streamlit UI.',
    techPreview: ['Python', 'Scikit-learn', 'Streamlit']
  },
  {
    title: 'AI Career Intelligence Engine',
    category: 'Full-Stack & Embeddings',
    description:
      'Developed an AI-driven platform combining sentence transformers, skill-gap analysis, FastAPI services, and Docker Compose deployment.',
    techPreview: ['FastAPI', 'Sentence Transformers', 'Docker']
  },
  {
    title: 'End-to-End System Development',
    category: 'Systems & Architecture',
    description:
      'Architected solutions spanning machine learning pipelines, RESTful APIs, relational databases (PostgreSQL/MySQL), and containerized microservices.',
    techPreview: ['PostgreSQL', 'Docker', 'Flask']
  },
  {
    title: 'Advanced Python Mastery',
    category: 'Foundations & Tooling',
    description:
      'Completed comprehensive Python coursework covering modern programming patterns, data structures, and production-ready code design.',
    techPreview: ['Python 3', 'OOP', 'Data Structures']
  }
];
