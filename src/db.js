var PouchDB = require('pouchdb-browser')
var db = new PouchDB('my_database')

const add = function() {
  let obj = {
    _id: 'id' + Date.now(),
    hello: Math.random()
  }
  db.put(obj, function callback(err) {
    if (!err) {
      console.log('👍')
    } else {
      console.log(err)
    }
  })
}

const read = function() {
  db.allDocs(
    {
      include_docs: true,
      descending: true
    },
    function(err, doc) {
      let html = doc.rows.map(o => h`<div class="">${JSON.stringify(o)}</div>`)
      let el = document.querySelector('#result')
      el.innerHTML = html.join()
    }
  )
}

const update = function(cb) {
  db.changes({
    since: 'now',
    live: true
  }).on('change', change => {
    console.log(change)
    cb(change)
  })
}

module.exports = {
  add: add,
  read: read,
  update: update
}
