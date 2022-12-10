import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Peter Cruciata Personal Website',
  description: "Example site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Peter Cruciata.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New York based Computer Science student at the CUNY College of Staten Island. My main interests include Cyber Security, Game Development, and Software Engineering.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy playing video games, reading books, and playing soccer. I also enjoy playing chess and learning about Greek and Norse mythology.
      </p>
    </>
  ),
  actions: [
    {
      href: "/resume.pdf",
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  //profileImageSrc: profilepic,
  description: 'I am Peter Cruciata, I am currently a senior at the CUNY College of Staten Island and I am majoring in Computer Science. My main interests include Cyber Security, Game Development, and Software Engineering. My favorite programming language is C#. I am currently looking for a job in the Cyber Security field.',
  aboutItems: [
    {label: 'Location', text: 'Staten Island, NY', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Soccer, Books, Games', Icon: SparklesIcon},
    {label: 'Study', text: 'CUNY College of Staten Island', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Italian',
        level: 4,
      },
    ],
  },
  {
    name: 'Computer languages',
    skills: [
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Flask',
        level: 2,
      },
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {
        name: 'Unity',
        level: 8,
      },
      {
        name: 'Unreal Engine',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Deepfake Powerpoint',
    description: 'An ethical and technical study of deepfakes and their potential uses in an AI powered world.',
    url: 'https://1drv.ms/p/s!AiMa9mgeBltTgZFb8MG1lrzWpXcYbg?e=PqcNPg',
    image: porfolioImage1,
  },
  {
    title: 'Hunter Horror',
    description: 'A first person horror game made in Unity. The game is inspired by theya classic indie horrors like Slender Man.',
    url: 'https://github.com/PeterCruciata0903/HunterHorror',
    image: porfolioImage2,
  },
  {
    title: 'TechNotes',
    description: 'A note taking app made in React Native.',
    url: 'https://github.com/PeterCruciata0903/TechNotes',
    image: porfolioImage3,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2015 - May 2020',
    location: 'CUNY College of Staten Island',
    title: 'Bachelor of Science in Medical Biology',
    content: <p>Extensive knowledge of Health Sciences. Studied Biology, Chemistry and other advanced sciences. Skills in working in labratory enviornments dealing with dangerous chemicals, along with skills in dissection.</p>,
  },
  {
    date: 'July 2020 - Present',
    location: 'CUNY College of Staten Island',
    title: 'Bachelor of Science in Computer Science',
    content: <p>Learned various coding languages and created multiple projects in groups or solo. Understanding of computer architecture along with hardware functionality.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - May 2022',
    location: 'CUNY College of Staten Island',
    title: 'Lead Game Developer',
    content: (
      <p>
        Led a small team in the development of an indie horror game. Worked with Unity and C# to create a game that allows a player to try and escape a maze while being hunted by a monster. Oversaw all phases of development from design to play testing.
      </p>
    ),
  },
  {
    date: 'Feb 2022 - May 2022',
    location: 'CUNY College of Staten Island',
    title: 'SQL Developer',
    content: (
      <p>
        Created a database in SQL to store information about a sports teams. The database contained information about teams, players, and games.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'To any recruiters and employers, I am currently looking for a full time position as a security analyst. Feel free to reach out to me via email or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'Peter.Cruciata2@cix.csi.cuny.edu',
      href: 'mailto:PeterCruciata',
    },
    {
      type: ContactType.Location,
      text: 'Staten Island, NY',
      href: 'https://goo.gl/maps/xTdSEcEBwmsywGf97',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Peter Cruciata',
      href: 'https://www.linkedin.com/in/peter-cruciata/',
    },
    {
      type: ContactType.Github,
      text: 'PeterCruciata0903',
      href: 'https://github.com/PeterCruciata0903',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/PeterCruciata0903'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/peter-cruciata/'},
];
