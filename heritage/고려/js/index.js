//검색기능
function filter(){
    let search = document.getElementById("search").value.toLowerCase()
    let listner = document.getElementsByClassName("listner")

    for(var i=0; i<listner.length; i++){
        if(listner[i].innerHTML.toLowerCase().includes(search)){
            listner[i].style.display = "block"
        }
        else{
            listner[i].style.display = "none"
        }
    }
}

//리스트 요소 클릭시 이동
let listElement =  document.getElementsByClassName("list-element")
for(var i=0; i<listElement.length; i++){
    listElement[i].addEventListener("click", function(){
        location.href = "./" + this.innerHTML
    })
}