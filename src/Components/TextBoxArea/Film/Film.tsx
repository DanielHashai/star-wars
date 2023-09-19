import Carousel from "react-bootstrap/Carousel";
function Film(): JSX.Element {
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
          <h3 style={{ color: "white" }}>Film</h3>
          <p style={{ color: "white" }}>Select a movie</p>
        </Carousel.Item>
      </Carousel>
      <span className="right-container-arrow"></span>
    </>
  );
}

export default Film;
