const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.querySelector('#btn')

const colorText = document.querySelector('.color')

button.addEventListener('click', function () {
   const getrandomNumber = randomNumber()
   console.log(getrandomNumber)
   document.body.style.backgroundColor = colors[getrandomNumber]
   colorText.textContent = colors[getrandomNumber]
   
})

function randomNumber() {
   return Math.floor(Math.random()*colors.length)
}
