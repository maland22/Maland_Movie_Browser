import { useState } from "react";
import type { Movie } from "../common/model";

const useSelectedMovie = () => {
    const [selected, setSelected] = useState<Movie | null>(null);
    const select = (movie: Movie) => setSelected(movie);
    const deselect = () => setSelected(null);
    return { selected, select, deselect };
};

export default useSelectedMovie;