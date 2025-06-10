import React from 'react';
import type {Movie} from '../common/model';

interface MovieCardProps {
    movie: Movie;
    onShowDetails: (movie: Movie) => void;
    onToggleFavorite: (movie: Movie) => void;
    isFavorite: (id: string) => boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onShowDetails, onToggleFavorite, isFavorite }) => {
    return (
        <div>
            <h3>{movie.movie_title} ({movie.release_date})</h3>
            <p>{movie.movie_genre}</p>
            <p>{movie.director}</p>
            <p>{movie.rating}</p>
            <div>
                <button onClick={() => onShowDetails(movie)}>Details</button>
                <button onClick={() => onToggleFavorite(movie)}>
                    {isFavorite(movie.id) ? 'Remove' : 'Favourite'}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
