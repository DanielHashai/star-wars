import "./TableOfContents.css";
import filmOne from "../../Assets/a-new-hope.jpeg";
import filmTwo from "../../Assets/empire-strikes-back.jpeg";
import filmThree from "../../Assets/return-of-the-jedi.jpeg";
import filmFour from "../../Assets/the-phantom-menace.jpeg";
import filmFive from "../../Assets/attack-of-the-clones.jpeg";
import FilmService from "../../Services/filmService";
import { AppContext } from "../../Context/appContext";
import { useContext } from "react";
function TableOfContents(): JSX.Element {
  const { currentFilm, setCurrentFilm } = useContext(AppContext);

  return (
    <div className="toc-container">
      <div className="toc-wrapper">
        <button
          onClick={async () => {
            const data = await FilmService.getFilm(1);
            setCurrentFilm(data);
          }}
          className="toc-item"
        >
          <div className="toc-content">A New Hope</div>

          <img className="toc-image" src={filmOne} alt="" />
        </button>
        <button
          onClick={async () => {
            const data = await FilmService.getFilm(2);
            setCurrentFilm(data);
          }}
          className="toc-item"
        >
          <div className="toc-content">The Empire Strikes Back</div>

          <img className="toc-image" src={filmTwo} alt="" />
        </button>
        <button
          onClick={async () => {
            const data = await FilmService.getFilm(3);
            setCurrentFilm(data);
          }}
          className="toc-item"
        >
          <div className="toc-content">Return of the Jedi</div>

          <img className="toc-image" src={filmThree} alt="" />
        </button>
        <button
          onClick={async () => {
            const data = await FilmService.getFilm(4);
            setCurrentFilm(data);
          }}
          className="toc-item"
        >
          <div className="toc-content">The Phantom Menace</div>

          <img className="toc-image" src={filmFour} alt="" />
        </button>
        <button
          onClick={async () => {
            const data = await FilmService.getFilm(5);
            setCurrentFilm(data);
          }}
          className="toc-item"
        >
          <div className="toc-content">Attack of the Clones</div>

          <img className="toc-image" src={filmFive} alt="" />
        </button>
      </div>
    </div>
  );
}

export default TableOfContents;
