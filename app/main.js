import PoemsController from "./components/poems/poemsController.js";

let about = document.querySelector('#about')

class App {
  constructor() {
    this.controllers = {
      poemsController: new PoemsController(about)
    }
  }
}

window['app'] = new App()