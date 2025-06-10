import React from 'react';
import type { Movie } from '../common/model';
import '../public/Detailed.css';

interface MovieDetailProps {
    movie: Movie;
    onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
    if (!movie) return null;

    return (
        <div className="container">
            <h2 className="title">{movie.movie_title}</h2>
            <p><strong className="label-1">Genre:</strong> {movie.movie_genre}</p>
            <p><strong className="label-2">Release date:</strong> {movie.release_date}</p>
            <p><strong className="label-1">Director:</strong> {movie.director}</p>
            <p><strong className="label-2">Duration:</strong> {movie.duration} Minuten</p>
            <p><strong className="label-1">Language:</strong> {movie.language}</p>
            <p><strong className="label-2">Country:</strong> {movie.country}</p>
            <p><strong className="label-1">Rating:</strong> {movie.rating}</p>
            <p><strong className="label-2">Description:</strong> {movie.description}</p>
            <p><strong className="label-1">Budget:</strong> {movie.budget} $</p>
            <p><strong className="label-2">Actors:</strong> {movie.actors.join(', ')}</p>
            <p><strong className="label-1">Recension:</strong></p>
            <ul>
                {movie.reviews.map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>
            <button className="back-button" onClick={onBack}><i className="bi bi-arrow-return-left"></i></button>
        </div>
    );
};

export default MovieDetail;
