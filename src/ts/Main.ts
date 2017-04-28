import "es6-promise/auto";
import {EventName} from "./eventname/EventName";
import SubModule from "./sub/SubModule";
//import AsyncTest from "./test/AsyncTest";

class Main {
  constructor() {
    document.write("MainClass works!  ");
    const sub = new SubModule();
    sub.hello();

    // Promiseのawait/asyncを試したい場合は、import共にコメントアウトを外す。
    // new AsyncTest();
  }
}

window.addEventListener(EventName.DOM_CONTENT_LOADED, () => new Main());
