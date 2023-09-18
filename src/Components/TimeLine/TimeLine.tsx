import Film from "../TextBoxArea/Film/Film";
import People from "../TextBoxArea/People/People";
import Planets from "../TextBoxArea/Planets/Planets";
import Species from "../TextBoxArea/Species/Species";
import Starships from "../TextBoxArea/Starships/Starships";
import Vehicles from "../TextBoxArea/Vehicles/Vehicles";
import "./TimeLine.css";
import peopleIMG from "../../Assets/people.jpeg";
import planetIMG from "../../Assets/planet-x.png";
import filmIMG from "../../Assets/film.png";
import speciesIMG from "../../Assets/species.jpeg";
import vehiclesIMG from "../../Assets/vehicles.png";
import starShipIMG from "../../Assets/starship.jpeg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import FilmModel from "../../Models/FilmModel";
import PeopleService from "../../Services/PeopleService";
import { AppContext } from "../../Context/appContext";
import CharacterModel from "../../Models/CharacterModel";
function TimeLine(): JSX.Element {
  // const [films, setFilms] = useState<FilmModel>();
  const { currentFilm, setCurrentFilm } = useContext(AppContext);
  const [people, setPeople] = useState<CharacterModel[]>();
  const [planets, setPlanets] = useState([]);
  const [film, setFilm] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    const characters = currentFilm?.characters;

    if (characters && characters?.length > 0) {
      // Create an array to hold promises
      const promises = [];

      for (let i = 0; i < characters.length; i++) {
        // Push each promise into the promises array

        promises.push(
          PeopleService.getPeople(characters[i])
            .then((res) => {
              // console.log(res);
              return res;
            })
            .catch((err) => {
              console.log(err);
              return null; // Handle errors gracefully
            })
        );
      }
      // console.log(promises);

      // Use Promise.all to wait for all promises to resolve
      Promise.all(promises)
        .then((responses) => {
          // Filter out any null responses (failed requests)
          const validResponses = responses.filter((res) => res !== null);
          console.log(validResponses);

          setPeople(validResponses);
        })
        .catch((err) => console.error(err));
    }
  }, [currentFilm]);

  useEffect(() => {
    console.log("People state has been updated:", people);
  }, [people]);
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src={peopleIMG} alt="" />
        {people?.length > 0 ? (
          people?.map((person, id) => <People key={id} person={person} />)
        ) : (
          <div>{people?.length}</div>
        )}
      </div>
      <div className="container right-container">
        <img src={planetIMG} alt="" />
        <Planets />
      </div>
      <div className="container left-container">
        <img src={filmIMG} alt="" />
        <Film />
      </div>
      <div className="container right-container">
        <img src={speciesIMG} alt="" />
        <Species />
      </div>
      <div className="container left-container">
        <img src={vehiclesIMG} alt="" />
        <Vehicles />
      </div>
      <div className="container right-container">
        <img src={starShipIMG} alt="" />
        <Starships />
      </div>
    </div>
  );
}

export default TimeLine;
