export interface ProjectImage {
  url: string;
  caption?: string;
}

export interface ProjectData {
  id: number | string;
  name: string;
  repoName: string; 
  shortDesc: string;
  fullDesc: string;
  techs: string[];
  github: string;
  demo?: string;
  banner: string;
  images: ProjectImage[]; 
}