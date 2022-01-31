const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articleContent = document.querySelectorAll('.content')

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if(id) {
        btns.forEach(function (btn) {
            //remove selected from other button
            btn.classList.remove("active")
        })
        e.target.classList.add('active');
        //hide other articles
        articleContent.forEach(function (article) {
            article.classList.remove("active")
        })
        const element  = document.getElementById(id)
        element.classList.add("active")
    }
    
})