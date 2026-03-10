export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectLinks {
  github: string;
  video?: string;
  demo?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  short_description: string;
  full_description: string;
  technologies: string[];
  links: ProjectLinks;
  images: ProjectImage[]; 
}