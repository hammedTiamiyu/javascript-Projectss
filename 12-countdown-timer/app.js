const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
// console.log(items);

//set future time
const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()
let futureDate = new Date(tempYear,tempMonth,tempDay + 1,21,9,30)
// console.log(futureDate);
const year = futureDate.getFullYear()
let month = futureDate.getMonth()
month = months[month]


const date = futureDate.getDate()
let day = futureDate.getDay()
day  = weekdays[day]
console.log(day);
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()


giveaway.textContent = `giveaway ends on ${day},${date} ${month} ${year} ${hours}:${minutes}am`

// get future date in miliseconds
const futureTime = futureDate.getTime()

function getRemaindingTime () {
  const today = new Date().getTime()

  const t = futureTime - today
  console.log(t)

    // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)
  // console.log(days,hours,minutes,seconds)
  values = [days,hours,minutes,seconds]
  console.log(values)

  function format(item) {
    if (item < 10 ){
      return (item = `0${item}`)
    }
    return item
  }
  items.forEach(function (item,index) {
    item.innerHTML = format(values[index])
  })  
  if (t < 0 ){
    clearInterval(countdown)
    
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
   
  }
}

let = countdown = setInterval(getRemaindingTime, 1000)

getRemaindingTime()