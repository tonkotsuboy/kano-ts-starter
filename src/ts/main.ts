import { SubModule } from "./sub/SubModule";
// import { ObservableTest } from "./test/ObservableTest";

// import { AsyncTest } from "./test/AsyncTest";

class Main {
  constructor() {
//    document.getElementById("log").innerHTML = "MainClass Works";

    const sub = new SubModule();
    sub.hello();

    // Promiseのawait/asyncを試したい場合は、import共にコメントアウトを外す。
    // new AsyncTest().start();

//    new ObservableTest().start();
  }
}
//
// // window.addEventListener(EventName.DOM_CONTENT_LOADED, () => new Main());
//
// // 値を一つ流す場合
// new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve("2秒経ちました");
//   }, 2000);
// })
//   .then(data => console.log(data));
//
//
// // 値を複数流す場合
//
// interface FooData {
//   foo: string;
// }
//
// interface BarData {
//   bar: number;
// }
//
// // 値を一つ流す場合
// new Promise<{ data1: FooData, data2: BarData }>(resolve => {
//   setTimeout(() => {
//     resolve({
//       data1: {foo: "boy"},
//       data2: {bar: 2}
//     });
//   }, 2000);
// })
//   .then(data => console.log(data.data1.foo, data.data2.bar));
// // boy, 2が出力される
//
