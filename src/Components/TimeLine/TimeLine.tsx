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
function TimeLine(): JSX.Element {
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src={peopleIMG} alt="" />
        <People />
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
