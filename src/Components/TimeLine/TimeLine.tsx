import Film from "../TextBoxArea/Film/Film";
import People from "../TextBoxArea/People/People";
import Planets from "../TextBoxArea/Planets/Planets";
import Species from "../TextBoxArea/Species/Species";
import Starships from "../TextBoxArea/Starships/Starships";
import Vehicles from "../TextBoxArea/Vehicles/Vehicles";
import "./TimeLine.css";
import Carousel from "react-bootstrap/Carousel";
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
import PlanetService from "../../Services/PlanetService";
import StarShipsService from "../../Services/StarShipService";
import VehiclesService from "../../Services/VehicleService";
import { AppContext } from "../../Context/appContext";
import CharacterModel from "../../Models/CharacterModel";
import Slider from "../Slider/Slider";
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
    const planetsURLs = currentFilm?.planets;
    const startShipsURLs = currentFilm?.starships;
    const vehicleURLs = currentFilm?.vehicles;
    // this down here is for people
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
    // this down here is for planets
    if (planetsURLs && planetsURLs?.length > 0) {
      // Create an array to hold promises
      const promises = [];

      for (let i = 0; i < planetsURLs.length; i++) {
        // Push each promise into the promises array

        promises.push(
          PlanetService.getPlanets(planetsURLs[i])
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

          setPlanets(validResponses);
        })
        .catch((err) => console.error(err));
    }
    // this down here is for star ships
    if (startShipsURLs && startShipsURLs?.length > 0) {
      // Create an array to hold promises
      const promises = [];

      for (let i = 0; i < startShipsURLs.length; i++) {
        // Push each promise into the promises array

        promises.push(
          StarShipsService.getStarShips(startShipsURLs[i])
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

          setStarShips(validResponses);
        })
        .catch((err) => console.error(err));
    }
    if (vehicleURLs && vehicleURLs?.length > 0) {
      // Create an array to hold promises
      const promises = [];

      for (let i = 0; i < vehicleURLs.length; i++) {
        // Push each promise into the promises array

        promises.push(
          StarShipsService.getStarShips(vehicleURLs[i])
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

          setVehicles(validResponses);
        })
        .catch((err) => console.error(err));
    }
  }, [currentFilm]);

  useEffect(() => {
    console.log("People state has been updated:", people);
    console.log("People state has been updated:", planets);
  }, [people]);
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src={peopleIMG} alt="" />
        <div className="underImg">
          Characters
          <br />
          Total:{people?.length}
        </div>

        {people?.length > 0 ? (
          <>
            <Carousel
              style={{
                height: "400px",
              }}
              className="text-box"
            >
              {people?.map((person, id) => (
                <Carousel.Item key={id}>
                  <h3 style={{ color: "white" }}>{person?.name}</h3>
                  <p style={{ color: "white" }}>height:{person?.height}</p>
                  <p style={{ color: "white" }}>mass:{person?.mass}</p>
                  <p style={{ color: "white" }}>
                    hair_color:{person?.hair_color}
                  </p>
                  <p style={{ color: "white" }}>
                    skin_color:{person?.skin_color}
                  </p>
                  <p style={{ color: "white" }}>
                    eye_color:{person?.eye_color}
                  </p>
                  <p style={{ color: "white" }}>
                    birth_year:{person?.birth_year}
                  </p>
                  <p style={{ color: "white" }}>gender:{person?.gender}</p>
                  {/* <p style={{ color: "white" }}>gender:{person?.gender}</p> */}
                </Carousel.Item>
              ))}
            </Carousel>
            <span className="left-container-arrow"></span>
          </>
        ) : (
          <Slider />
        )}
      </div>
      <div className="container right-container">
        <img src={planetIMG} alt="" />
        <div className="underImg">
          Planets
          <br />
          Total:{planets?.length}
        </div>
        {planets?.length > 0 ? (
          <>
            <Carousel
              style={{
                height: "400px",
              }}
              className="text-box"
            >
              {planets?.map((planet, id) => (
                <Carousel.Item key={id}>
                  <h3 style={{ color: "white" }}>{planet?.name}</h3>
                  <p style={{ color: "white" }}>
                    rotation_period:{planet?.rotation_period}
                  </p>
                  <p style={{ color: "white" }}>
                    orbital_period:{planet?.orbital_period}
                  </p>
                  <p style={{ color: "white" }}>diameter:{planet?.diameter}</p>
                  <p style={{ color: "white" }}>climate:{planet?.climate}</p>
                  <p style={{ color: "white" }}>gravity:{planet?.gravity}</p>
                  <p style={{ color: "white" }}>terrain:{planet?.terrain}</p>
                  <p style={{ color: "white" }}>
                    surface_water:{planet?.surface_water}
                  </p>
                  <p style={{ color: "white" }}>
                    population:{planet?.population}
                  </p>
                </Carousel.Item>
              ))}
            </Carousel>
            <span className="right-container-arrow"></span>
          </>
        ) : (
          <Slider />
        )}
      </div>
      <div className="container left-container">
        <img src={filmIMG} alt="" />
        <div className="underImg">
          StarShips
          <br />
          Total:{starShips?.length}
        </div>

        {starShips?.length > 0 ? (
          <>
            <Carousel
              style={{
                height: "580px",
              }}
              className="text-box"
            >
              {starShips?.map((starship, id) => (
                <Carousel.Item key={id}>
                  <h3 style={{ color: "white" }}>{starship?.name}</h3>
                  <p style={{ color: "white" }}>model:{starship?.model}</p>
                  <p style={{ color: "white" }}>
                    manufacturer:{starship?.manufacturer}
                  </p>
                  <p style={{ color: "white" }}>
                    cost_in_credits:{starship?.cost_in_credits}
                  </p>
                  <p style={{ color: "white" }}>length:{starship?.length}</p>
                  <p style={{ color: "white" }}>
                    max_atmosphering_speed:{starship?.max_atmosphering_speed}
                  </p>
                  <p style={{ color: "white" }}>crew:{starship?.crew}</p>
                  <p style={{ color: "white" }}>
                    passengers:{starship?.passengers}
                  </p>
                  <p style={{ color: "white" }}>
                    cargo_capacity:{starship?.cargo_capacity}
                  </p>
                  <p style={{ color: "white" }}>
                    consumables:{starship?.consumables}
                  </p>
                  <p style={{ color: "white" }}>
                    hyperdrive_rating:{starship?.hyperdrive_rating}
                  </p>
                  <p style={{ color: "white" }}>MGLT:{starship?.MGLT}</p>
                  <p style={{ color: "white" }}>
                    starship_class:{starship?.starship_class}
                  </p>
                </Carousel.Item>
              ))}
            </Carousel>
            <span className="left-container-arrow"></span>
          </>
        ) : (
          <Slider />
        )}
        {/* <Film /> */}
      </div>
      <div className="container right-container">
        <img src={speciesIMG} alt="" />
        <div className="underImg">
          Vehicles
          <br />
          Total:{vehicles?.length}
        </div>
        {vehicles?.length > 0 ? (
          <>
            <Carousel
              style={{
                height: "580px",
              }}
              className="text-box"
            >
              {vehicles?.map((vehicle, id) => (
                <Carousel.Item key={id}>
                  <h3 style={{ color: "white" }}>{vehicle?.name}</h3>
                  <p style={{ color: "white" }}>model:{vehicle?.model}</p>
                  <p style={{ color: "white" }}>
                    manufacturer:{vehicle?.manufacturer}
                  </p>
                  <p style={{ color: "white" }}>
                    cost_in_credits:{vehicle?.cost_in_credits}
                  </p>
                  <p style={{ color: "white" }}>length:{vehicle?.length}</p>
                  <p style={{ color: "white" }}>
                    max_atmosphering_speed:{vehicle?.max_atmosphering_speed}
                  </p>
                  <p style={{ color: "white" }}>crew:{vehicle?.crew}</p>
                  <p style={{ color: "white" }}>
                    passengers:{vehicle?.passengers}
                  </p>
                  <p style={{ color: "white" }}>
                    cargo_capacity:{vehicle?.cargo_capacity}
                  </p>
                  <p style={{ color: "white" }}>
                    consumables:{vehicle?.consumables}
                  </p>
                  <p style={{ color: "white" }}>
                    vehicle_class:{vehicle?.vehicle_class}
                  </p>
                </Carousel.Item>
              ))}
            </Carousel>
            <span className="right-container-arrow"></span>
          </>
        ) : (
          <Slider />
        )}
      </div>
      <div className="container left-container">
        <img src={vehiclesIMG} alt="" />
        {/* <Vehicles /> */}
        <Slider />
      </div>
      <div className="container right-container">
        <img src={starShipIMG} alt="" />
        {/* <Starships /> */}
        <Slider />
      </div>
    </div>
  );
}

export default TimeLine;
