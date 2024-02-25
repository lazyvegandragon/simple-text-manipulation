function adjustHeight() {
    var textArea = document.getElementById('userInput');
    textArea.style.height = "";
    textArea.style.height = textArea.scrollHeight + 3 + "px";
}

document.getElementById('userInput').addEventListener('input', adjustHeight);
window.addEventListener('resize', adjustHeight);
