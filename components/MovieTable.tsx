import React from 'react';
import type {Movie} from '../common/model';
import '../public/movieTable.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

interface MovieTableProps {
    movies: Movie[];
    onShowDetails: (movie: Movie) => void;
    onToggleFavorite: (movie: Movie) => void;
    isFavorite: (id: string) => boolean;
}

const MovieTable: React.FC<MovieTableProps> = ({ movies, onShowDetails, onToggleFavorite, isFavorite }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Release</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((movie) => (
                    <tr key={movie.id}>
                        <td>{movie.movie_title}</td>
                        <td>{movie.movie_genre}</td>
                        <td>{movie.release_date}</td>

                        <td>
                            <button className={"DetailedButton DetailedBtnText"}
                                    onClick={() => onShowDetails(movie)}><i className="bi bi-info-circle"></i>
                            </button>
                            <button className={`FavRemBtn ${isFavorite(movie.id) ? 'remove' : 'favorite'}`}
                                    onClick={() => onToggleFavorite(movie)}>
                                {isFavorite(movie.id) ? <i className="bi bi-trash"></i> : 'Favorite'}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default MovieTable;