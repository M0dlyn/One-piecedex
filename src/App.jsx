import { useState } from "react";
import "./App.css";
import { fetchDevilFruit } from "./API/Fetch-api";

function App() {
  const [fruits, setFruits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fruitsPerPage = 6;

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

  return (
    <>
      <div>
        <h1>All fruits</h1>
        <div className="main-card">
          <button onClick={() => fetchDevilFruit(setFruits)}>
            Fetch Devil Fruits
          </button>
          <div className="card">
            {currentFruits.map((fruit) => (
              <div key={fruit.name} className="fruit-card">
                <h2>{fruit.name}</h2>
                <p>Type: {fruit.type}</p>
                <p>Power: {fruit.power}</p>
                <p>Description: {fruit.description}</p>
                <img src={fruit.image} alt={fruit.name} />
                <p>
                  Japanese Name: <i>{fruit.jname}</i>
                </p>
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
    </>
  );
}

export default App;
