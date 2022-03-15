import './style.css';

// pseudocode
// User should see an interface
// User can create a project
// The project should have a DataTransferItemList, description, due Date, and priority
// Include notes and a checklist
// create new todo, complete todo, delete todo
// expand project to see todo, and then edit or add notes to todo item

// project constructor using factory functions
const project = (title, date) => {
    return {title, date};
};
// store user data/ update user data
let todoArray = [];
let myTodo

// read user data and create new project
function readUserInput () {
    if (document.getElementById("title").value == null) {
        return
    } else {
        title = document.getElementById("title").value;
        // date = document.getElementById("date").value;
    
        myTodo = project(title);
        return myTodo;
    }
}

function addTodoList () {
    todoArray.push(myTodo);
    // console.log(todoArray);
}

function resetArray () {
    todoArray = [];
}

function displayTodo () {
    for (let i=0; i<todoArray.length; i++) {
        const rightSide = document.getElementById("rightSide");
        
        // const table = document.createElement("table");
        // rightSide.appendChild(table);

        // const tr = document.createElement("tr");
        // table.appendChild(tr);

        // const th = document.createElement("th");
        // th.textContent = todoArray[i].title;
        // tr.appendChild(th);

        // const th2 = document.createElement("th");
        // th2.textContent = todoArray[i].date;
        // tr.appendChild(th2);

        // const remove = document.createElement("button");
        // remove.textContent = "X";
        // remove.className = "remove";
        // remove.id = "remove";
        // tr.appendChild(remove);

        const parentDiv = document.createElement("div");
        parentDiv.id = "parentDiv";
        rightSide.appendChild(parentDiv);

        const input = document.createElement("input");
        input.type = "checkbox";
        parentDiv.appendChild(input);

        const todoText = document.createElement("div");
        todoText.textContent = todoArray[i].title;
        todoText.id = "todoText"
        parentDiv.appendChild(todoText);

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.placeholder = "enter due date";
        parentDiv.appendChild(dateInput);

        const remove = document.createElement("button");
        remove.textContent = "X";
        remove.className = "remove";
        remove.id = "remove";
        parentDiv.appendChild(remove);
    }
}

// Open and close form
const open = document.getElementById("openForm");
open.addEventListener("click", function () {
    openForm()
});

const close = document.getElementById("closeForm");
close.addEventListener("click", function () {
    closeForm()
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
    readUserInput(), 
    addTodoList(), 
    displayTodo(), 
    resetArray(), 
    removeItem()
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 

  function removeItem() {
      if (document.getElementsByClassName("remove")) {
        const rightSide = document.getElementById("rightSide");
        const removeItem = document.getElementsByClassName("remove");

            for (let i=0; i<removeItem.length; i++) {
                removeItem[i].addEventListener("click", function () {
                const div = this.parentElement;
                div.style.display = "none";
                });
            }
    }
}

