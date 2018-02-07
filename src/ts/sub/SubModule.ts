export class SubModule {
  public hello(): void {
    const log = document.getElementById("log") as HTMLDivElement;
    log.innerHTML += "<br> SubClass works!  ";
  }
}
