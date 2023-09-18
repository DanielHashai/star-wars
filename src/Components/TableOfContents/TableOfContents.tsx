import "./TableOfContents.css";
import filmOne from "../../Assets/a-new-hope.jpeg";
function TableOfContents(): JSX.Element {
  return (
    <div className="toc-container">
      <div className="toc-wrapper">
        <div className="toc-item">
          <div className="toc-content">A New Hope</div>

          <img className="toc-image" src={filmOne} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;
