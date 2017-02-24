class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    if(this.seconds > 59) {
      this.seconds = 0;
      this.minutes++;
      if(this.minutes > 59) {
        this.minutes = 0;
        this.hours++;
        if(this.hours > 23) {
          this.hours = 0;
        }
      }
    }

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();
