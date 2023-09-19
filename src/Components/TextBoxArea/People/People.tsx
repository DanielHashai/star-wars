import CharacterModel from "../../../Models/CharacterModel";
import "./People.css";
import Carousel from "react-bootstrap/Carousel";
interface PeopleProps {
  person: CharacterModel;
}

function People(person: PeopleProps): JSX.Element {
  return (
      <Carousel.Item>
        <h3 style={{ color: "white" }}>{person?.person?.name}</h3>
        <p style={{ color: "white" }}>height:{person?.person?.height}</p>
        <p>mass:{person?.person?.mass}</p>
        <p>hair_color:{person?.person?.hair_color}</p>
        <p>skin_color:{person?.person?.skin_color}</p>
        <p>eye_color:{person?.person?.eye_color}</p>
        <p>birth_year:{person?.person?.birth_year}</p>
        <p>gender:{person?.person?.gender}</p>
        <p>gender:{person?.person?.gender}</p>
      </Carousel.Item>
    
  );
}

export default People;
