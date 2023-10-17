class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      //printTimeCallback(this.currentTime); si le paso esto me falla lo demas
      if (printTimeCallback !== undefined) {
        printTimeCallback(this.currentTime);
      }
      //para verificar si paso el callBack decimos que printTimeCallback no sea undefined
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //String para convertirlo
    //return myStr.slice(0,2); no me entero con el slice

    let myStr = String(value);
    if (myStr.length === 1) {
      return "0" + myStr;
    } else if (myStr.length === 0) {
      return "00";
    } else {
      return myStr;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
