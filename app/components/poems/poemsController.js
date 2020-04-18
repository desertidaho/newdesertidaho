import PoemsService from "./poemsService.js";

const _ps = new PoemsService()

function drawPoems() {
  let template = _ps.Poems.poemsTemplate()
  document.querySelector('#poems-cards').innerHTML = template
}

//Public
export default class PoemsController {
  constructor(about) {
    _ps.addSubscriber('poems', drawPoems) 
    if (about != null) {
      _ps.getPoems1()
    }
    else {
      _ps.getPoems2()
    }
  }
}