class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let result = 0;

    for (let i = 0; i < this.numbers.length; i++) {
      result += this.numbers[i];
    }
    //console.log(result);
    return result;
  }
  reset() {
    this.numbers = [];
    //console.log(this.numbers);
  }
}
