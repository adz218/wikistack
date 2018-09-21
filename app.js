const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const index = require("./views/index");
const layout  = require("./views/layout");

const model = require('./models');

const app = express();
app.use(express.static(__dirname + "./views/stylesheets"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout("hello world"));
});

const PORT = 3000;

const init = async() => {
	// await model.User.sync()
	// await model.Page.sync()
	// model.Page.sync({force: true})
	// model.User.sync({force: true})
	await model.db.sync()
	model.db.sync({force: true});
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}!`);
	});
}

init();

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// });





// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
