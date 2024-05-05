type Module = {
  id: number;
  name: string;
  slug: string;
  label: string;
  chapters: [];
  progress: number; //Should be between 0 and 1
  length: number; //Number of slides
  unlock: string; //Unlocks this tool
};

export default Module;
