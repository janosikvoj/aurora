import * as RadixColors from '@radix-ui/colors';
import gsap from 'gsap';

const documentRoot = document.querySelector<HTMLElement>(':root');
const themeColors: string[][] = [];

Object.entries(RadixColors).forEach(([key, value]) => {
  if (!key.includes('P3') && !key.includes('A') && !key.includes('Dark')) {
    const colors: string[] = [key];
    Object.entries(value).forEach(([, value]) => {
      colors.push(value);
    });
    themeColors.push(colors);
  }
});

export function changeTheme(colorIndex: number = 8) {
  if (documentRoot) {
    for (let i = 1; i <= 12; i++) {
      gsap.to(documentRoot, {
        ['--theme-' + i]: themeColors[colorIndex][i],
        duration: 2.5,
      });
    }
  }
}
