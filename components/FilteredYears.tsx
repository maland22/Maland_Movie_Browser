import React from 'react';
import '../public/navbar.css';

interface FilteredYearsProps {
    years: string[];
    onYearChange: (year: string) => void;
}

const FilteredYears: React.FC<FilteredYearsProps> = ({ years, onYearChange }) => {
    return (
        <div className={"filter-container"}>
        <select onChange={(e) => onYearChange(e.target.value)}>
            <option value="All">All Years</option>
            {years.map((y, i) => (
                <option key={i} value={y}>{y}</option>
            ))}
        </select>
        </div>
    );
};

export default FilteredYears;