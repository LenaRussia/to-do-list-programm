var list = document.querySelector('.todo-list');
var items = list.children;
var toDoListItem = document.querySelectorAll('.todo-list-item');
var checkBox = document.querySelectorAll('li input');
var newInput = document.querySelector('#task');
var submitForm = document.querySelector('.form-flex');
var submitButton = submitForm.querySelector('.submit-button');
var newTask = submitForm.querySelector('.todo-list-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');
var popap = document.querySelector('.hidden');
var popapYes = popap.querySelector('.yes');
var popapNo = popap.querySelector('.no');
var fon = document.querySelector('.hidden-fill');

// delete item 
var deleteItem = function(item) {
    var checkbox = item.querySelector('.todo-list-item input');
    checkbox.addEventListener('change', function() {
        popap.classList.add('popap');
        fon.classList.add('fill');
        popapNo.addEventListener('click', function() {
            popap.classList.remove('popap');
            fon.classList.remove('fill');
        })
        popapYes.addEventListener('click', function() {
            item.remove();
            popap.classList.remove('popap');
            fon.classList.remove('fill');
        })  
    })
}
for (i = 0; i < items.length; i++) {
    deleteItem(items[i]);
}

// add item (working only when button pressed, not Enter)
submitButton.addEventListener('click', function(){
    var inputText = newTask.value;
    var task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('.todo-list-text-item');
    taskDescription.textContent = inputText;
    deleteItem(task);
    list.appendChild(task);
    newTask.value = '';
})

// when clicl on tick, popap window appears
