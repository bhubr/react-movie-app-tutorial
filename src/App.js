import "./App.css";
import Header from "./components/Header";
import MovieCardList from "./components/MovieCardList";

const moviesArr = [
  {
    id: 1,
    title: "Inception",
    poster: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq",
    description: "Un film de S-F",
  },
  {
    id: 2,
    title: "Avatar",
    poster: "https://i.pinimg.com/originals/1b/fc/63/1bfc633cd889e545f521ea14da1b8df9.jpg",
    description: "Un film avec des aliens bleus",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    description: "Un autre film de S-F"
  }
];

function App() {
  return <div className="App container">
    <Header title="Ma bibliothèque de films" />
    <MovieCardList movies={moviesArr} />
  </div>;
}

export default App;
