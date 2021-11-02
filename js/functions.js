//클릭한 콘텐츠의 id값을 하위 경로로 이동
function locate(element){
    location.href = "./" + element.getAttribute("id")
}