import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=2198f9ca16c7c38b61929e13298b9f6c&query=star&language=fr-FR"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entrez le tire d'un film" />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <btn-sort id="godToBad">Top</btn-sort>
          <span>➟</span>
          <btn-sort id="badToGod">Flop</btn-sort>
          <span>➟</span>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default Form;
