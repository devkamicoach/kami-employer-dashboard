export type ModuleSideBarContentTypes = {
  title: string | undefined;
  description: string | undefined;
  testimonial: string | undefined;
  price: string | undefined;
  details: Array<string> | undefined;
};

export type ModuleCardTypes = {
  title: string;
  icon: string;
  isTop?: boolean;
  // eslint-disable-next-line no-unused-vars
  openSideBar?: (content: ModuleSideBarContentTypes) => void;
  content?: any;
};
