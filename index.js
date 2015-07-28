var express = require('express')
   , app = express()

app.use(express.static('./public'))

app.get("/prices", function(req, res) {

   var prices = []

   for (var i = 0; i < 20; i++) {
      prices.push({
         id: "instrument" + i
       , bid: Math.random() * 1000
       , offer: Math.random() * 1000
     })
   }

   res.send(prices)
})

app.get("/reloadTasks", function(req, res) {

    var data = JSON.stringify({
        title: "reloaded",
        description: "desc",
        dueDate: new Date()
    })

    res.send(data)
})


app.listen(9000)
console.log('Listening on port 9000')

