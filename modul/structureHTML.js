

export const root = document.getElementById('root')

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