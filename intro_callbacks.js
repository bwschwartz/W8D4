class Clock {
  constructor(){
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    // let that = this;
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  }

  _tick() {
    if (this.seconds === 59) {
      if (this.minutes === 59) {
        this.hours += 1;
        this.seconds = 0;
        this.minutes = 0;
      } else {
        this.minutes++;
        this.seconds = 0;
      }
    } else {
      this.seconds++;
    }
    this.printTime();

  }
}

// const clock = new Clock();

const readline = require('node:readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let parsed;
  if (numsLeft > 0) {
    reader.question("Enter a number", number => {
      const parse = parseInt(number);
      sum += parse;
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback)
      // reader.close();
    });
  } else if (numsLeft === 0) {
    reader.close();
    // console.log(`finished! ${sum}`)
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
