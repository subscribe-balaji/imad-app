var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var articles = {
    'article1': {
        title: 'Article1',
        heading: 'Article1',
        date: '22-Aug-2017',
        content: `<p>
                    This is the first paragraph of Article1. This is the first paragraph of Article1. This is the first paragraph of Article1. This is the first paragraph of Article1. This is the first paragraph of Article1. This is the first paragraph of Article1.  
                  </p>
                  <p>
                    This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. 
                  </p>`
    },
    'article2': {
        title: 'Article2',
        heading: 'Article2',
        date: '22-Aug-2017',
        content: `<p>
                    Article2
                  </p>
                  <p>
                    Second paragraph. 
                  </p>`    
    },
    'article3': {
        title: 'Article3',
        heading: 'Article3',
        date: '22-Aug-2017',
        content: `<p>
                    Article3
                  </p>
                  <p>
                    Second paragraph. 
                  </p>`    
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <link href = '/ui/style.css' rel='stylesheet' />
        </head>
        <body>
            <div class='class1'>
                <div>
                    <a href='/'>Home<hr></a>
                </div>
                <h3>
                    ${heading}
                </h3>
                <div>
                    Date: ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    
    return htmltemplate;
}

var counter=0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/:articlename', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
  var articlename = req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});

/*
Not required anymore
app.get('/article2', function (req, res) {
  res.send(createTemplate(articles[article2]));
});

app.get('/article3', function (req, res) {
  res.send('Article3 requested');
});
*/

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
