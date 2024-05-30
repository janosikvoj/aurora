import { Color } from "culori";

export type Swatch = {
    id: number;
    name: string;
    customName?: string;
    color: Color | undefined;
    selected: boolean;
    deleted: boolean;
};

export type Palette = {
    id: number;
    name: string;
    customName?: string;
    swatches: Swatch[];
    editing: boolean;
    deleted: boolean;
};