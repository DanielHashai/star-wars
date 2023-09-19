import Carousel from "react-bootstrap/Carousel";
function Vehicles(): JSX.Element {
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
          <h3 style={{ color: "white" }}>Vehicles</h3>
          <p style={{ color: "white" }}>Select a movie</p>
        </Carousel.Item>
      </Carousel>
      <span className="right-container-arrow"></span>
    </>
  );
}

export default Vehicles;
