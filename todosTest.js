const TodosPage = require("./todos") 

const newToDoPage = new TodosPage("https://elevation-local-todo.herokuapp.com/")
newToDoPage.insertAndDelete("text")
// newToDoPage.insertAndComplete("newText")
// newToDoPage.insertTwoDeleteFirst("newText1", "newText2")