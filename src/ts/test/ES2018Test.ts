/**
 * Promise、await/asyncのテストクラスです
 */
export class ES2018Test {
  constructor() {
  }

  /**
   * 一定時間ごとに文字列を出力します。
   * @returns {Promise<void>}
   */
  start(): void {
    console.log("2 ** 2", 2 ** 2);
    console.log("Array.inclues", ["a", "b", "c"].includes("a"));
  }
}
