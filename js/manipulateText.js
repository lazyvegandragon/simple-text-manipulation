// Global variable to keep track of the currently selected transformation
var currentTransformation = 'lowerCase';
var timeoutId; // Variable to store the timeout ID

// Define the manipulateText function
function manipulateText(caseType) {
    var transformationFunction;

    // Determine which transformation function to use
    switch (caseType || currentTransformation) {
        case 'lowerCase':
            transformationFunction = lowerCase;
            break;
        case 'upperCase':
            transformationFunction = upperCase;
            break;
        case 'sarcasmCase':
            transformationFunction = sarcasmCase;
            break;
        case 'titleCase':
            transformationFunction = titleCase;
            break;
        case 'sentenceCase':
            transformationFunction = sentenceCase;
            break;
        case 'oddLowerCase':
            transformationFunction = oddLowerCase;
            break;
        case 'oddUpperCase':
            transformationFunction = oddUpperCase;
            break;
        case 'inverseCase':
            transformationFunction = inverseCase;
            break;
        case 'camelCase':
            transformationFunction = camelCase;
            break;
        case 'pascalCase':
            transformationFunction = pascalCase;
            break;
        case 'kebabCase':
            transformationFunction = kebabCase;
            break;
        case 'snakeCase':
            transformationFunction = snakeCase;
            break;
        case 'bionicReading':
            transformationFunction = bionicReading;
            break;
        case 'stripHtml':
            transformationFunction = stripHtml;
            break;
        case 'textToMorse':
            transformationFunction = textToMorse;
            break;
        case 'morseToText':
            transformationFunction = morseToText;
            break;
        case 'removeExtraSpaces':
            transformationFunction = removeExtraSpaces;
            break;
        case 'textToBinaryASCII':
            transformationFunction = textToBinaryASCII;
            break;
        case 'binaryASCIIToText':
            transformationFunction = binaryASCIIToText;
            break;
        case 'decimalToBinary':
            transformationFunction = decimalToBinary;
            break;
        case 'binaryToDecimal':
            transformationFunction = binaryToDecimal;
            break;
        case 'textToBraille':
            transformationFunction = textToBraille;
            break;
        case 'brailleToText':
            transformationFunction = brailleToText;
            break;
    }

    var inputText = document.getElementById('userInput').value;
    var outputText = transformationFunction(inputText);
    document.getElementById('outputText').innerHTML = outputText;

    // Copy the output text to the clipboard
    navigator.clipboard.writeText(outputText).then(function () {
        // Show the copy alert
        var copyAlert = document.getElementById('copyOutputAlert');
        copyAlert.style.display = 'block';

        // Clear the previous timeout
        clearTimeout(timeoutId);

        // Hide the copy alert after 3 seconds
        timeoutId = setTimeout(function () {
            copyAlert.style.display = 'none';
        }, 3000);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}

// Remove the 'active' class from all buttons
function clearActiveClass() {
    document.querySelectorAll('.function-button').forEach(function (button) {
        button.classList.remove('active');
    });
}

// Add event listeners to the buttons
document.querySelectorAll('.function-button').forEach(function (button) {
    button.addEventListener('click', function () {
        clearActiveClass();
        currentTransformation = this.id;
        this.classList.add('active');
        manipulateText();
    });
});

// Set the first button as active when the page loads
window.onload = function () {
    var firstButton = document.querySelector('.function-button');
    firstButton.classList.add('active');
    currentTransformation = firstButton.id;
    manipulateText();
};
