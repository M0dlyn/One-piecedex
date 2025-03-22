import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About One Piece Dex</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>What is One Piece Dex?</h2>
          <p>
            One Piece Dex is a comprehensive database of Devil Fruits from the
            One Piece universe. It provides detailed information about various
            Devil Fruits, their powers, and their users.
          </p>
        </section>

        <section className="about-section">
          <h2>How it Works</h2>
          <p>
            The application fetches data from the One Piece API to display
            information about Devil Fruits. Each fruit card shows basic
            information initially and expands to reveal more details when
            clicked. The interface is designed to be intuitive and visually
            appealing, making it easy to explore the vast collection of Devil
            Fruits.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Interactive card-based interface</li>
            <li>Detailed Devil Fruit information</li>
            <li>Responsive design</li>
            <li>Easy navigation</li>
            <li>Beautiful animations and transitions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
