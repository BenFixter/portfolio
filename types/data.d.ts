interface Socials {
  email: string;
  linkedin: string;
  github: string;
}

interface General {
  name: string;
  title: string;
  headline: string;
  about: string[];
  socials: Socials;
}

interface Experience {
  title: string;
  company: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

interface Education {
  subject: string;
  degree: string;
  university: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Volunteering {
  position: string;
  event: string;
  organisation: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Project {
  name: string;
  framework: string;
  description: string;
  href: string;
  stars: string;
}

interface Certification {
  name: string;
  badgeURL: string;
  href: string;
  authority: string;
}
interface Data {
  general: General;
  experiences: Experience[];
  education: EducationItem[];
  volunteering: Volunteering[];
  projects: Project[];
  certifications: Certification[];
}
