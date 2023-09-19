import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";

function Slider(): JSX.Element {
  return (
    <>
      <Carousel
        style={{
          height: "300px",
        }}
        className="text-box"
      >
        <Carousel.Item>
          <h3 style={{ color: "white" }}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Item>
      </Carousel>
      <span className="left-container-arrow"></span>
    </>
  );
}

export default Slider;
