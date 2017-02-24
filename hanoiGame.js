const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class HanoiGame {
  constructor () {
    this.stacks = [[3,2,1], [], []];
  }

  promptMove(callback) {
    console.log(this.stacks);
    reader.question("Enter a start tower: ", function (startTowerIdx) {
      reader.question("Enter a end tower: ", function (endTowerIdx) {
        // callback(startTowerIdx, endTowerIdx);
        console.log(startTowerIdx);
        console.log(endTowerIdx);
        reader.close();
      });
    });
  }

  isValidMove(start, end) {
    let start_move = this.stacks[start][this.stacks[start].length - 1];
    let end_move = this.stacks[end][this.stacks[end].length-1];


    if (typeof end_move === 'undefined') {
      return true;
    }
    if(start_move < end_move) {
      return true;
    }
    else {
      return false;
    }
  }
}

let h = new HanoiGame;
h.isValidMove(0, 1);
reader.close();
