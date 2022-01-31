import Logic from './logic';

export default class Timeout extends Logic {
  run() {
    setTimeout(() => {
      this.activateHole();
    }, 2000);

    setInterval(() => {
      setTimeout(() => {
        this.deactivateHole();
      }, 1000);
      setTimeout(() => {
        this.activateHole();
      }, 1500);
    }, 2000);
  }
}
