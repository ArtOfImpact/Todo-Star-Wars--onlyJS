


const root = document.getElementById('root')

// ----------------- Action Panel -----------------

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const deleteLast = document.createElement('button')
deleteLast.textContent = 'Delete Last'
deleteLast.classList.add('btn')



const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, deleteLast, addTodoTextField, addTodoButton)

const nav = document.createElement('div')
nav.classList.add('nav')

const all = document.createElement('span')
all.textContent = 'All:0'
all.classList.add('nav__text')

const completed = document.createElement('span')
completed.textContent = 'Completed:0'
completed.classList.add('nav__completed')


const showAll = document.createElement('button')
showAll.textContent = 'Show All'
showAll.classList.add('btn')

const showCompleted = document.createElement('button')
showCompleted.textContent = 'Show Completed'
showCompleted.classList.add('btn-c')


const navTodoTextField = document.createElement('input')
navTodoTextField.placeholder = 'Search...'
navTodoTextField.setAttribute('id', 'nav-input')

nav.append(all, completed, showAll, showCompleted, navTodoTextField)

const continerTodo = document.createElement('div')
continerTodo.classList.add('cotainer__Todo')
continerTodo.setAttribute('id', 'Container')

// ----------------- Todos -----------------
function getTodo(todoObject, index, todos) {
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

// ----------------- Render section -----------------

const items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items)

window.onclick = (event) => {
  console.log('click')
  saveTodos(items);
}

const transformedTodos = items.map(getTodo)
console.log('transformedTodos', transformedTodos);

bigWrapper.append(wrapperRow, nav, ...transformedTodos)
root.append(bigWrapper)

function saveTodos(todos) {
  localStorage.setItem('items', JSON.stringify(todos))
}

const createTodo = (todos) => {
  const text = addTodoTextField.value;
  const item = {
    text: text,
    date: (new Date()).toLocaleString(),
    isChecked: false,
  }
  let length = todos.push(item);
  const todo = getTodo(item, length - 1, todos);
  // localStorage.setItem('items', JSON.stringify(items))
  bigWrapper.append(todo)
  addTodoTextField.value = '';
}

addTodoButton.addEventListener('click', () => createTodo(items))

//--------------DeleteAll-----------------

const deleteAll = () => {
  const todoItems = document.querySelectorAll('.todo-item')
  const alls = document.querySelectorAll('.complete')
  alls.forEach((item) => item.remove());
  todoItems.forEach((item) => item.remove());
  items.splice(0, items.length);
  // localStorage.removeItem('items')
  all.textContent = 'All:0'
  completed.textContent = 'Completed:0'
}

deleteAllButton.addEventListener('click', deleteAll)

//----------------ShowAll----------------------

function allshow() {
  const td = document.querySelectorAll('.todo-item')
  td.forEach((item) => item.classList.remove('hide'))
}

showAll.addEventListener('click', allshow)

//-------------------All-----------------------

const allNumber = () => {
  let select = document.getElementById('Container');
  all.innerHTML = `All : ${select.children.length}`

}

addTodoButton.addEventListener('click', allNumber)

//----------------Delete Last------------------

function remove() {
  let select = document.getElementById('Container');
  select.removeChild(select.lastChild);
  items.splice(-1);
  deleteLast.addEventListener('click', allNumber)
  deleteLast.addEventListener('click', compl)
}

deleteLast.addEventListener('click', remove)
//-----------------Completed-------------------
const compl = () => {
  completed.innerHTML = `Completed : ${document.querySelectorAll('.complete').length}`
}
