let markdown_area = document.getElementById("markdown-text-area")
let preview_area = document.getElementById("preview")

markdown_area.addEventListener(("input"), function(event){
    preview_area.innerHTML = event.target.value
})