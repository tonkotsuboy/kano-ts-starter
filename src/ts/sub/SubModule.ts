export class SubModule {
  public hello(): void {
    const log = document.getElementById("log");

    if (!log) {
      return;
    }
    log.innerHTML += "<br> SubClass works!  ";
  }
}
