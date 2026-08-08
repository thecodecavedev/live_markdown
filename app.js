let markdown_area = document.getElementById("markdown-text-area")
let preview_area = document.getElementById("preview")


function parse_markdown(val){
  let html = val;

  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/_(.*?)_/g, '<em>$1</em>')
  html = html.replace(/^- (.*$)/gm, '<li><ul>$1</ul></li>')
  html = html.replace(/\n/g, '<br>')
  html = html.replace(/---/g, '<hr>')
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
  return html.trim()
}

markdown_area.addEventListener(("input"), function(event){
    // preview_area.innerHTML = event.target.value
    preview_area.innerHTML =parse_markdown(event.target.value)
})