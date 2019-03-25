var PouchDB = require('pouchdb-browser');

const htm = require('htm');
const h = htm.bind(require('vhtml'));


var db = new PouchDB('my_database');


let obj = {
  _id: 'id' + Date.now(),
  hello: true
}
db.put(obj, function callback(err) {
  if (!err) {
    console.log('👍')
  } else {
    console.log(err)
  }
});


db.allDocs({
  include_docs: true,
  descending: true
}, function(err, doc) {
  let html = doc.rows.map((o) => h`<div class="">${JSON.stringify(o)}</div>`)
  let el = document.querySelector('#stage');
  el.innerHTML = html.join()
});


db.changes({
  since: 'now',
  live: true
}).on('change', (change) => {
  console.log(change)
});
