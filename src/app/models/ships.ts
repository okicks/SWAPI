export interface Ships {
    Name: string;
    Model: string;
    Manufacturer: string;
    Cost: number;
    Length: number;
    MaxSpeed: number;
    Crew: number;
    Passengers: number;
    CargoCapacity: number;
    ConsumablesMonth: number;
    HyperdriveRating: number;
    MGLT: number;
    StarshipClass: string;
    Pilots?: Array<string>;
    Films: Array<string>;
    CreatedUtc: Date;
    EditedUtc: Date;
    Url: string;
}