//사이드바 확장
document.getElementsByClassName("btn-expand-sidebar")[0].addEventListener('click', function(){
    document.getElementsByClassName("sidebar")[0].classList.toggle("expanded")
})

//사이드바 안 요소 확장
const elements = document.getElementsByClassName("sidebar-link-expandBtn")
var i
for(i=0; i<elements.length; i++){
    elements[i].addEventListener('click', function(){
        this.parentNode.nextElementSibling.classList.toggle('expanded')
        this.classList.toggle('rotate')
    })
}