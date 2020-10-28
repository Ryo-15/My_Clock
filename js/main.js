'use strict';

{
  class Clock {
    drawFace() {
      const canvas = document.querySelector('canvas');
      if (typeof canvas.getContext === 'undefined') {
        return;
      }
      cont ctx = canvas.getContext('2nd');

      const width = canvas.width;
      const height = canvas.height;
    }
    run() {
      this.drawFace();
    }
  }

  const clock = new Clock();
    clock.run();
}