import SlideModuleIntro from '@/pages/manual/slideTemplates/SlideModuleIntro';
import SlideQAndA from '@/pages/manual/slideTemplates/SlideQAndA';
import SlideRichText from '@/pages/manual/slideTemplates/SlideRichText';
import SlideSectionTitle from '@/pages/manual/slideTemplates/SlideSectionTitle';
import { Module } from '@/types/ModulesTypes';

const modules: Module[] = [
  {
    id: 0,
    name: 'Theory',
    slug: 'theory',
    label: 'Color theory basics',
    chapters: [
      {
        id: 0,
        title: 'Slide templates showcase',
        slides: [
          {
            id: 0,
            title: 'Module introduction',
            template: <SlideModuleIntro />,
          },
          {
            id: 1,
            title: 'Chapter introduction',
            template: <SlideSectionTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: <SlideQAndA />,
          },
          {
            id: 3,
            title: 'Slide with richtext and layout',
            template: <SlideRichText />,
          },
        ],
      },
      {
        id: 1,
        title: 'Introduction to the world of colors',
        slides: [
          {
            id: 0,
            title: 'What are Colors?',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Colors Around Us',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'The Magical Trio: Hue, Saturation, Brightness',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'The Magical Trio: Hue, Saturation, Brightness',
            template: 'SlideRichText',
          },
        ],
      },
      {
        id: 2,
        title: 'Color science',
        slides: [
          {
            id: 0,
            title: 'Color Models',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Light and Color Interaction',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Color Pigments and Dyes',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Measuring Color',
            template: 'SlideRichText',
          },
        ],
      },
      {
        id: 3,
        title: 'Properties of colors',
        slides: [
          {
            id: 0,
            title: 'Psychology of Color',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Cultural Aspects of Color',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Symbolic Meanings of Colors',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Color and Emotions',
            template: 'SlideRichText',
          },
        ],
      },
    ],
    progress: 1,
    length: 20,
    unlock: 'Fine-tune',
  },
  {
    id: 1,
    name: 'Harmony',
    slug: 'harmony',
    label: 'Combinations and harmony',
    chapters: [
      {
        id: 0,
        title: 'Slide templates showcase',
        slides: [
          {
            id: 0,
            title: 'Module introduction',
            template: <SlideModuleIntro />,
          },
          {
            id: 1,
            title: 'Chapter introduction',
            template: <SlideSectionTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: <SlideQAndA />,
          },
          {
            id: 3,
            title: 'Slide with richtext and layout',
            template: <SlideRichText />,
          },
        ],
      },
      {
        id: 1,
        title: 'Color Schemes',
        slides: [
          {
            id: 0,
            title: 'Understanding Color Schemes',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Common Color Schemes',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Creating Your Own Color Schemes',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Color Harmony in Practice',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 2,
        title: 'Color Contrast',
        slides: [
          {
            id: 0,
            title: 'The Importance of Color Contrast',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Measuring Color Contrast',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Achieving Good Color Contrast',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Color Contrast in Design Examples',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 3,
        title: 'Color Psychology',
        slides: [
          {
            id: 0,
            title: 'The Power of Color Psychology',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Colors and Emotions',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Colors and Associations',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Using Color Psychology in Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 4,
        title: 'Color in Different Cultures',
        slides: [
          {
            id: 0,
            title: 'The Cultural Significance of Color',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color Symbolism in Different Cultures',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Considering Cultural Context in Design',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Color in Cultural Contexts',
            template: 'SlideMediaSlider',
          },
        ],
      },
    ],
    progress: 0.67,
    length: 20,
    unlock: 'Harmonize',
  },
  {
    id: 2,
    name: 'Perception',
    slug: 'perception',
    label: 'Psychology, culture and color perception',
    chapters: [
      {
        id: 0,
        title: 'Slide templates showcase',
        slides: [
          {
            id: 0,
            title: 'Module introduction',
            template: <SlideModuleIntro />,
          },
          {
            id: 1,
            title: 'Chapter introduction',
            template: <SlideSectionTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: <SlideQAndA />,
          },
          {
            id: 3,
            title: 'Slide with richtext and layout',
            template: <SlideRichText />,
          },
        ],
      },
      {
        id: 1,
        title: 'Introduction to Color Perception',
        slides: [
          {
            id: 0,
            title: 'The Human Eye and Color Vision',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'The Science of Color Perception',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Individual Differences in Color Perception',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Color Constancy and Color Illusions',
            template: 'SlideMedia',
          },
        ],
      },
      {
        id: 2,
        title: 'Color Psychology',
        slides: [
          {
            id: 0,
            title: 'The Power of Color Psychology',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Colors and Emotions',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Colors and Associations',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Using Color Psychology in Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 3,
        title: 'Cultural Aspects of Color',
        slides: [
          {
            id: 0,
            title: 'The Cultural Significance of Color',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color Symbolism in Different Cultures',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Considering Cultural Context in Design',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Color in Cultural Contexts',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 4,
        title: 'Color and Marketing',
        slides: [
          {
            id: 0,
            title: 'The Psychology of Color in Marketing',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Using Color to Create Brand Identity',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Color and Consumer Behavior',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Effective Color Marketing',
            template: 'SlideMediaSlider',
          },
        ],
      },
    ],
    progress: 0.23,
    length: 20,
    unlock: 'Visualize',
  },
  {
    id: 3,
    name: 'Design',
    slug: 'design',
    label: 'Color in design and technology',
    chapters: [
      {
        id: 0,
        title: 'Slide templates showcase',
        slides: [
          {
            id: 0,
            title: 'Module introduction',
            template: <SlideModuleIntro />,
          },
          {
            id: 1,
            title: 'Chapter introduction',
            template: <SlideSectionTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: <SlideQAndA />,
          },
          {
            id: 3,
            title: 'Slide with richtext and layout',
            template: <SlideRichText />,
          },
        ],
      },
      {
        id: 1,
        title: 'Color in User Interface (UI) Design',
        slides: [
          {
            id: 0,
            title: 'The Role of Color in UI Design',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color Palettes and UI Design',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Creating User-Friendly Color Schemes',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Effective UI Color Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 2,
        title: 'Color in Graphic Design',
        slides: [
          {
            id: 0,
            title: 'The Power of Color in Graphic Design',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color Theory for Graphic Designers',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Using Color to Convey Message and Emotion',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Remarkable Graphic Color Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 3,
        title: 'Color in Web Design',
        slides: [
          {
            id: 0,
            title: 'Color for a Compelling Web Experience',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color Harmony and Web Design',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Color Accessibility in Web Design',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Inspiring Examples of Web Color Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 4,
        title: 'Color in Product Design',
        slides: [
          {
            id: 0,
            title: 'The Impact of Color in Product Design',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Color and User Experience (UX) in Product Design',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Color for Branding and Product Identity',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Exceptional Product Color Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
    ],
    progress: 0,
    length: 20,
    unlock: 'Blend',
  },
  {
    id: 4,
    name: 'Accessibility',
    slug: 'accessibility',
    label: 'Accessibility, readability and good UX',
    chapters: [
      {
        id: 0,
        title: 'Slide templates showcase',
        slides: [
          {
            id: 0,
            title: 'Module introduction',
            template: <SlideModuleIntro />,
          },
          {
            id: 1,
            title: 'Chapter introduction',
            template: <SlideSectionTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: <SlideQAndA />,
          },
          {
            id: 3,
            title: 'Slide with richtext and layout',
            template: <SlideRichText />,
          },
        ],
      },
      {
        id: 1,
        title: 'Introduction to Color Accessibility',
        slides: [
          {
            id: 0,
            title: 'The Importance of Color Accessibility',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Understanding Color Blindness and Visual Impairments',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Legal and Regulatory Standards for Color Accessibility',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Poor and Good Color Accessibility',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 2,
        title: 'Color Contrast for Accessibility',
        slides: [
          {
            id: 0,
            title: 'Why Color Contrast Matters for Accessibility',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Measuring and Ensuring Sufficient Color Contrast',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Tools and Techniques for Color Contrast Testing',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Effective Color Contrast in Design',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 3,
        title: 'Color Choice for Accessibility',
        slides: [
          {
            id: 0,
            title: 'Considerations for Choosing Accessible Colors',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Avoiding Color Confusion and Cultural Misinterpretations',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Using Color Effectively for Different Visual Impairments',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Examples of Thoughtful Color Choices for Accessibility',
            template: 'SlideMediaSlider',
          },
        ],
      },
      {
        id: 4,
        title: 'Accessibility Best Practices in Design',
        slides: [
          {
            id: 0,
            title: 'Incorporating Color Accessibility into Design Processes',
            template: 'SlideRichText',
          },
          {
            id: 1,
            title: 'Using Accessible Color Palettes and Design Tools',
            template: 'SlideRichText',
          },
          {
            id: 2,
            title: 'Testing and Evaluating Color Accessibility in Designs',
            template: 'SlideRichText',
          },
          {
            id: 3,
            title: 'Creating Inclusive Designs for All Users',
            template: 'SlideMediaSlider',
          },
        ],
      },
    ],
    progress: 0,
    length: 20,
    unlock: 'Clarify',
  },
];

export default modules;
