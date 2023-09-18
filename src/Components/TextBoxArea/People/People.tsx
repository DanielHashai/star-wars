import CharacterModel from "../../../Models/CharacterModel";
import "./People.css";

interface PeopleProps {
  person: CharacterModel;
}

function People(person: PeopleProps): JSX.Element {
  return (
    <div className="text-box">
      <h2>{person?.person?.name}</h2>
      <p>height:{person?.person?.height}</p>
      <p>mass:{person?.person?.mass}</p>
      <p>hair_color:{person?.person?.hair_color}</p>
      <p>skin_color:{person?.person?.skin_color}</p>
      <p>eye_color:{person?.person?.eye_color}</p>
      <p>birth_year:{person?.person?.birth_year}</p>
      <p>gender:{person?.person?.gender}</p>
      <p>homeworld:{person?.person?.homeworld}</p>

      <span className="left-container-arrow"></span>
    </div>
  );
}

export default People;
