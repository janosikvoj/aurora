export type ModeRGB = {
    mode: "rgb";
    r: number;
    g: number;
    b: number;
}

export type Color = ModeRGB;

export type Swatch = {
    id: number;
    name: string;
    customName?: string;
    color: Color;
};

export type Palette = {
    id: number;
    name: string;
    customName?: string;
    swatches: Swatch[];
};