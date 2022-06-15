

export const items = JSON.parse(localStorage.getItem('items')) || [];

export const createTodo = (todos) => {
    const text = addTodoTextField.value;
    const item = {
        text: text,
        date: (new Date()).toLocaleString(),
        isChecked: false,
    }
    let length = todos.push(item);
    const todo = getTodo(item, length - 1, todos);
    localStorage.setItem('items', JSON.stringify(items))
    bigWrapper.append(todo)
    addTodoTextField.value = '';
}

export const deleteAll = () => {
    const todoItems = document.querySelectorAll('.todo-item')
    const alls = document.querySelectorAll('.complete')
    alls.forEach((item) => item.remove());
    todoItems.forEach((item) => item.remove());
    all.textContent = 'All:0'
    completed.textContent = 'Completed:0'
}

export function allshow() {
    const td = document.querySelectorAll('.todo-item')
    td.forEach((item) => item.classList.remove('hide'))
}

export const allNumber = () => {
    const todoItems = document.querySelectorAll('.todo-item')
    for (i = 0; i <= todoItems.length; i++) {
        console.log(i);
        all.innerHTML = `<span>All:${i}<span>`
    }
}

export function remove_country() {
    let select = document.getElementById('Container');
    select.removeChild(select.lastChild);
}

