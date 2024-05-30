// Import
import { Palette } from '@/types/PalettesTypes';
import { defaultPalettes } from '../data/defaultPalettes';
import { isJsonString } from './utils';

// Debug
const debugMode: boolean = false;

// // Keys setup
// const lastPaletteIDKey = 'lastPaletteID';

// // Initialization function
// export function initPaletteIDHistory(palette = defaultPalettes) {
//   if (localStorage.getItem(lastPaletteIDKey)) {
//     debugMode &&
//       console.log(
//         `localStorage: lastPaletteID is defined as ${localStorage.getItem(
//             lastPaletteIDKey
//         )}`
//       );
//   } else {
//     if (!localStorage.getItem(lastPaletteIDKey)) {
//       localStorage.setItem(lastPaletteIDKey, String(palette[0].id));
//       debugMode &&
//         console.log(
//           `localStorage: undefined lastPaletteID and was automatically set to ${String(palette[0].id)}`
//         );
//     }
//     if (Number(localStorage.getItem(lastPaletteIDKey)) >= palette.length) {
//       localStorage.setItem(lastPaletteIDKey, String(palette[0].id));
//       debugMode &&
//         console.log(
//           `localStorage: lastPaletteID did not match any available Palettes and was automatically set to ${palette[0].id}`
//         );
//     }
//   }
// }

// export function getLastPalette() {
//     initPaletteIDHistory();
//     return localStorage.getItem(lastPaletteIDKey);
// }

// export function setLastPalette(paletteID: number) {
//     initPaletteIDHistory();
//     debugMode && console.log(`localStorage: lastToolKey was set to ${paletteID}`);
//     localStorage.setItem(lastPaletteIDKey, String(paletteID));
// }

// Keys setup
const paletteHistoryKey = 'paletteHistory';

export function initPaletteHistory(palette = defaultPalettes) {
    if (localStorage.getItem(paletteHistoryKey)) {
        if (!isJsonString(localStorage.getItem(paletteHistoryKey) || "")) {
            localStorage.setItem(paletteHistoryKey, JSON.stringify(palette));
            debugMode &&
              console.log(
                `localStorage: paletteHistory was not the right type and was automatically set to ${JSON.stringify(palette)}`
              );
        }
        debugMode &&
          console.log(
            `localStorage: paletteHistory is defined as ${localStorage.getItem(
                paletteHistoryKey
            )}`
          );
    } else {
        if (!localStorage.getItem(paletteHistoryKey)) {
          localStorage.setItem(paletteHistoryKey, JSON.stringify(palette));
          debugMode &&
            console.log(
              `localStorage: undefined paletteHistory and was automatically set to ${JSON.stringify(palette)}`
            );
        }
      }
}

export function getPaletteHistory() {
    initPaletteHistory();
    return JSON.parse(localStorage.getItem(paletteHistoryKey) || "");
}

export function setPaletteHistory(palette: Palette[]) {
    initPaletteHistory();
    localStorage.setItem(paletteHistoryKey, JSON.stringify(palette))
}