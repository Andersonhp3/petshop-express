const express = require("express");
const app = express();
const Router = express.Router();
const PetController = require("../controller/PetController");

Router.get("/", PetController.index);
Router.get("/add/:nome/:raca/:idade/:genero/:servico/:tipo/:Vacinado", PetController.add);
Router.get("/show/:nome", PetController.show);
Router.get("/servico/:nome/:servico1/:servico2?", PetController.servico);


module.exports = Router;