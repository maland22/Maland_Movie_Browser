
import './App.css'
import type {Movie} from "../common/model.ts";
import MovieCard from "../components/MovieCard.tsx";

function App() {
  const dummyMovie: Movie = {
    id: "1",
    poster_url: "...",
    title: "Film  1",
    release_date: "2020-12-12",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    actors: ["Lusi kelbel", "Ann-Sophie KeckIce", "Marlen sorrow"],
    rating: 8.8,
    description: "A really interesting movie",
    duration: "148 min",
  };
  return (
      <>
        <table>
          <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Actors</th>
            <th>Rating</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <MovieCard
              movie={dummyMovie}
              details={(id) => alert(id)}
              addFavorite={(id) => alert(id)}
          />
          </tbody>
        </table>

      </>
  )
}

export default App
