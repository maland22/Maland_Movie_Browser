# STRUCTURE OF MOVIE BROWSER#

- common/
  - model.ts
- components/
  - MovieCard.tsx    |Einzelne "Filmkarte"
  - MovieTable.tsx    |Table 
  - MovieDetail.tsx	 |Zeigt Details von einer "Filkarte"
  - FavoriteList.tsx |Liste mit gespeicherten Filmen
  - Navbar.tsx |Suchfeld, Filter ganz oben
  - FilteredGender.tsx
  - FilteredNames.tsx
  - FilteredYears.tsx
- hooks/
  - useMovies.ts
  - useFavorites.ts	
  - useSelectedMovie.ts
  - useFilterByGenre.ts
  - useFilterByName.ts
  - useFilterByYear.ts
