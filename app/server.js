// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()


// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


//Routes
var friendsArr = ['hello'];

app.get('/home', function (req, res) {
  res.redirect('home.html')
})

app.get('/survey', function (req, res) {
  res.redirect('survey.html')
})

app.get('/api/friends', function (req, res) {
  res.json(friendsArr)
})

app.post('/friends', function (req, res) {
  friendsArr.push(req.body)
  res.json(friendsArr)
  console.log(friendsArr)
  // res.send(true)
})


var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log('http://localhost:' + PORT)
})
