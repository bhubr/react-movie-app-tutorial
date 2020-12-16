import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

function App() {
  return <div className="App container">
    <Header title="Ma bibliothèque de films" />
    <MovieCard
      title="Inception"
      poster="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq"
      description="Un film de S-F"
    />
    <MovieCard
      title="Avatar"
      poster="https://i.pinimg.com/originals/1b/fc/63/1bfc633cd889e545f521ea14da1b8df9.jpg"
      description="Un film avec des aliens bleus"
    />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
  </div>;
}

export default App;
