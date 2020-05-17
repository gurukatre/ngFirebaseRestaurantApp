export interface Restaurant {
    id?: string;
    name?: string;
    description?: string;
    logo?: string;
    location? : {
        lat: number;
        long: number;
    };
}

export interface Center {
    lat: number;
    lng: number;
}