import "rxjs/add/observable/interval";
/**
 * Obserbableのテスト
 */
import { Observable } from "rxjs/Observable";

export class ObservableTest {
  constructor() {
  }

  start() {

    const log: HTMLDivElement = <HTMLDivElement> document.getElementById("log");

    Observable
      .interval(1000)
      .subscribe(count => {
        log.innerHTML += `<br>Obserbable ハァ〜〜〜${count}`;
      });
  }
}
