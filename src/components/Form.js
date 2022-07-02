import React from "react";

const Form = () => {
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
    </div>
  );
};

export default Form;
