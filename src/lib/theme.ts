import * as RadixColors from '@radix-ui/colors';
import { animate } from 'framer-motion/dom';
import { nearest, differenceEuclidean, Color } from 'culori';

// TODO Function that picks the closest Radix UI color to a specified one
// Debug
const debugMode: boolean = false;

const documentRoot = document.querySelector<HTMLElement>(':root'); // ? Document root element

const themeColors: string[][] = []; // ? Empty array for storing colors from Radix UI

// Code block that populates themeColors array from Radix UI
Object.entries(RadixColors).forEach(([colorName, colorsArray]) => {
  if (
    !colorName.includes('P3') &&
    !colorName.includes('A') &&
    !colorName.includes('Dark')
  ) {
    const colors: string[] = [colorName];
    Object.entries(colorsArray).forEach(([, colorHex]) => {
      colors.push(colorHex);
    });
    themeColors.push(colors);
  }
});

export function getClosestRadixColor(color: string | Color) {
  const colorEntries = themeColors.map((themeColor) => {return [themeColor[0],themeColor[9]]});
  const colorObject = Object.fromEntries(colorEntries);
  
  const nearestColors = nearest(
    Object.keys(colorObject),
    differenceEuclidean(),
    name => colorObject[name]
  );
  return nearestColors(color)
}

export function getRadixColorIndexBySlug(slug: string) {
  for (let i=0; i <themeColors.length; i++) {
    if (themeColors[i][0] === slug) return i;
  }
  return 0;
}

export function changeTheme(colorIndex: number = 8) {
  debugMode &&  console.log(`Current color mode is: ${themeColors[colorIndex][0]}`);
  if (documentRoot) {
    for (let i = 1; i <= 12; i++) {
      animate(
        documentRoot,
        { ['--theme-' + i]: themeColors[colorIndex][i] },
        { duration: 1 }
      );
    }
  }
}

export function changeThemeToClosest(color: Color | string) {
  changeTheme(getRadixColorIndexBySlug(getClosestRadixColor(color)[0]))
}

// export function changeTheme(colorIndex: number = 8) {
//   console.log(`Current color mode is: ${themeColors[colorIndex][0]}`);
//   if (documentRoot) {
//     for (let i = 1; i <= 12; i++) {
//       gsap.to(documentRoot, {
//         ['--theme-' + i]: themeColors[colorIndex][i],
//         duration: 0.5,
//       });
//     }
//   }
