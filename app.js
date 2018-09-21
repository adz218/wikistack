const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const index = require("./views/index");
const layout = require("./views/layout");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
const model = require("./models");

const app = express();
app.use(express.static(__dirname + "./views/stylesheets"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', (req, res) => {
//   res.send(layout('hello world'));
// });

app.use(morgan("dev"));

app.use("/wiki", wikiRouter);
app.get("/", (req, res) => {
  res.redirect("/wiki");
});

app.use("/users", userRouter);

// app.use('/user', user);

const PORT = 3000;

const init = async () => {
  await model.db.sync();
  model.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
