import {AcademicCapIcon, CalendarIcon, DownloadIcon, MapIcon, SparklesIcon} from '@heroicons/react/outline';

import {assetPath} from '../config';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/ITA-ENG.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
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
  description:
    'Peter Cruciata is an operations and technology professional focused on data, automation, and process optimization.',
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
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a data-driven operations and technology professional who builds scalable workflows, improves efficiency, and
      reduces risk across financial markets.
    </p>
  ),
  actions: [
    {
      href: assetPath('/resume.pdf'),
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
  description:
    'I work at the intersection of business, technology, and financial markets, translating operational needs into data-driven tools and workflows. At Millennium Management, I have built automation and reporting solutions that improve accuracy, reduce operational risk, and support better decision-making.',
  aboutItems: [
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
    {label: 'Role', text: 'Operations Control Specialist', Icon: CalendarIcon},
    {label: 'Education', text: 'B.S. in Computer Science and Biology', Icon: AcademicCapIcon},
    {label: 'Focus', text: 'Data, automation, and process optimization', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [{name: 'Python'}, {name: 'SQL'}, {name: 'HTML'}, {name: 'CSS'}],
  },
  {
    name: 'Data & Analytics',
    skills: [
      {name: 'Jupyter Notebook'},
      {name: 'Microsoft SQL Server'},
      {name: 'DataGrip'},
      {name: 'Alteryx'},
      {name: 'Tableau'},
    ],
  },
  {
    name: 'Tools',
    skills: [
      {name: 'Visual Studio Code'},
      {name: 'Claude Code'},
      {name: 'Git'},
      {name: 'GitHub'},
      {name: 'Unix'},
      {name: 'Microsoft Office'},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Serie A Data Project',
    description:
      'Analyzed players in the Italian Serie A and English Premier League using Python, Web Scraping, Pandas, and Streamlit to create a data-driven report on the performance of individual players.',
    url: 'https://github.com/PeterCruciata0903/Serie-A-Data-Project.git',
    image: porfolioImage1,
  },
  {
    title: 'Hunter Horror',
    description:
      'A first person horror game made in Unity. The game is inspired by theya classic indie horrors like Slender Man.',
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
 * Education
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'Staten Island, NY',
    title: 'Bachelor of Science in Computer Science',
    content: <p>City University of New York, College of Staten Island.</p>,
  },
  {
    date: 'May 2020',
    location: 'Staten Island, NY',
    title: 'Bachelor of Science in Biology',
    content: <p>City University of New York, College of Staten Island.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'Millennium Management, LLC | New York, NY',
    title: 'Operations Control Specialist',
    content: (
      <ul className="ml-5 list-disc space-y-2">
        <li>
          Designed and developed a scalable option position-migration workflow as the sole developer, executing three
          migrations of 20,000+ positions across 10 prime brokers with 99%+ accuracy and supporting billions of dollars
          in firm-wide savings.
        </li>
        <li>
          Built and managed a centralized market-data entitlement workflow across four internal trade systems,
          identifying redundant entitlements, inactive accounts, and over-provisioned users to inform cost optimization.
        </li>
        <li>
          Developed a Python and SQL workflow with a dynamic GUI for corporate-action processing, improving accuracy,
          reducing manual errors, and saving more than five hours per week.
        </li>
        <li>
          Owned the development of 20+ criteria-based reports for fixed-income stakeholders, improving reporting
          accuracy, reducing trade breaks, and lowering high-risk items by 30%.
        </li>
        <li>
          Managed developers building and maintaining a performance dashboard for senior management to monitor external
          trading teams and identify opportunities to improve financial outcomes.
        </li>
        <li>
          Led cross-functional implementation of T+1 trade-settlement requirements with internal technical teams, middle
          office, and external brokers.
        </li>
        <li>
          Used firm-provided AI tools to develop an email-intelligence workflow that classifies and prioritizes
          operational activity.
        </li>
      </ul>
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
  description: 'For professional inquiries, feel free to reach out by email, phone, or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'pcruch@gmail.com',
      href: 'mailto:pcruch@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '917-806-7776',
      href: 'tel:+19178067776',
    },
    {
      type: ContactType.Location,
      text: 'New York, NY',
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
