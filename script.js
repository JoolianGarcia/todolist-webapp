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
    // debugger;
    var completedTodos = 0;
    var totalTodos = this.todos.length;

    //Get number of completed Todos
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });


    this.todos.forEach(function (todo) {
      //Case 1: If everything is true, make everything false
      if (completedTodos === totalTodos) {
        todo.completed = false;
      }
      //Case 2: Otherwise, make everything true
      else {
        todo.completed = true;
      };
    });

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

    todoList.todos.forEach(function (todo, index) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText
      };

      todoLi.textContent = todoTextWithCompletion;
      todoLi.id = index;
      todoLi.appendChild(this.createDeleteButton());
      todoUL.appendChild(todoLi);
    }, this);
  },

  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButtons'
    return deleteButton;
  },

  //Method of adding event listeners
  setUpEventListeners: function () {
    //selects UL that contains all todos
    var todosUL = document.querySelector('ul');

    //Adds an event listenr to a parent element (Event Delegation Pattern)
    // Tracks click within 'ul', looks for button click and passes event
    todosUL.addEventListener('click', function (event) {
      var buttonCheck = event.target;

      //Check if deletebutton was clicked on
      if (buttonCheck.className === 'deleteButtons') {
        //Delete that li via handlers.deleteTodo method
        handlers.deleteTodo(parseInt(buttonCheck.parentNode.id));
      };
    });
  },
};

view.setUpEventListeners();