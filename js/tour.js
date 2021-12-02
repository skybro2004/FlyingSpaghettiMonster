var pageIndex = 0



function nextPage(){
    try{
        document.getElementsByClassName("node")[pageIndex].classList.remove("current")
        
        pageIndex += 1
    
        let url = document.getElementsByClassName("node")[pageIndex].getAttribute("src")
        document.getElementById("iframe").contentDocument.location.replace(url);
        document.getElementsByClassName("node")[pageIndex].classList.add("current")
    }
    catch{
        pageIndex -= 1
        document.getElementsByClassName("node")[pageIndex].classList.add("current")
    }
}

function prevPage(){
    try{
        document.getElementsByClassName("node")[pageIndex].classList.remove("current")
        
        pageIndex -= 1
    
        let url = document.getElementsByClassName("node")[pageIndex].getAttribute("src")
        document.getElementById("iframe").contentDocument.location.replace(url);
        document.getElementsByClassName("node")[pageIndex].classList.add("current")
    }
    catch(error){
        pageIndex += 1
        document.getElementsByClassName("node")[pageIndex].classList.add("current")
    }
}