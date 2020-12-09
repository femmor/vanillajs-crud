// Declare todos array
const addTodoBtn = document.getElementById('addTodoBtn');
const ToggleAllBtn = document.getElementById('ToggleAllBtn')

// display Todo
addTodoBtn.addEventListener('click', displayTodos);

// Toggle all
ToggleAllBtn.addEventListener('click', toggleAllTodos);


let todos = [
	{todoText: "Todo 1", completed: false},
	{todoText: "Todo 2", completed: false},
	{todoText: "Todo 3", completed: false},
	{todoText: "Todo 4", completed: false},
]


// Display Todos
function displayTodos() {
	for (let i = 0; i < todos.length; i++) {
		console.log(todos[i])
	}
}

// Add todo
function addTodo(todo) {
	todos.push({
		todoText: todo,
		completed: false
	})
	displayTodos()
}

// Edit Todo
function editTodo(position, newTodoText) {
	todos[position].todoText = newTodoText
	displayTodos()
}

// Delete Todo
function removeTodo(postion) {
	todos.splice(postion, 1)
	displayTodos()
}

// Toggle Todo
function toggleTodo(position) {
	todos[position].completed === false ? todos[position].completed = true : todos[position].completed = false
	displayTodos()
}

function toggleAllTodos() {
	let completedTodos = 0

	for (let i = 0; i < todos.length; i++) {
		if (todos[i].completed === true) {
			completedTodos++
		}
	}

	if(completedTodos === todos.length) {
		for (let i = 0; i < todos.length; i++) {
			todos[i].completed = false
		}
	} else {
		for (let i = 0; i < todos.length; i++) {
			todos[i].completed = true
		}
	}

	console.log("all toggled")
	console.log(todos)
}



// // Function calls
// displayTodos()
// toggleAllTodos()
// displayTodos()
// // displayTodos()

// // toggleAllTodos()
// // displayTodos()



