//App as an object
var todoList = {
  //intial array of Tasks
  todos: [],

  //Adds to tasks
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  //Changes task's name
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },

  //Changes completedness of the task
  toggleCompleted: function (position) {
    this.todos[position].completed = true;
  },

  //Toggles completedness of all tasks
  //If all complete -> all incompleted
  //Else if some complete or non complete -> all completed
  toggleAll: function () {

    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Make the counter
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }

    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },

  //Deletes specific task
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },

};


//Object that includes all methods for buttons
//Separates functions for UI
var handlers = {

  //Triggers todoList.toggleAll(); via a button
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },

  //Triggers add.toggleAll(); via a button, adds Todo to list
  addTodo: function () {
    //scoops text from text box
    var newToDo = document.getElementById('addTodoTextInput');
    todoList.addTodo(newToDo.value);
    //clears text input box after given task is added
    newToDo.value = '';
    view.displayTodos();
  },

  //Triggers todoList.changeTodo(); via a button. Inserts new text in give numeric position
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoText.value);
    changeTodoPositionInput.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  },

  //Triggers todoList.deleteTodo
  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },

  //Triggers todoList.toggleCompleted(); via a button. Takes number value to spcify which todo to toggle complete
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput = '';
    view.displayTodos();
  }
};

//Responsible for screen output functions
var view = {
  //Re-prints the todoList on every call, updating to the latest version
  displayTodos: function () {
    var todoUL = document.querySelector('ul');
    todoUL.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todoList.todos[i].completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText
      };


      todoLi.textContent = todoTextWithCompletion;
      todoLi.id = i;
      todoLi.appendChild(this.createDeleteButton());
      todoUL.appendChild(todoLi);
    };
  },

  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButtons'
    return deleteButton;
  }
};

var todosUL = document.querySelector('ul');

// Tracks click within 'ul', looks for button click
todosUL.addEventListener('click', function(event){

  var buttonCheck = event.target;

  //Check if deletebutton was clicked on
  if(buttonCheck.className === 'deleteButtons'){
  //if element clicked, is the delete button: delete that li
    console.log('ready to delete item');
    handlers.deleteTodo(event.target.parentNode.id);
  };
});