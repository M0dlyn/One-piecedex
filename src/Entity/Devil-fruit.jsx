/**
 * Creates a standardized devil fruit object from API data
 */
const createDevilFruit = (name, type, power, desc, image, jname) => {
  return {
    name,
    type,
    power,
    description: desc,
    image,
    jname
  };
};

export default createDevilFruit;
