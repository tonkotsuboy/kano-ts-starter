import SubModule from "./sub/SubModule"
import EventName from "./enum/EventName"
class Main {
  constructor() {
    this.hello()
    const sub = new SubModule()
    sub.hello()
    this.checkAsync()
  }

  private hello():void {
    console.log("log from Main Class")
  }

  /**
   * await/asyncのテストコマンド
   * @returns {Promise<void>}
   */
  private async checkAsync():Promise<void> {
    console.log("start")

    for (let i = 0; i < 50; i++) {
      await this.delay(30)
      console.log(`${i}:works`)
    }

    await this.delay(30)

    console.log("end!")
  }

  private delay(milliseconds:number):Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds)
    });
  }
}

window.addEventListener(EventName.DOM_CONTENT_LOADED, () => new Main())
