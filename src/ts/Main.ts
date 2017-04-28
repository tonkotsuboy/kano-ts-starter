import SubModule from "./sub/SubModule";

import "es6-promise/auto";
import {EventName} from "./eventname/EventName";

class Main {
  constructor() {
    const sub = new SubModule();
    sub.hello();
    this.checkAsync();
  }

  /**
   * Promise、await/asyncのテストメソッドです。
   * @returns {Promise<void>}
   */
  private async checkAsync():Promise<void> {

    const log:HTMLDivElement = <HTMLDivElement> document.getElementById("log");

    log.innerHTML = "start";

    for (let i = 0; i < 50; i++) {
      await this.delay(30);
      log.innerHTML += `<br>${i}:works`;
    }

    await this.delay(30);

    log.innerHTML += `end`;
  }

  private delay(milliseconds:number):Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}

window.addEventListener(EventName.DOM_CONTENT_LOADED, () => new Main());
