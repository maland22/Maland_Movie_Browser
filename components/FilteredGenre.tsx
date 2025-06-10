import React from 'react';
import '../public/navbar.css';
interface FilteredGenderProps {
    genres: string[];
    onGenreChange: (genre: string) => void;
}


const FilteredGenre: React.FC<FilteredGenderProps> = ({ genres, onGenreChange }) => {
    return (
        <div className={"filter-container"}>
        <select onChange={(e) => onGenreChange(e.target.value)}>
            <option value="All">All Genres</option>
            {genres.map((g, i) => (
                <option key={i} value={g}>{g}</option>
            ))}
        </select>
        </div>
    );
};

export default FilteredGenre;