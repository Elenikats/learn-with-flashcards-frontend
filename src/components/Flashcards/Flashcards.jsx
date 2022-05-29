import desk from "../../images/desk.jpg";
import "./Flashcards.scss";

function Flashcards() {
  return (
    <div className="Flashcards" style={{ backgroundImage: `url(${desk})` }}>
      <h1>Category Name</h1>
    </div>
  );
}

export default Flashcards;
