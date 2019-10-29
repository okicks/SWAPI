export interface People {
    Name: string;
    Height?: number;
    Mass?: number;
    HairColor: string;
    SkinColor: string;
    EyeColor: string;
    BirthYear?: string;
    Gender?: string;
    Homeworld?: string;
    Films: Array<string>;
    Species: string;
    Vehicles?: Array<string>;
    Starships?: Array<string>;
    CreatedUtc: Date;
    EditedUtc: Date;
    Url: string;
}