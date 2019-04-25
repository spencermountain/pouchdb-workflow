const htm = require('htm')
const h = htm.bind(require('vhtml'))

const db = require('./src/db')
require('./src/controls')

db.update(doc => {
  console.log(doc)
  let html = doc.rows.map(o => h`<div class="">${JSON.stringify(o)}</div>`)
  let el = document.querySelector('#result')
  el.innerHTML = html.join()
})
