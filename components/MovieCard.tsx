import React from 'react';
import type {Movie} from "../common/model";


interface MovieRowProps {
    movie: Movie;
    details: (id: string) => void;
    addFavorite: (id: string) => void;
}


const MovieCard: React.FC<MovieRowProps> = ({ movie, details, addFavorite }) => {
    return (
        <tr>
            <td><img src={movie.poster_url}  /></td>
            <td>{movie.title}</td>
            <td>{movie.release_date}</td>
            <td>{movie.genre}</td>
            <td>{movie.director}</td>
            <td>{movie.actors.join(", ")}</td>
            <td>{movie.rating}</td>
            <td>{movie.duration}</td>
            <td>
                <button onClick={() => addFavorite(movie.id)}>Fav</button>
                <button onClick={() => details(movie.id)}>Details</button>
            </td>
        </tr>
    );
};

export default MovieCard;