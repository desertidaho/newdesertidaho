export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
      <a href="https://desertidaho.com" target="_blank">
        <div class="card my-2  ">
            <div class="card-body">
              <h6 class="card-title">${this.poemsArray[i].title}</h6>
            </div>
        </div>
      </a>
      `
    }
    return template
  }

}