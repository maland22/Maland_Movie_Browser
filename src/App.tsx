import { useEffect, useState } from 'react';

import type { Movie } from '../common/model';
import Navbar from '../components/Navbar';
import MovieTable from '../components/MovieTable';
import FavoriteList from '../components/FavoriteList';
import MovieDetail from '../components/MovieDetail';
import useFavorites from '../hooks/useFavorites';
import FilteredGenre from '../components/FilteredGenre';
import FilteredYears from '../components/FilteredYears';
import FilteredNames from '../components/FilteredNames';


import '../src/App.css';

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [genre, setGenre] = useState('All');
    const [year, setYear] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite
    } = useFavorites();

    useEffect(() => {
        fetch('movies_data.json')
            .then(res => res.json())
            .then((data: Movie[]) => {
                const parsed = data.map((m) => ({
                    ...m,
                    release_date: m.release_date,
                    addFav: Boolean(m.addFav),
                }));
                setMovies(parsed);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        let result = [...movies];
        if (genre !== 'All') result = result.filter(m => m.movie_genre === genre);
        if (year !== 'All') result = result.filter(m => m.release_date.startsWith(year));
        if (searchTerm.trim() !== '') result = result.filter(m => m.movie_title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredMovies(result);
    }, [movies, genre, year, searchTerm]);

    const genres = Array.from(new Set(movies.map(m => m.movie_genre)));
    const years = Array.from(new Set(movies.map(m => m.release_date.substring(0, 4))));

    if (selectedMovie) {
        return <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
    }

    return (
        <div>
            <Navbar
                onToggleFavorites={() => setShowFavorites(true)}
                onBackToMain={() => setShowFavorites(false)}
                showFavorites={showFavorites}
            />

            {!showFavorites && (
                <>
                    <FilteredGenre genres={genres} onGenreChange={setGenre} />
                    <FilteredYears years={years} onYearChange={setYear} />
                    <FilteredNames onSearch={setSearchTerm} />

                    <MovieTable
                        movies={filteredMovies}
                        onShowDetails={setSelectedMovie}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                    />
                </>
            )}

            {showFavorites && (
                <FavoriteList
                    favorites={favorites}
                    onShowDetails={setSelectedMovie}
                    onRemoveFavorite={removeFavorite}
                />
            )}
        </div>
    );
}

export default App;
