const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const views = require('./views')
app.engine('.hbs', exphbs({
 defaultLayout: 'main',
 extname: '.hbs',
 layoutsDir: path.join(__dirname, 'layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'layouts'))
lpath = __dirname + '/layouts/'
app.get('/', views.main)
// module.exports.main = (req, res) => {
//     res.render('main');
//   };
app.use("*", (req,res) => {
 console.log(lpath)
 res.sendFile(lpath + '404.html')
})
app.listen(port,(err) => {
 if (err) {
 return console.log('Сталася помилка: ', err)
 }
 console.log(`Сервер почав прослуховувати порт ${port}...`)
})