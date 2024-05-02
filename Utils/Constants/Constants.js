import {
  mobile,
  backend,
  creator,
  web,
  starbucks,
  tesla,
  shopify,
  FinancialIMG,
  SocialConsq,
  SocialMediaAndTheBrain,
  SocialMediaLiteracy,
  AIEducation,
  GenAI,
} from "../../Assets/dump/Assets/index.js";

const services = [
  { id: 1, title: "Copywriting", icon: web },
  { id: 2, title: "R&D", icon: mobile },
  { id: 3, title: "Tutoring", icon: backend },
  { id: 4, title: "Problem Solving", icon: creator },
];

const experiences = [
  {
    id: 1,
    title: "Digital Marketer",
    company_name: "AFRICVITA",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2018 - Jan 2020",
    points: [
      `Improve the brand online presence`,
      `Set up a website to improve credibility`,
      `Got the brand verified by Google`,
      `Created a strong network for the
brand in over 20 campuses in Nigeria`,
    ],
  },
  {
    id: 2,
    title: "Teaching Practice Teacher",
    company_name: "SAINT JOSEPH COLLEGE ONDO",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - December 2020",
    points: [
      `Taught Biology to SSS 3 students in
preparation for WAEC`,
      `Partnered with other Teaching
Practice students to do some STEM
project.`,
      `Trained students on content creation`,
    ],
  },
  {
    id: 3,
    title: "Teaching Practice Teacher",
    company_name: "DELE INTERNATIONAL COLLEGE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2021",
    points: [
      `Taught Biology to SSS 2 students`,
      `Held a biological practical on toads
Participated in extracurricular
activities with the students`,
      `Helped the school optimized their
Google profile and got it verified`,
    ],
  },
  {
    id: 4,
    title: "Community Manager",
    company_name: "INFINIX XCLUB",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - March 2022",
    points: [
      `Identify and research potential clients`,
      `Proposed the first campus based
community for Xclub in Nigeria.`,
      `Develop and expanded the campus
community from 15 members to 300
members`,
      `Recruited new community head for
Lagos and Ondo Community`,
    ],
  },
  {
    id: 5,
    title: "Tutor",
    company_name: "DIXTINCT AFRICA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - December 2022",
    points: [
      `Identify and research potential clients`,
      `Proposed the first campus based
community for Xclub in Nigeria.`,
      `Develop and expanded the campus
community from 15 members to 300
members`,
      `Recruited new community head for
Lagos and Ondo Community`,
    ],
  },
  {
    id: 6,
    title: "Business Developer",
    company_name: "HAIV TECHNOLOGY SUPPORT LIMITED",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
      `Identify and research potential clients`,
      `Negotiate contract terms with clients
Develop and maintain client
relationship`,
      `Give presentations to prospective
clients`,
      `Set up several fund regeneration
strategy`,
      `Created brand international
recognition in Canada and China
during the 6 months of employment`,
      `Increase the company's net value by
140%`,
      `Help to obtain 5 subsidiaries that
increased the company's shares value`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const ToolsInfo = [
  {
    id: 1,
    toolsLogo: "",
    toolsName: "Interactive Whiteboards",
    industry: "education",
    mTNum: "18%",
    yearsRange: "2022-2056",
    points: [
      `SMART Boards: Interactive display
systems for engaging lessons`,
      `Promethean Boards: Interactive
whiteboards with touchscreen capabilities`,
    ],
  },
  {
    id: 2,
    toolsLogo: "",
    toolsName: "Doc Cams",
    industry: "Education",
    mTNum: "12%",
    yearsRange: "2022-2056",
    points: [
      `Elmo Document Cameras: High-resolution cameras for displaying
documents, books, or 3D objects`,
      `Hovercam: Portable document cameras
with software integration for annotations`,
    ],
  },
  {
    id: 3,
    toolsLogo: "",
    toolsName: "Moodle",
    industry: "LMS",
    mTNum: "6%",
    yearsRange: "2022-2056",
  },
  {
    id: 4,
    toolsLogo: "",
    toolsName: "Zoom",
    industry: "design",
    mTNum: 0,
    yearsRange: "2022-2056",
  },
];

const ToolsInfoXis = [
  {
    id: 1,
    toolsLogo: "",
    toolsName: "Interactive Whiteboards",
    industry: "education",
    mTNum: "12%",
    yearsRange: "2022-2056",
  },
  {
    id: 2,
    toolsLogo: "",
    toolsName: "Doc Cams",
    industry: "education",
    mTNum: "20%",
    yearsRange: "2022-2056",
  },
  {
    id: 3,
    toolsLogo: "",
    toolsName: "Moodle",
    industry: "LMS",
    mTNum: "12%",
    yearsRange: "2022-2056",
  },
  {
    id: 4,
    toolsLogo: "",
    toolsName: "zoom",
    industry: "design",
    mTNum: 0,
    yearsRange: "2022-2056",
  },
];

const CoursesCompleted_1 = [
  {
    id: 1,
    title: "Financial Literacy",
    Story: `Understanding financial concepts is crucial
          in today's world, and as an educator, it equips
          me with the knowledge to teach students
          about financial literacy, budgeting, saving
          and making informed financial decisions`,
    img: FinancialIMG,
  },
  {
    id: 2,
    title: "persuasive economy",
    Story: `Social media literacy courses provide
          insights into navigating digital platforms
          responsibly and effectively. This knowledge
          enables me to guide students on using social
          media safely, understanding persuasive
          technology, and being mindful of the
          attention economy`,
    img: SocialMediaLiteracy,
  },
  {
    id: 3,
    title: "AI for Education",
    Story: `Learning about AI literacy and common sense education prepares me to integrate technology effectively in the classroom, promote critical thinking, and foster innovation among students`,
    img: AIEducation,
  },
];

const CoursesCompleted_2 = [
  {
    id: 1,
    title: "Generative AI",
    Story: `Understanding generative AI allows me to explore creative applications of AI in education, such as personalized learning experiences and adaptive teaching methods`,
    img: GenAI,
  },
  {
    id: 2,
    title: "SMTB",
    Story: `the course on social media and the brain provides insights into the psychological impact of social media, helping me educate students and parents on maintaining a healthy
      relationship with technology`,
    img: SocialMediaAndTheBrain,
  },
  {
    id: 3,
    title: "social Media Literacy",
    Story: `This course delves into the consequences of
      social media use, equipping me to address
      digital citizenship, online safety, and the ethical
      implications of social media platforms`,
    img: SocialConsq,
  },
];

export {
  services,
  experiences,
  testimonials,
  ToolsInfo,
  CoursesCompleted_1,
  CoursesCompleted_2,
  ToolsInfoXis,
};
