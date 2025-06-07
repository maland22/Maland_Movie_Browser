export type Movie = {
    id: string;
    poster_url: string;
    title: string;
    release_date: string;
    genre: string;
    director: string;
    actors: string[];
    rating: number;
    description: string;
    duration: string;
    reviews?: string[];
    budget?: string;
    country?: string;
    language?: string;
};
