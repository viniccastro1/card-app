// imports and main definitions
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// bodylogger middleware
const bodyLogger = (req, res, next) => {
  console.log("Request body:");
  console.log(req.body);
  next();
};

// middleware use
app.use(express.json());
app.use(bodyLogger);
app.use(cors());
app.use(express.static("build"));

// hardcoded json
const cards = [
  {
    id: 0,
    text: "Estudar Visuall Component",
    url: "https://thumbs.dreamstime.com/b/business-to-do-list-flat-icon-modern-style-task-list-business-to-do-list-flat-icon-modern-style-any-purposes-perfect-web-138650221.jpg",
  },
  {
    id: 1,
    text: "Fazer a daily",
    url: "https://thumbs.dreamstime.com/b/business-to-do-list-flat-icon-modern-style-task-list-business-to-do-list-flat-icon-modern-style-any-purposes-perfect-web-138650221.jpg",
  },
  {
    id: 2,
    text: "Estudar Node.JS",
    url: "https://cdn2.iconfinder.com/data/icons/education-icons-set-2/256/Student_Studying-512.png",
  },
  {
    id: 3,
    text: "Fazer debugging",
    url: "https://thumbs.dreamstime.com/b/business-to-do-list-flat-icon-modern-style-task-list-business-to-do-list-flat-icon-modern-style-any-purposes-perfect-web-138650221.jpg",
  },
  {
    id: 4,
    text: "Estudar normalização de banco de dados",
    url: "https://cdn2.iconfinder.com/data/icons/education-icons-set-2/256/Student_Studying-512.png",
  },
  {
    id: 5,
    text: "Contratar aquele programador legal (o Vini)",
    url: "https://thumbs.dreamstime.com/b/handshake-icon-flat-design-business-concept-handshake-icon-flat-design-business-concept-communication-teamwork-round-123384173.jpg",
  },
  {
    id: 6,
    text: "Ir pra casaa",
    url: "https://thumbs.dreamstime.com/b/bus-icon-isolated-white-background-black-vector-185767060.jpg",
  },
];

// get handlers
app.get("/api/cards/", (request, response) => {
  response.send(cards);
});

// post handlers
app.post("/api/cards/", (request, response) => {
  if (!request.body)
    response.status(400).send("Please, fill the body of the request");

  const card = {
    id: cards.length + 1,
    text: request.body.text,
    url: request.body.url,
  };

  cards.push(card);

  response.status(204).send("Success");
});

app.listen(port, () => console.log(`Server running at port ${port}`));
