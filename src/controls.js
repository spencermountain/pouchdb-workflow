const db = require('./db')
const inputs = require('somehow-input')

let addBtn = inputs.button({
  width: 100,
  label: 'add',
  debounce: false,
  cb: () => {
    db.add()
  }
})
document.querySelector('#add-button').innerHTML = addBtn.build()
