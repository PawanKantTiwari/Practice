let inputField = document.querySelector(".inputField");
let addButton = document.querySelector(".addButton");
let listContainer = document.querySelector(".listContainer");

addButton.addEventListener("click", function(){
    addTaskToList()
    inputField.value = "";
});

inputField.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        addTaskToList();
        inputField.value = "";
    }
})


function addTaskToList(e){
    let task = inputField.value;
    if(task){
        let singleItem = document.createElement("li");
        singleItem.classList.add("singleItem");
        
        let todoItem = document.createElement("p");
        todoItem.classList.add("todoItem");
        todoItem.innerHTML = task;
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = "X";
        
        singleItem.append(todoItem);
        singleItem.append(deleteButton);
        
        listContainer.append(singleItem);
        deleteButton.addEventListener("click", function(e){
            e.target.parentNode.remove();
        })
    }
}


