const express = require('express');
var fs = require("fs");
const app = express()

app.get('/web/def/msg', (req, res) =>{
  let outerData = ''
  fs.readFile("./root/admin/messages.html", "utf-8", function(err, data) {
    if (err) { console.log(err) }
    res.write('<script>window.location.replace("'+req.query.src+'");</script>')
    outerData=data;
  });
  let fileContent = outerData+'<br>MSG:{ from:'+req.query.name+', email:'+req.query.email+',<hr>'+req.query.message+'<hr>};';
  fs.writeFile("./root/admin/messages.html", fileContent, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
});

app.use(express.static('./root/'));

app.use(function(req, res) {
  err = 'The page you have requested has been moved or deleted. If you clicked a link or button on this website and it sent you here, please contact Qweru#8607.'
  console.log('GET 404 ERR')
  res.write(err);
  res.end();
});

app.listen(80, console.log('App Listening to port 80'));