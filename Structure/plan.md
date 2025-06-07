# STRUCTURE OF MOVIE BROWSER#

- common/
  - model.ts
- components/
  - MovieCard.tsx    |Einzelne "Filmkarte"
  - MovieTable.tsx    |Grid mit 5 Filmkarten pro Reihe
  - MovieDetail.tsx	 |Zeigt Details von einer "Filkarte"
  - FavoriteList.tsx |Liste mit gespeicherten Filmen
  - Navbar.tsx       |Suchfeld, Filter ganz oben
- hooks/
  - useMovies.ts	
  - useDetailMovies.ts	
  - useFavorites.ts	
  - useSelectedMovie.ts
