import { generateSwatches } from "@/lib/paletteUtils";
import { Palette } from "@/types/PalettesTypes";
import { converter  } from "culori";

const rgb = converter("rgb");

export const defaultPalettes: Palette[] = [
    {
        id: 0,
        name: "Random palette name",
        editing: true,
        deleted: false,
        swatches: [
            {
                id: 0,
                name: "Test swatch name",
                selected: false,
                deleted: false,
                color: {
                    mode: "rgb",
                    r: 0.5,
                    g: 0.5,
                    b: 0.5
                }
            },
            {
                id: 1,
                name: "Test swatch name",
                selected: false,
                deleted: false,
                color: rgb("#F40009")
            }
        ]
    },
    {
        id: 1,
        name: "Coca-Cola",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["#F40009", "#E98300", "#1E1E1E", "#A7A9AC"])
    },
    {
        id: 2,
        name: "Coolors",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["b5ffe1","93e5ab","65b891","4e878c","00241b"])
    }
]
