import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";

export default function FavoriteList() {
  const { favorites } = useMovies();

  if (favorites.length === 0) return null;

  return (
    <div className="mb-9">
      <h2 className="text-xl font-semibold mb-2 text-yellow-600">★Favoritas★</h2>
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}