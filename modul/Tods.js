export function getTodo(todoObject, index, todos) {
    const todoElement = document.createElement('div')
    todoElement.classList.add('todo-item', (todoObject.isChecked ? 'complete' : undefined))
    todoElement.setAttribute('id', `todo-${todoObject.id}`)
    // todoElement.setAttribute('data-index', `${index}`)

    const completeButton = document.createElement('button')
    completeButton.classList.add('btn-todo-action')
    completeButton.innerText = todoObject.isChecked ? '✓' : ''
    completeButton.addEventListener('click', () => {
        todoObject.isChecked = !todoObject.isChecked;
        completeButton.innerText = todoObject.isChecked ? '✓' : ''
        todoElement.classList.toggle('complete');
    })
    //-----------------Completed-------------------
    const compl = () => {
        completed.innerHTML = `Completed : ${document.querySelectorAll('.complete').length}`
    }

    completeButton.addEventListener('click', compl)
    //-------------------allNumber--------------------
    const allNumber = () => {
        let select = document.getElementById('Container');
        all.innerHTML = `All : ${select.children.length}`

    }
    //----------------ShowCompleted----------------------
    const completec = () => {
        if (todoElement.classList.contains('complete')) {

            todoElement.classList.remove('hide')
        } else if (todoElement.classList.contains('todo-item')) {
            console.log('todoElement')
            todoElement.classList.add('hide');
        }
    }

    showCompleted.addEventListener('click', completec)
    //---------------------------------------------------
    const todoTextElement = document.createElement('div')
    todoTextElement.classList.add('todo-text')
    todoTextElement.innerHTML = `<span>${todoObject.text}</span>`

    const columnWrapper = document.createElement('div')
    columnWrapper.classList.add('column-wrapper')

    const todoDeleteButton = document.createElement('button')
    todoDeleteButton.classList.add('btn-todo-action', 'delete')
    todoDeleteButton.innerText = '✖'
    todoDeleteButton.addEventListener('click', () => {
        todos.splice(index, 1);
        todoElement.remove()
    })
    todoDeleteButton.addEventListener('click', allNumber)
    todoDeleteButton.addEventListener('click', compl)

    const todoDatetimeBox = document.createElement('span')
    todoDatetimeBox.classList.add('column-wrapper-date')
    todoDatetimeBox.innerText = todoObject.date

    //---------------search---------------

    const search = () => {
        if (navTodoTextField.value === todoTextElement.textContent) {
            todoElement.classList.add('complete');
            todoElement.classList.remove('star_clon');
            completeButton.innerText = '✓';
        } else {
            todoElement.classList.remove('complete');
            completeButton.innerText = '';
            todoElement.classList.add('star_clon');
            console.log(navTodoTextField.value, todoTextElement.value)
        }
    }

    navTodoTextField.addEventListener('keyup', search)
    navTodoTextField.addEventListener('keyup', compl)

    columnWrapper.append(todoDeleteButton, todoDatetimeBox)

    todoElement.append(completeButton, todoTextElement, columnWrapper)

    continerTodo.append(todoElement)

    return continerTodo;
}