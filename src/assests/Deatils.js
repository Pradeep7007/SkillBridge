import zapier from './zapier.png';
import zoom from './zoom.png';
import spotify from './spotify.png';
import netflix from './netflix.png';
import notion from './notion.png';
import adobe from './adobe.png';
import amazon from './amazon.png';
import mobile from './mobile.png';
import web from './web.png';
import uiux from './uiux.png';
import javascript from './javascript.png';
import front from './front.png';
import graphic from './graphic.png';
import sara from './sara.png';
import micheal from './micheal.png';
import jason from './jason.png';
import emily from './emily.png';

export const apps = [
  { img: zapier, name: "Zapier" },
  { img: zoom, name: "Zoom" },
  { img: spotify, name: "Spotify" },
  { img: netflix, name: "Netflix" },
  { img: notion, name: "Notion" },
  { img: adobe, name: "Adobe" },
  { img: amazon, name: "Amazon" },
];

export const benefits = [
  {
    num: '01',
    title: 'Flexible Learning Schedule',
    explanation: 'Fit your coursework around your existing commitments and obligations.'
  },
  {
    num: '02',
    title: 'Expert Instruction',
    explanation: 'Learn from industry experts who have hands-on experience in design and development.'
  },
  {
    num: '03',
    title: 'Diverse Course Offerings',
    explanation: 'Explore a wide range of design and development courses covering various topics.'
  },
  {
    num: '04',
    title: 'Updated Curriculum',
    explanation: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
  },
  {
    num: '05',
    title: 'Practical Projects and Assignments',
    explanation: 'Develop a portfolio showcasing your skills and abilities to potential employers.',
    
  },
  {
    num: '06',
    title: 'Interactive Learning Environment',
    explanation: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
    
  },
];

export const courses = [
  {
    image:web,
    duration: '4 Weeks',
    level: 'Beginner',
    teacher: 'John Smith',
    course: 'Web Design Fundamentals',
    explanation: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    buttonText: 'Get it now',
  },
  {
    image:uiux,
    duration: '6 Weeks',
    level: 'Intermediate',
    teacher: 'Emily Johnson',
    course: 'UI/UX Design',
    explanation: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    buttonText: 'Get it now',
  },
  {
    image:mobile,
    duration: '8 Weeks',
    level: 'Intermediate',
    teacher: 'David Brown',
    course: 'Mobile App Development',
    explanation: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    buttonText: 'Get it now',
  },
  {
    image:graphic,
    duration: '10 Weeks',
    level: 'Beginner',
    teacher: 'Sarah Thompson',
    course: 'Graphic Design for Beginners',
    explanation: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    buttonText: 'Get it now',
  },
  {
    image:front,
    duration: '10 Weeks',
    level: 'Advanced',
    teacher: 'Michael Adams',
    course: 'Front-End Web Development',
    explanation: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    buttonText: 'Get it now',
  },
  {
    image:javascript,
    duration: '4 Weeks',
    level: 'Beginner',
    teacher: 'Jennifer Wilson',
    course: 'Advanced JavaScript',
    explanation: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
    buttonText: 'Available Soon',
  },
];

export const testimonial = [
  {
    explanation: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    image: sara,
    name: "Sarah L",
    btntext: "Read full Story",
  },
  {
    explanation: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    image: jason,
    name: "Jason M",
    btntext: "Read full Story",
  },
  {
    explanation: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    image: emily,
    name: "Emily R",
    btntext: "Read full Story",
  },
  {
    explanation: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    image: micheal,
    name: "Michael K",
    btntext: "Read full Story",
  },
];

export const coursepage = [
  {
    title: "Web Design Fundamentals",
    explanation: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    img: web,
    curriculum: [
      "Introduction to HTML",
      "Styling with CSS",
      "Introduction to Responsive Design",
      "Design Principles for Web",
      "Building a Basic Website"
    ]
  },
  {
    title: "UI/UX Design",
    explanation: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    img: uiux,
    curriculum: [
      "Introduction to UI/UX Design",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Visual Design and Branding",
      "Usability Testing and Iteration"
    ]
  },
  {
    title: "Mobile App Development",
    explanation: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    img: mobile,
    curriculum: [
      "Introduction to Mobile App Development",
      "Fundamentals of Swift Programming (iOS)",
      "Fundamentals of Kotlin Programming (Android)",
      "Building User Interfaces",
      "App Deployment and Testing"
    ]
  },
  {
    title: "Graphic Design for Beginners",
    explanation: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    duration: "10 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
    img: graphic,
    curriculum: [
      "Introduction to Graphic Design",
      "Typography and Color Theory",
      "Layout Design and Composition",
      "Image Editing and Manipulation",
      "Designing for Print and Digital Media"
    ]
  },
  {
    title: "Front-End Web Development",
    explanation: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Adams",
    img: front,
    curriculum: [
      "HTML Fundamentals",
      "CSS Styling and Layouts",
      "JavaScript Basics",
      "Building Responsive Websites",
      "Introduction to Bootstrap and React"
    ]
  }
];



