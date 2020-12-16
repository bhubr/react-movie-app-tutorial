import MovieCard from "./MovieCard";

function MovieCardList(props) {
  return (
    <div className="MovieCardList">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default MovieCardList
