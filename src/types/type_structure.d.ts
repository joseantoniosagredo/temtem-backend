export interface Types {
    types:    string[];
    offense: TypeValues;
    defense: TypeValues;
}

export interface TypeValues {
    [key:string]:  number[];
}