const express = require("express");
const { QuestionController } = require("../../controller");
const AuthMiddleware = require("../../middleware/authMiddleware")


const questionRouter = express.Router();

questionRouter.get("/",AuthMiddleware,QuestionController.getQuestions);
questionRouter.get("/:id",QuestionController.getQuestion);
questionRouter.post("/",AuthMiddleware,QuestionController.createQuestion); 
questionRouter.put("/",QuestionController.updateQuestion);
questionRouter.delete("/",QuestionController.deleteQuestion);


module.exports = questionRouter;