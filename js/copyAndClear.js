// Function to copy text from a field
async function copyText(id, alertId) {
    const element = document.getElementById(id);
    const text = element.nodeName === 'TEXTAREA' ? 'value' : 'textContent';

    try {
        await navigator.clipboard.writeText(element[text]);
        const alertElement = document.getElementById(alertId);
        alertElement.style.display = "block";
        setTimeout(function() {
            alertElement.style.display = "none";
        }, 3000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Function to clear text from a field
function clearText(id) {
    const element = document.getElementById(id);
    const text = element.nodeName === 'TEXTAREA' ? 'value' : 'textContent';
    element[text] = '';
}
