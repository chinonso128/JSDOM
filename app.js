// ACTIVITY 1
const toggleBtn = document.getElementById('submit');
const toggleImg = document.getElementById('landscapeImg');

toggleBtn.addEventListener('click', () => {
    if(toggleImg.style.display === "none"){
        toggleImg.style.display = "block";
    } else {
        toggleImg.style.display = "none";
    }
})


// ACTIVITY 3

const heading = document.getElementById('heading')
const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    heading.style.color = input.value
})