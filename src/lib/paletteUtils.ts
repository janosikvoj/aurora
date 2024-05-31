import { Swatch } from "@/types/PalettesTypes";
import { Color, colorsNamed, converter, differenceEuclidean, nearest, random, wcagLuminance } from 'culori';

const rgb = converter('rgb');

export function generateSwatch(colorHex: string, id: number): Swatch {
    return {
        id: id,
        name: getColorName(rgb(colorHex)),
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

const nearestNamedColor =  nearest(Object.keys(colorsNamed), differenceEuclidean());

export function getColorName(color: Color | undefined): string {
    if (color) {
        return nearestNamedColor(color)[0];
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