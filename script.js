//App as an object
var todoList = {
  todos: [],
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

  //Adds New Tasks, passed them as a string to be added to the list
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function(position){
    this.todos[position].completed = true;
     this.displayTodos();
  },

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
      for(var j = 0; j < totalTodos; j++){
      this.todos[j].completed = false;
      }

    } else if(completedTodos !== totalTodos){
      for(var y = 0; y < totalTodos; y++){
      this.todos[y].completed = true;
      }
    }
     this.displayTodos();
  },

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
