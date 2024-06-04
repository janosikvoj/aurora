import React from 'react';
import Text from './Text';
import Button from '@/components/Button';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { randomIntegerInRange } from '@/lib/utils';
import {
  GradientIllustrationAccessibility,
  GradientIllustrationDesign,
  GradientIllustrationHarmony,
  GradientIllustrationPerception,
  GradientIllustrationTheory,
} from '../assets/svgs/svgComponents';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  content: 'theory' | 'harmony' | 'perception' | 'design' | 'accessibility';
  margin: string;
}

const cardsData = {
  theory: {
    heading: 'Theory',
    text: 'Enhance your knowledge of color properties and curiosities.',
    path: '/manual/theory',
    illustration: GradientIllustrationTheory,
  },
  harmony: {
    heading: 'Harmony',
    text: 'Take your project to the next level with perfect color combinations.',
    path: '/manual/harmony',
    illustration: GradientIllustrationHarmony,
  },
  perception: {
    heading: 'Perception',
    text: 'Discover how hues communicate important information and emotions.',
    path: '/manual/perception',
    illustration: GradientIllustrationPerception,
  },
  design: {
    heading: 'Design',
    text: "What does the user look at first? Show them what's most important.",
    path: '/manual/design',
    illustration: GradientIllustrationDesign,
  },
  accessibility: {
    heading: 'Accessibility',
    text: 'Help everyone read everything you have to say correctly.',
    path: '/manual/accessibility',
    illustration: GradientIllustrationAccessibility,
  },
};

const ModuleCard: React.FC<ModuleCardProps> = ({ content, margin }) => {
  const cardData = cardsData[content];
  return (
    <motion.div
      initial={{ rotate: 20, x: '-10%' }}
      whileInView={{
        rotate: randomIntegerInRange(-6, 6),
        y: '-16rem',
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ marginRight: margin }}
      className="z-20 relative flex flex-col p-12 items-center w-96 bg-gradient-to-b from-theme-3 to-theme-1 rounded-md border border-theme-6"
    >
      <cardData.illustration className="size-40 mb-16" />
      <Text style="h2" className="mb-2">
        {cardData.heading}
      </Text>
      <Text style="p" className="mb-8 text-center">
        {cardData.text}
      </Text>
      <Link to={cardData.path}>
        <Button variant="primary" className="w-fit">
          <BookOpen size={20} strokeWidth={1.75} />
          Open manual
        </Button>
      </Link>
    </motion.div>
  );
};

export default ModuleCard;
