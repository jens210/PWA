window.onload = function () {

    // Display the todo items.
    todoDB.open(refreshTodos);

    // Get references to the form elements.
    var newTodoForm = document.getElementById('new-todo-form');
    var newTodoInput = document.getElementById('new-todo');
    // Handle new todo item form submissions.
    newTodoForm.onsubmit = function () {
        // Get the todo text.
        var text = newTodoInput.value;
        // Check to make sure the text is not blank (or just spaces).
        if (text.replace(/ /g, '') != '') {
            // Create the todo item.
            todoDB.createTodo(text, function (todo) {
                refreshTodos();
            });
        }

        // Reset the input field.
        newTodoInput.value = '';

        // Don't send the form.
        return false;
    };

}

// Update the list of todo items.
function refreshTodos() {
    todoDB.fetchTodos(function (todos) {
        var todoList = document.getElementById('todo-items');
        todoList.innerHTML = '';

        for (var i = 0; i < todos.length; i++) {
            // Read the todo items backwards (most recent first).
            var todo = todos[(todos.length - 1 - i)];

            var li = document.createElement('li');
            li.className = "list-group-item";

            var removeButton = document.createElement('button');
            removeButton.className = "btn btn-danger";
            removeButton.setAttribute("data-id", todo.timestamp);
            var textBtn = document.createTextNode("Remove");
            removeButton.appendChild(textBtn);

            li.appendChild(removeButton);

            var span = document.createElement('span');
            span.innerHTML = todo.text;

            li.appendChild(span);

            todoList.appendChild(li);
            // Remove
            removeButton.addEventListener('click', function (e) {
                var id = parseInt(e.target.getAttribute('data-id'));
                todoDB.deleteTodo(id, refreshTodos);
                
            });
        }
    });
}

