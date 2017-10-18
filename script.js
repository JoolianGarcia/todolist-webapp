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
  }

};



console.log("Hello World, this is a test");

/*var todos = ['item 1', 'item 2', 'item 3'];

//It should have a function to display todos.
function displayTodos() {
    console.log('My todos:', todos);
}

//It should have a function to add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//it should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos()
}

//It should have funciton to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}*/
