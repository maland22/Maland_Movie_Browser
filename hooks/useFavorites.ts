import { useState } from 'react';
import type {Movie} from '../common/model';

function useFavorites() {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie) => {
        if (!favorites.find(m => m.id === movie.id)) {
            setFavorites(prev => [...prev, movie]);
        }
    };

    const removeFavorite = (id: string) => {
        setFavorites(prev => prev.filter(m => m.id !== id));
    };

    const toggleFavorite = (movie: Movie) => {
        if (favorites.find(m => m.id === movie.id)) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    const isFavorite = (id: string): boolean => {
        return favorites.some(m => m.id === id);
    };

    return {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
    };
}

export default useFavorites;
