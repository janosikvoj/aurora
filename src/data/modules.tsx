import PresSlideIntro from '@/pages/manual/presentation/PresSlideIntro';
import SlideMedia from '@/pages/manual/slideTemplates/SlideMedia';
import SlideModuleIntro from '@/pages/manual/slideTemplates/SlideModuleIntro';
import SlideQAndA from '@/pages/manual/slideTemplates/SlideQAndA';
import SlideRichText from '@/pages/manual/slideTemplates/SlideRichText';
import SlideChapterTitle from '@/pages/manual/slideTemplates/SlideChapterTitle';
import { Module } from '@/types/ModulesTypes';
import PresMotivationList from '@/pages/manual/presentation/PresMotivationList';
import SlideEmptyContainer from '@/pages/manual/slideTemplates/SlideEmptyContainer';
import Text from '@/components/Text';
import PresKeyValuesList from '@/pages/manual/presentation/PresKeyValuesList';
import PresTheoreticalPart from '@/pages/manual/presentation/PresTheoreticalPart';

import figmaScreenGenerate from '@/assets/imgs/figma-screen_generate.png';
import figmaScreenFinetune from '@/assets/imgs/figma-screen_fine-tune.png';
import figmaScreenHarmonize from '@/assets/imgs/figma-screen_harmonize.png';
import figmaScreenVisualize from '@/assets/imgs/figma-screen_visualize.png';
import figmaScreenBlend from '@/assets/imgs/figma-screen_blend.png';
import figmaScreenClarify from '@/assets/imgs/figma-screen_clarify.png';

import figmaScreenLandingPage from '@/assets/imgs/figma-screen_landing-page.png';
import figmaScreenManual from '@/assets/imgs/figma-screen_manual.png';

import webScreenCoolors from '@/assets/imgs/web-screen_coolors.png';
import webScreenColorhunt from '@/assets/imgs/web-screen_colorhunt.png';
import webScreenLeonardo from '@/assets/imgs/web-screen_leonardo.png';
import webScreenRealtimeColors from '@/assets/imgs/web-screen_realtime-colors.png';
import ConceptPointsList from '@/pages/manual/presentation/ConceptPointsList';

import figmaWireframeLab from '@/assets/imgs/figma-wireframe_lab.png';
import figmaWireframeManual from '@/assets/imgs/figma-wireframe_manual.png';
import figmaWireframeLandingPage from '@/assets/imgs/figma-wireframe_landing-page.png';
import UIUXThoughtsList from '@/pages/manual/presentation/UIUXThoughtsList';
import PrototypeInfoList from '@/pages/manual/presentation/PrototypeInfoList';
import { Link } from 'react-router-dom';
import PossibleFuncExtensionsList from '@/pages/manual/presentation/PossibleFuncExtensionsList';
import ProjectEvaluation from '@/pages/manual/presentation/ProjectEvaluation';

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
            template: <SlideChapterTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: (
              <SlideQAndA
                bubbleTopQ={`"What's your favorite color?"`}
                bubbleTopA="— A casual child"
                bubbleBotQ="Live reaction"
                bubbleBotA="The other child might answer blue, red, yellow, or green. Colors are a pretty simple thing that even 4-year-olds can debate about. So why even bother with color theory?"
              />
            ),
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
            template: <SlideChapterTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: (
              <SlideQAndA
                bubbleTopQ={`"What's your favorite color?"`}
                bubbleTopA="— A casual child"
                bubbleBotQ="Live reaction"
                bubbleBotA="The other child might answer blue, red, yellow, or green. Colors are a pretty simple thing that even 4-year-olds can debate about. So why even bother with color theory?"
              />
            ),
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
            template: <SlideChapterTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: (
              <SlideQAndA
                bubbleTopQ={`"What's your favorite color?"`}
                bubbleTopA="— A casual child"
                bubbleBotQ="Live reaction"
                bubbleBotA="The other child might answer blue, red, yellow, or green. Colors are a pretty simple thing that even 4-year-olds can debate about. So why even bother with color theory?"
              />
            ),
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
            template: <SlideChapterTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: (
              <SlideQAndA
                bubbleTopQ={`"What's your favorite color?"`}
                bubbleTopA="— A casual child"
                bubbleBotQ="Live reaction"
                bubbleBotA="The other child might answer blue, red, yellow, or green. Colors are a pretty simple thing that even 4-year-olds can debate about. So why even bother with color theory?"
              />
            ),
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
            template: <SlideChapterTitle />,
          },
          {
            id: 2,
            title: 'Q&A slide',
            template: (
              <SlideQAndA
                bubbleTopQ={`"What's your favorite color?"`}
                bubbleTopA="— A casual child"
                bubbleBotQ="Live reaction"
                bubbleBotA="The other child might answer blue, red, yellow, or green. Colors are a pretty simple thing that even 4-year-olds can debate about. So why even bother with color theory?"
              />
            ),
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
  {
    id: 5,
    slug: 'thesis',
    name: 'Thesis',
    unlock: 'Bakalářka za A',
    chapters: [
      {
        title: 'Úvod',
        slides: [
          {
            title: 'Představení',
            template: <PresSlideIntro />,
          },
        ],
      },
      {
        title: 'Motivace',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Motivace" />,
          },
          {
            title: 'Základní otázka',
            template: (
              <SlideQAndA
                bubbleTopQ="Tak co budu teda dělat na tu bakalářku?"
                bubbleTopA="Před rokem důležitá otázka"
                bubbleBotQ="Co následovalo…"
                bubbleBotA="Dlouhé vymýšlení a hledání, ale pak jsem na to přišel."
              />
            ),
          },
          {
            title: 'Odpověd',
            template: <PresMotivationList />,
          },
          {
            title: 'Výsledek vymýšlení',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">Udělám generátor barevných palet!</Text>
              </SlideEmptyContainer>
            ),
          },
        ],
      },
      {
        title: 'Cíl projektu',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Cíl projektu" />,
          },
          {
            title: 'Klíčové vlastnosti',
            template: <PresKeyValuesList />,
          },
          {
            title: 'Osobní cíl',
            template: (
              <SlideQAndA
                bubbleTopQ="Osobní cíl autora?"
                bubbleBotQ="Nakódit funkční verzi appky"
                bubbleBotA="(Vytvořit silnou věc do portfolia)"
              />
            ),
          },
        ],
      },
      {
        title: 'Koncept a návrh',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Koncept a návrh" />,
          },
          {
            title: '1. Rešerše',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">1.</Text>
                <Text style="h1">Rešerše</Text>
              </SlideEmptyContainer>
            ),
          },
          {
            title: 'Teoretická část',
            template: <PresTheoreticalPart />,
          },
          {
            title: 'Důležitá část',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">
                  Rešerše webových nástrojů na práci s barvami
                </Text>
              </SlideEmptyContainer>
            ),
          },
          {
            title: 'Generátory vzorníků',
            template: (
              <SlideMedia
                imgUrl={webScreenCoolors}
                caption="Typ: Generátor vzorníků"
              />
            ),
          },
          {
            title: 'Inspirační platformy',
            template: (
              <SlideMedia
                imgUrl={webScreenColorhunt}
                caption="Typ: Inspirační platformy"
              />
            ),
          },
          {
            title: 'Nástroje na vizualizaci',
            template: (
              <SlideMedia
                imgUrl={webScreenRealtimeColors}
                caption="Typ: Nástroj na vizualizaci"
              />
            ),
          },
          {
            title: 'Komplexní manipulace s barvami',
            template: (
              <SlideMedia
                imgUrl={webScreenLeonardo}
                caption="Typ: Komplexní manipulace s barvami"
              />
            ),
          },
          {
            title: '2. Koncept',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">2.</Text>
                <Text style="h1">Koncept</Text>
              </SlideEmptyContainer>
            ),
          },
          {
            title: 'Poznámky ke konceptu',
            template: <ConceptPointsList />,
          },
          {
            title: '3. Návrh',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">3.</Text>
                <Text style="h1">Návrh</Text>
              </SlideEmptyContainer>
            ),
          },
          {
            title: 'Části appky',
            template: (
              <SlideQAndA
                bubbleTopQ="Manuál"
                bubbleTopA="5 modulů rozdělených do kapitol s různým množstvím slidů."
                bubbleBotQ="Laboratoř"
                bubbleBotA="6 nástrojů na práci s barevnou paletou."
              />
            ),
          },
          {
            title: 'Wireframe landing page',
            template: (
              <SlideMedia
                imgUrl={figmaWireframeLandingPage}
                caption="Wireframe ladning page"
              />
            ),
          },
          {
            title: 'Wireframe manuálu',
            template: (
              <SlideMedia
                imgUrl={figmaWireframeManual}
                caption="Wireframe manuálu"
              />
            ),
          },
          {
            title: 'Wireframe laboratoře',
            template: (
              <SlideMedia
                imgUrl={figmaWireframeLab}
                caption="Wireframe laboratoře"
              />
            ),
          },
        ],
      },
      {
        title: 'UI a UX',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="UI a UX" />,
          },
          {
            title: 'Poznámky k UI a UX',
            template: <UIUXThoughtsList />,
          },
          {
            title: 'Návrh rozhraní landing page',
            template: (
              <SlideMedia
                imgUrl={figmaScreenLandingPage}
                caption="Návrh rozhraní landing page"
              />
            ),
          },
          {
            title: 'Návrh rozhraní manuálu',
            template: (
              <SlideMedia
                imgUrl={figmaScreenManual}
                caption="Návrh rozhraní manuálu"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Generate',
            template: (
              <SlideMedia
                imgUrl={figmaScreenGenerate}
                caption="Návrh rozhraní nástroje Generate"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Fine-tune',
            template: (
              <SlideMedia
                imgUrl={figmaScreenFinetune}
                caption="Návrh rozhraní nástroje Fine-tune"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Harmonize',
            template: (
              <SlideMedia
                imgUrl={figmaScreenHarmonize}
                caption="Návrh rozhraní nástroje Harmonize"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Visualize',
            template: (
              <SlideMedia
                imgUrl={figmaScreenVisualize}
                caption="Návrh rozhraní nástroje Visualize"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Blend',
            template: (
              <SlideMedia
                imgUrl={figmaScreenBlend}
                caption="Návrh rozhraní nástroje Blend"
              />
            ),
          },
          {
            title: 'Návrh rozhraní nástroje Clarify',
            template: (
              <SlideMedia
                imgUrl={figmaScreenClarify}
                caption="Návrh rozhraní nástroje Clarify"
              />
            ),
          },
        ],
      },
      {
        title: 'Základní funkční prototyp',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Základní funkční prototyp" />,
          },
          {
            title: 'Základní informace',
            template: <PrototypeInfoList />,
          },
          {
            title: 'Osobní cíl',
            template: (
              <SlideQAndA
                bubbleTopQ="Jak jsem to udělal?"
                bubbleTopA="(Tech stack)"
                bubbleBotQ="React, Vite, TailwindCSS, shadcn, culori, framer-motion, shadergradient, …"
                bubbleBotA="cca 6000 řádků kódu"
              />
            ),
          },
          {
            title: 'Osobní cíl',
            template: (
              <SlideEmptyContainer>
                <Link to="/">Pojďmě si to spolu proklikat</Link>
              </SlideEmptyContainer>
            ),
          },
        ],
      },
      {
        title: 'Pokračování projektu',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Pokračování projektu" />,
          },
          {
            title: 'Dokončení publikovatelné verze',
            template: (
              <SlideQAndA
                bubbleTopQ="Dokončení publikovatelné verze"
                bubbleBotQ="Systém aplikace, vizuální prvky, UI a UX celého nástroje jsou připraveny."
                bubbleBotA="Práce digitálního designéra je u konce. Nicméně práce developera, lektora barevné teorie a copywritera může začít."
              />
            ),
          },
          {
            title: 'Možné rozšíření funkcionality',
            template: <PossibleFuncExtensionsList />,
          },
        ],
      },
      {
        title: 'Závěr',
        slides: [
          {
            title: 'Intro',
            template: <SlideChapterTitle title="Závěr" />,
          },
          {
            title: 'Zhodnocení projektu',
            template: <ProjectEvaluation />,
          },
          {
            title: 'Osobní přínos',
            template: (
              <SlideQAndA
                bubbleTopQ="Osobní přínos pro autora"
                bubbleTopA="Za půl roku jsem se naučil pracovat v nejpopulárnějším JS frameworku na světě."
                bubbleBotQ="Zvýšení vlastní hodnoty na trhu práce získáním zkušností a komplexního projektu do portfolia."
              />
            ),
          },
          {
            title: 'Poděkování',
            template: (
              <SlideEmptyContainer>
                <Text style="lead">Děkuji všem za pozornost!</Text>
              </SlideEmptyContainer>
            ),
          },
          {
            title: 'Prostor pro otázky',
            template: (
              <SlideEmptyContainer>
                <Text style="h1">Prostor pro otázky:</Text>
              </SlideEmptyContainer>
            ),
          },
        ],
      },
    ].map((chapter, index) => {
      return {
        ...chapter,
        slides: chapter.slides.map((slide, index) => {
          return {
            ...slide,
            id: index,
          };
        }),
        id: index,
      };
    }),
  },
];

export default modules;
