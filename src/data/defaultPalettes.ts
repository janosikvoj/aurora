import { generateSwatches } from "../lib/paletteUtils";
import { Palette } from "../types/PalettesTypes";

export const defaultPalettes: Palette[] = [
    {
        id: 0,
        name: "Coca-Cola",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["#F40009", "#E98300", "#1E1E1E", "#A7A9AC"])
    },
    {
        id: 1,
        name: "Bilumi",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["A58666","A79985","DAD2C5","EDEAE2","F5F6F1"])
    },
    {
        id: 2,
        name: "Ethernal",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["F0592C","CC4866","C43388","A73C9D","7955DC","5BD478","161624"])
    },
    {
        id: 3,
        name: "SK rap",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["000000","FFFFFF","6EC648","B540A2","363435","E4E4E4","F4F4F4"])
    },
    {
        id: 4,
        name: "BeStrong.",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["0E0F11","FFFFFF","FF5386","7A7B7D","FFB1C8","F7F7F7"])
    },
    {
        id: 5,
        name: "Za sedmero horami",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["1A5C3C","8FB599","D9D9D9","080808"])
    },
    {
        id: 6,
        name: "Dream of light",
        editing: false,
        deleted: false,
        swatches: generateSwatches(["051E34","0C2A42","31CCBE","9B635C","5DC5D1"])
    }
]
