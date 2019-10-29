export interface Films {
    Title: string;
    EpisodeId: number;
    OpeningCrawl: string;
    Director: string;
    Producer: string;
    ReleaseDate: Date;
    Characters: Array<string>;
    Planets: Array<string>;
    Starships?: Array<string>;
    Vehicles?: Array<string>;
    Species: Array<string>;
}