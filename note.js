/* import shipTypes from '../game_helpers/shipTypes'

class Ship {
  constructor (name, position) {
    this.name = name
    this.position = position
    this.hits = []
  }

  hit (index) {
    this.hits.push(index)
  }

  isSunk () {
    return this.position.every((occupiedCell) =>
      this.hits.includes(occupiedCell)
    )
  }

  getComponentWithProps (props) {
    return shipTypes
      .find((ship) => ship.name === this.name)
      .getComponentWithProps(props)
  }
}

export default Ship



hit() {
        this.hits++;
        if (this.hits >= this.length) {
            this.sunk = true;
            console.log(${this.name} has been sunk!);
        } else {
            console.log(The ${this.name} has been hit!);
        }
    }
}
*/

// notes
hit() {
  this.hits++;
  if (this.hits >= this.length) {
      this.sunk = true;
      console.log(${this.name} has been sunk!);
  } else {
      console.log(The ${this.name} has been hit!);
  }
}

/* function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
*/
