const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const view_path = __dirname + "/views";

const app = express();
const router = express.Router();

//View engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'index', layoutsDir: 'views',}))
app.set('view engine', 'handlebars');
app.set('views', view_path);

// default URL for website
router.use('/', function(req,res){
    res.render('main');
  });

app.use('/main', router);
app.use('/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get('*',function (req, res) {
  res.redirect('/main');
});

const server = http.createServer(app);
const port = 3001;
server.listen(port);
console.debug('Server listening on port ' + port);