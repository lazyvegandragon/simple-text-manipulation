function copyText() {
    var textarea = document.getElementById('inputText');
    textarea.select();
    document.execCommand('copy');
}
function clearText() {
    document.getElementById('inputText').value = '';
}