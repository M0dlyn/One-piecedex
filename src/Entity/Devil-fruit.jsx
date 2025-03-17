class DevilFruit {
  constructor(name, type, power, desc, image, jname) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.description = desc;
    this.image = image;
    this.jname = jname;
  }

  get getFruit() {
    return {
      name: this.name,
      type: this.type,
      power: this.power,
      description: this.description,
      image: this.image,
      jname: this.jname,
    };
  }
}

export default DevilFruit;
