const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://cyybxrg_p:cyybxrg7417@cluster0.fpt7cvq.mongodb.net/Todo-App");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("Todo",todoSchema);

module.exports = {
    todo
}