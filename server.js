const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const path = require('path')
const routes = require('./routes');

const port = 3000



// Static directory
app.use(express.static('public'));
//allows the app to use JSON data
app.use(express.json())
//This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// WORKING ON MODULARIZING ROUTES
//Initializing Express Handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views')

app.use("/", routes)

app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));