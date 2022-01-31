const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
//console.log(sidebar.className)

sidebarToggle.addEventListener('click', function () {
    //console.log(sidebar.classList)
   // if(!sidebar.classList.contains('show-sidebar')){
   //     sidebar.classList.add('show-sidebar')
   // } else {
   //     sidebar.classList.remove('show-sidebar')
   // }
   sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
        
        sidebar.classList.remove('show-sidebar')
    
})