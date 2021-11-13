import { useState } from "react";
import "./App.css";
import movies from "./ourapi.js";
import Cart from "./Cart";
function App() {
  console.log("chal rha hu");
  return (
    <>
      <h1 className="headingMain">Best Netflix Shows</h1>
      <div className="container">
        {movies.map((movie) => {
          return (
            <Cart
              name={movie.name}
              img={movie.image}
              link={movie.link}
              desc={movie.desc}
              imdb={movie.imdb}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
