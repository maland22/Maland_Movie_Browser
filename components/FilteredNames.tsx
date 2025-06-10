import React from 'react';
import '../public/navbar.css';
interface FilteredNamesProps {
    onSearch: (term: string) => void;
}

const FilteredNames: React.FC<FilteredNamesProps> = ({ onSearch }) => {
    return (
        <div className={"header-container"}>
        <input
            type="text"
            placeholder="Search by title"
            onChange={(e) => onSearch(e.target.value)}
        />
        </div>
    );
};
export default FilteredNames;