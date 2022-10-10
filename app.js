// document.getElementById('listWrapper')
// console.log('hello')

const header = document.getElementById('heading')

header.textContent = 'my List'

const list = document.getElementById('listWrapper')
list.innerHTML = '<li>New List Items</li>'


header.innerHTML = '<i>my list</i>'

document.addEventListener('click', () => {
    header.textContent = "it changed!"
})

document.addEventListener('click', () => {
    header.textContent = "it changed!"
})

document.addEventListener('mouseout', () => {
    header.textContent = "it cool!"
})