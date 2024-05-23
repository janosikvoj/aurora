import { NavLink } from 'react-router-dom';
import { slideToURL } from '../../lib/moduleNavigation';
import { Module, SlideLocation } from '../../types/ModulesTypes';

interface SlideLink {
  module: Module;
  slide: SlideLocation;
  children: React.ReactNode;
}

const SlideLink: React.FC<SlideLink> = ({ module, slide, children }) => {
  const slideURL = slideToURL(module.slug, slide);
  return <NavLink to={slideURL}>{children}</NavLink>;
};

export default SlideLink;
