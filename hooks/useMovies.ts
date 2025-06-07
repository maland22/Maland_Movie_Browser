import { useEffect, useState } from "react";
import type { Movie } from "../common/model";

const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("/movies_data.json")
            .then(res => res.json())
            .then(data => {
                const parsed : Movie[] = data.map((m: Movie) => ({
                    id: m.id,
                    movie_title: m.movie_title,          // map keys here
                    movie_genre: m.movie_genre,
                    release_date: m.release_date,
                    director: m.director,
                    actors: m.actors,
                    rating: m.rating,
                    description: m.description,
                    duration: m.duration,
                    reviews: m.reviews,
                    budget: m.budget,
                    country: m.country,
                    language: m.language,
                }));
                setMovies(parsed);
            })
            .catch(console.error);
    }, []);

    return movies;
};

export default useMovies;