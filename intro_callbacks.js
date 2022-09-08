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
    });
  } else if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function (context) {
  return this.apply(context);
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


const absurdBubbleSort = (arr, sortCompletionCallback) => {
  const outerBubbleSortLoop = (madeAnySwaps) => {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

const askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Is ${el1} greater than ${el2}?? Yes or No.`, response => {
    if (response === 'Yes'){
      callback(true);
    } else if (response === 'No') {
      callback(false);
    } else {
      console.log("Please enter 'Yes' or 'No', OK??")
    }
    // reader.close()
  })
}

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function(bool) {
      if (bool) {
        const next = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = next;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === (arr.length- 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});






