import { Swatch } from "@/types/PalettesTypes";
import { Color, colorsNamed, converter, differenceEuclidean, nearest, random, wcagLuminance } from 'culori';

const rgb = converter('rgb');

export function generateSwatch(colorHex: string, id: number): Swatch {
    return {
        id: id,
        generatedName: getRadixColorName(rgb(colorHex)),
        selected: false,
        deleted: false,
        color: rgb(colorHex)
    }
}

export function generateSwatches(colorHexArr: string[], id: number = 0): Swatch[] {
    return colorHexArr.map((colorHex, index) => {
        return generateSwatch(colorHex, id + index);
    })
}

const nearestRadixNamedColor = nearest(Object.keys(colorsNamed), differenceEuclidean());

export function getRadixColorName(color: Color | undefined): string {
    if (color) {
        return nearestRadixNamedColor(color)[0].charAt(0).toUpperCase() + nearestRadixNamedColor(color)[0].slice(1);
    } else {
        return "undefined"
    }
}

export function isLight(color: Color | undefined): boolean {
    if (color && wcagLuminance(color) > 0.5) {
        return true;
    } else {
        return false;
    }
}


export function generateRandomColors(count: number = 5) {
    const colorArr: Color[] = [];
    for (let i = 0; i < count; i++) {
      colorArr.push(random('rgb'));
    }
    return colorArr;
  }

// const nearestNamedColor = nearest(colorNameList.map(color => {return color.name}), differenceEuclidean(), name => colorNameList.find(color => color.name === name)?.hex || colorNameList[0].hex);

// export function getGeneratedColorName(color: Color | undefined): string {
//     if (color) {
//         return nearestNamedColor(color)[0];
//     } else {
//         return "undefined"
//     }
// }