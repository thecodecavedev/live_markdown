
let markdown_area = document.getElementById("markdown-text-area")
let preview_area = document.getElementById("preview")
let export_button = document.getElementById("export-pdf")

const placeholder_markdown = `# Welcome to Live Markdown

Start typing to see your **markdown** rendered *instantly* on the right.

**Supported syntax:**
- Headers with '#'
- **Bold** and *italic* text
- Links like [this one](https://github.com/thecodecavedev)
- Bullet lists (like this!)

---

Try deleting this text and writing your own. Happy writing!`;

function parse_markdown(val) {
    let html = val;

    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
    html = html.replace(/_(.*?)_/g, '<em>$1</em>')
    html = html.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
    html = html.replace(/^- (.*$)/gm, '<li class="list-item"><ul>$1</ul></li>')
    html = html.replace(/\n/g, '<br>')
    html = html.replace(/---/g, '<hr>')
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    html = html.replace(/`(.*?)`/g, '<div class="code"><code>$1</code></div>')
    return html.trim()
}
markdown_area.value = placeholder_markdown
preview_area.innerHTML = parse_markdown(markdown_area.value)
var editor = CodeMirror.fromTextArea(markdown_area, {
    lineNumbers: true,
    
  });

editor.addEventListener

editor.on(("change"), function () {
    // preview_area.innerHTML = event.target.value
    preview_area.innerHTML = parse_markdown(editor.getValue())

})



export_button.addEventListener(('click'), function (e) {
    html2pdf().from(preview_area).save("livemarkdown.pdf")
})