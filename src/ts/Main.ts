import "core-js/es6/Promise";

import { EventName } from "./eventname/EventName";
import { SubModule } from "./sub/SubModule";
import { AsyncTest } from "./test/AsyncTest";
import { ObservableTest } from "./test/ObservableTest";

// import { AsyncTest } from "./test/AsyncTest";

class Main {
  constructor() {
    document.getElementById("log").innerHTML = "MainClass Works";

    const sub = new SubModule();
    sub.hello();

    // Promiseのawait/asyncを試したい場合は、import共にコメントアウトを外す。
    new AsyncTest().start();

    new ObservableTest().start();
  }
}

window.addEventListener(EventName.DOM_CONTENT_LOADED, () => new Main());
