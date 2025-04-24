import createDevilFruit from "../Entity/Devil-fruit";

function fetchDevilFruit(setFruits) {
  fetch("https://api.api-onepiece.com/v2/fruits/en")
    .then((response) => response.json())
    .then((data) => {
      const fruits = data.map(fruit =>
        createDevilFruit(
          fruit.name,
          fruit.type,
          fruit.power,
          fruit.description,
          fruit.filename, // img api url
          fruit.roman_name // Japanese name 
        )
      );
      setFruits(fruits);
    })
    .catch((error) => console.error("Error fetching devil fruits:", error));
}

export { fetchDevilFruit };
