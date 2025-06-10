import React from 'react';
import type {Movie} from '../common/model';
import '../public/favouriteList.css'


interface FavoriteListProps {
    favorites: Movie[];
    onShowDetails: (movie: Movie) => void;
    onRemoveFavorite: (id: string) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites, onShowDetails, onRemoveFavorite }) => {
    if (favorites.length === 0) {
        return <p>No favourite Movies.</p>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Release-Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {favorites.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.movie_title}</td>
                    <td>{movie.movie_genre}</td>
                    <td>{movie.release_date}</td>
                    <td>
                        <button className="DetailedButton"
                                onClick={() => onShowDetails(movie)}>
                            <i className="bi bi-info-circle"></i>
                        </button>
                        <button className="RemBtn"
                                onClick={() => onRemoveFavorite(movie.id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default FavoriteList;