import React from 'react';
import '../public/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavbarProps {
    onToggleFavorites: () => void;
    onBackToMain: () => void;
    showFavorites: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleFavorites, onBackToMain, showFavorites }) => {
    return (
        <div className={"header-container"}>
        <nav>
            <h1>Movie Browser</h1>
            {!showFavorites && (
                <button className={"ShowFavBtn"} onClick={onToggleFavorites}>Show favourites</button>
            )}
            {showFavorites && (
                <button className={"ShowFavBtn"} onClick={onBackToMain}>
                    <i className="bi bi-arrow-return-left"></i>
                     Back to main page</button>
            )}
        </nav>
        </div>
    );
};

export default Navbar;