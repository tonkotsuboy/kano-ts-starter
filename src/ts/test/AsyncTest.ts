/**
 * Promise、await/asyncのテストクラスです
 */
export default class AsyncTest {
  constructor() {
    this.start();
  }

  /**
   * 一定時間ごとに文字列を出力します。
   * @returns {Promise<void>}
   */
  private async start():Promise<void> {

    const log:HTMLDivElement = <HTMLDivElement> document.getElementById("log");

    if (!log) {
      return null;
    }

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