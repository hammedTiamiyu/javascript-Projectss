const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn')
const color = document.querySelector('.color')

button.addEventListener('click', function() {
    
    // console.log(RandomNumber);
  let hexColor = "#"
  for(let i = 0; i < 6; i++){
    const RandomNumber = getRandomNumber()
      hexColor += hex[RandomNumber]
  }
    //console.log(hexColor);
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor  
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
