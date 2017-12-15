export default class SubModule {
  public hello():void {
    const log:HTMLDivElement = <HTMLDivElement> document.getElementById("log");
    log.innerHTML += "<br> SubClass works!  ";
  }
}