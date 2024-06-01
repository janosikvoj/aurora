export type Slide = {
  id: number;
  title: string;
  template: React.ReactNode
};

export type Chapter = {
  id: number;
  title: string;
  slides: Slide[];
};

export type Module = {
  id: number;
  name: string;
  slug: string;
  label: string;
  chapters: Chapter[];
  progress: number; //Should be between 0 and 1
  length: number; //Number of slides
  unlock: string; //Unlocks this tool
};

export type SlideLocation = {
  chapterId: number;
  slideId: number;
};
