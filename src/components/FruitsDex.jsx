import { useState, useEffect } from "react";
import { fetchDevilFruit } from "../API/Fetch-api";
import "../styles/FruitsDex.css";

function FruitsDex() {
  const [fruits, setFruits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState({});
  const fruitsPerPage = 6;

  useEffect(() => {
    fetchDevilFruit(setFruits);
  }, []);

  const indexOfLastFruit = currentPage * fruitsPerPage;
  const indexOfFirstFruit = indexOfLastFruit - fruitsPerPage;
  const currentFruits = fruits.slice(indexOfFirstFruit, indexOfLastFruit);

  const handleNextPage = () => {
    if (indexOfLastFruit < fruits.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleCard = (fruitName) => {
    setExpandedCards((prev) => ({
      ...prev,
      [fruitName]: !prev[fruitName],
    }));
  };

  return (
    <div className="fruits-dex">
      <h1>Devil Fruits Collection</h1>
      <div className="main-card">
        <div className="fruits-grid">
          {currentFruits.map((fruit) => (
            <div
              key={fruit.name}
              className={`fruit-card ${
                expandedCards[fruit.name] ? "expanded" : ""
              }`}
              onClick={() => toggleCard(fruit.name)}
            >
              <div className="card-basic-info">
                <h2>{fruit.name}</h2>
                <p>Type: {fruit.type}</p>
                <img src={fruit.image} alt={fruit.name} />
              </div>
              {expandedCards[fruit.name] && (
                <div className="card-details">
                  <p>Power: {fruit.power}</p>
                  <p>Description: {fruit.description}</p>
                  <p>
                    Japanese Name: <i>{fruit.jname}</i>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastFruit >= fruits.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FruitsDex;
