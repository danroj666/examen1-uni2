import { MovieProvider } from "./context/MovieContext";
import MovieForm from "./components/MovieForm";
import MovieFilters from "./components/MovieFilters";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";

export default function App() {
  return (
    <MovieProvider>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Peliculas Chiditas</h1>
        <MovieForm />
        <MovieFilters />
        <FavoriteList />
        <MovieList />
      </div>
    </MovieProvider>
  );
}