//App as an object
var todoList = {
  //intial array of Tasks
  todos: [],

  //Method that displays array of tasks in a readable way
  displayTodos: function(){
      if(this.todos.length === 0){
        console.log("Your To Do List is empty");
     } else {
       console.log('Things to do:');
       for (var i= 0; i < this.todos.length; i++){
         if(this.todos[i].completed === true){
           console.log("(x) ", this.todos[i].todoText);
         } else if(this.todos[i].completed === false){
           console.log("( ) ", this.todos[i].todoText);
         }
        }
      }
    },

  //Adds to tasks
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  //Changes task's name
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  //Changes completedness of the task
  toggleCompleted: function(position){
    this.todos[position].completed = true;
     this.displayTodos();
  },

  //Toggles completedness of all tasks
  //If all complete -> all incompleted
  //Else if some complete or non complete -> all completed
  toggleAll: function(){

    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Make the counter
    for(var i = 0 ; i < totalTodos;i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }

    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
      this.todos[i].completed = false;
      }

    } else {
      for(var i = 0; i < totalTodos; i++){
      this.todos[i].completed = true;
      }
    }
     this.displayTodos();
  },

  //Deletes specific task
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },

};


//Object that includes all methods for buttons
//Separates functions for UI
var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },   
  //Triggers todoList.toggleAll(); via a button
  toggleAll: function(){
    todoList.toggleAll();
  },
//Triggers add.toggleAll(); via a button, adds Todo to list
  addTodo: function(){
    //scoops text from text box
    var newToDo = document.getElementById('addTodoTextInput');
    todoList.addTodo(newToDo.value);
    //clears text input box after given task is added
    newToDo.value = '';
  },
  //Triggers todoList.changeTodo(); via a button. Inserts new text in give numeric position
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoText.value);
    changeTodoPositionInput.value = '';
    changeTodoText.value = '';
  },
  
   //Triggers todoList.toggleAll(); via a button
   deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput =  '';
  },

  //Triggers todoList.toggleCompleted(); via a button. Takes number value to spcify which todo to toggle complete
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput = '';
  }
};

//Responsible for screen output functions
var view = {
  displayTodos: function(){
    var todoUL = document.querySelector('ul');
    var todoLi = document.createElement('li');
    todoUL.appendChild(todoLi);
  },
}

