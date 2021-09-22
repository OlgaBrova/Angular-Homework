export interface Game {
    id: number | string;
    title: string;
    releaseDate: string;
    rating: number;
    price: number;
    imageUrl: string;
    shortDescription: string;
    genre: string;
    publisher: string;
}