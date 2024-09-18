exports.main = (req, res) => {
    let Datastore = require('nedb')
    let db = new Datastore({ filename: 'lvivarc.json', autoload: true })
    db.find({ table:"arctype" }, (err, arctypes) => {
    res.render(lpath + 'index', { types: arctypes })
    })
   } 
   