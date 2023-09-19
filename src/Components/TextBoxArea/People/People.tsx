import CharacterModel from "../../../Models/CharacterModel";
import "./People.css";
import Carousel from "react-bootstrap/Carousel";

function People(): JSX.Element {
  return (
    <>
      <Carousel
        style={{
          height: "300px",
        }}
        className="text-box"
      >
        <Carousel.Item
          style={{
            display: "grid",
            justifyContent: "center",
            placeItems: "center",
          }}
        >
          <h3 style={{ color: "white" }}>Characters</h3>
          <p style={{ color: "white" }}>Select a movie</p>
        </Carousel.Item>
      </Carousel>
      <span className="left-container-arrow"></span>
    </>
  );
}

export default People;
