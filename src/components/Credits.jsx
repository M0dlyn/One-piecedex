import "../styles/Credits.css";

function Credits() {
  return (
    <div className="credits-container">
      <h1>Credits</h1>
      <div className="credits-content">
        <div className="credit-card">
          <div className="credit-icon">👨‍💻</div>
          <h2>xvvcs</h2>
          <p>Developer</p>
        </div>

        <div className="credit-card">
          <div className="credit-icon">👨‍💻</div>
          <h2>M0dlyn</h2>
          <p>Developer</p>
        </div>

        <div className="credit-card">
          <div className="credit-icon">🌐</div>
          <h2>One Piece API</h2>
          <p>https://www.freepublicapis.com/one-piece-api</p>
        </div>
      </div>

      <div className="celebration">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>
    </div>
  );
}

export default Credits;
