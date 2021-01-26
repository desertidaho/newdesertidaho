export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
      <a data-toggle="modal" data-target="#${this.poemsArray[i].id}">
        <div class="card border-secondary shadow">
          <div class="card-body">
              <h4 class="card-title text-center mt-3">${this.poemsArray[i].title}</h4>
              <img class="card-img-bottom mt-1" src="assets/img/${this.poemsArray[i].img}" alt="Card image cap">
              <!-- Modal -->
              <div class="modal fade" id="${this.poemsArray[i].id}" tabindex="-1" role="dialog"
                  aria-labelledby="${this.poemsArray[i].title}" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">${this.poemsArray[i].title}</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              <p class="text-left">
                              ${this.poemsArray[i].poem}
                              </p>
                          </div>
                          <div class="modal-footer">
                              <a href="https://www.amazon.com/Desert-Idaho-Inspired-Nature-Philosophy-ebook-dp-B07MGPR5ZM/dp/B07MGPR5ZM/ref=mt_kindle?_encoding=UTF8&me=&qid="
                                  target="_blank">
                                  <button type="button" class="btn btn-warning shadow amazon-btn px-3">
                                      Buy on<i class="ml-2 fab fa-1x fa-amazon"></i>
                                  </button>
                              </a>
                              <a class="btn btn-warning shadow"
                                  href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf"
                                  target="_blank" role="button">
                                  Donate
                                  <i class="ml-1 fab fa-bitcoin"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </a>
      `
    }

    return template
  }

}