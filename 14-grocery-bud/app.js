// ****** SELECT ITEMS **********

const form = document.querySelector('.grocery-form')
const alert = document.querySelector('.alert')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

//edit option
let editFlag = false
let editID = ""
let editElement

// ****** EVENT LISTENERS **********
form.addEventListener('submit', function(e){
    const id = new Date().getTime().toString()
   // console.log(id)
    e.preventDefault();

    const value = grocery.value
    //console.log(value)
    if (value && !editFlag){
        const element = document.createElement('article')
        element.classList.add("grocery-item")
        const attr = document.createAttribute('data-id')
        attr. value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
           <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
           <i class="fas fa-trash"></i>
          </button>`
          list.appendChild(element)
          const deleteBtn = element.querySelector('.delete-btn')         
          deleteBtn.addEventListener('click',deleteItem)
          const editBtn = element.querySelector('.edit-btn')          
          editBtn.addEventListener('click', editItem);
          // display grocery container
          container.classList.add("show-container")
          displayAlert("item added successfully","success")
          addToLocalStorage(id, value)          
          // set back to default
          setBackToDefault()   

        } else if (value && editFlag)
        {  
            
            editElement.innerHTML = value;           
            displayAlert("value changed", "success")
            editLocalStorage(editID,value)
            setBackToDefault()
        } else 
        {
           // alert.textContent = "empty value"
           displayAlert("Empty value submitted","danger")
           
        }
    
})


// ****** FUNCTIONS **********
// delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    // remove selected item from the list
    list.removeChild(element)
    removeFromLocalStorage(id)    
    if (list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("item deleted successfully", "danger")
    grocery.value = "nnnnnnnnnnnnnn"
    // setBackToDefault()

}
//   EDIT ITEM
function editItem(e) {
    // console.log("just deleting")    
    const element = e.currentTarget.parentElement.parentElement
    // console.log(element);
    editElement = e.currentTarget.parentElement.previousElementSibling
    // set form values
    editFlag = true
    grocery.value = editElement.innerHTML
    editID = element.dataset.id
    // console.log(editElement);
    
    submitBtn.textContent = "edit"
}
// clear all button
clearBtn.addEventListener('click', function() {
    const elements = document.querySelectorAll('.grocery-item')
    if (elements.length > 0){
        // console.log("hithi");
        elements.forEach(function(element) {
            list.removeChild(element)
        })
    }
    container.classList.remove("show-container")
    displayAlert("items deleted successfuly", "danger")
    setBackToDefault()
    localStorage.removeItem("list")
})
// function display alert
function displayAlert(text,action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function(){
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    },1000)
}
// set displey variablles back to default
function setBackToDefault() {
    grocery.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = "submit"

}

// ****** local storage **********

// localstorage API
// setItem 
// getItem
// removeItem
// save as string

// reove from local storage
function removeFromLocalStorage(id){
    //  console.log(id);
    let items = getLocalStorage()
    items = items.filter(function(item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}

function addToLocalStorage(id, value) {
    const grocery = {id, value};    
        let items = getLocalStorage()        
        // console.log(items);
         items.push(grocery)
         localStorage.setItem("list", JSON.stringify(items))
}
// get local storage value
function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }

// edit local storage
function editLocalStorage(id, value) {
    console.log(id, value);
    let items = getLocalStorage()
    // console.log(items);
    items = items.map(function(item) {
        if (item.id === id){
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify("items"))
}

// JSON.parse(localStorage.getItem("orange"))
// ****** SETUP ITEMS **********