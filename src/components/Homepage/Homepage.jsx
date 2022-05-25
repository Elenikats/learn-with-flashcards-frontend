import "../../App.css";
import Login from "./Login.jsx";
import coverimage from "../../images/coverimage.jpg";
import desk from "../../images/desk.jpg";
import desk2 from "../../images/desk2.jpg";
import "./Homepage.scss";

function Homepage() {
  return (
    <div
      className="Homepage"
      style={{
        backgroundImage: `url(${coverimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-container">
        <div className="info">
          <h1>Flipit</h1>
          <main>
            <h2>Learning and revising made easy and fun!</h2>
            <p>
              Here you can create flashcards, which is a great practice for
              revising difficult concepts.
            </p>
            <p>
              Flashcards optimize your studying, by repeating concepts for
              maximum memory retention.
            </p>
            <h3>Why use flashcards?</h3>
            <ul>
              <li>Easy way to review concepts</li>
              <li>You can use them anywhere.</li>
              <li>Quick reminder before going to class.</li>
            </ul>
          </main>

          <button>Create flashcards</button>
        </div>

        <Login />
      </div>
    </div>
  );
}

export default Homepage;
