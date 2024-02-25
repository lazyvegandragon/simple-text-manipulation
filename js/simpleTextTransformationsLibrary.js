// Define the transformation functions
function lowerCase(text) {
    return text.trim().toLowerCase();
}

function upperCase(text) {
    return text.trim().toUpperCase();
}

function sarcasmCase(text) {
    var lastThree = [false, false, false]; // Keep track of the case of the last three characters
    return text.split('').map(function (c) {
        var isUpper = Math.random() > 0.5;
        if (lastThree[0] === lastThree[1] && lastThree[1] === lastThree[2]) {
            // If the last three characters are the same case, flip the case of the current character
            isUpper = !lastThree[0];
        }
        lastThree.shift(); // Remove the oldest case
        lastThree.push(isUpper); // Add the current case
        return isUpper ? c.toUpperCase() : c.toLowerCase();
    }).join('');
}

function titleCase(text) {
    var minorWords = ["and", "as", "but", "for", "if", "nor", "or", "so", "yet", "a", "an", "the", "as", "at", "by", "for", "in", "of", "off", "on", "per", "to", "up", "via"];
    return text.trim().split(' ').map(function (word, index, arr) {
        if (index === 0 || index === arr.length - 1 || word.length > 3 || minorWords.indexOf(word.toLowerCase()) === -1) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    }).join(' ');
}

function sentenceCase(text) {
    return text.toLowerCase().trim().replace(/(^\w{1}|\.\s*\w{1})/gi, function (toReplace) {
        return toReplace.toUpperCase();
    });
}

function oddLowerCase(text) {
    return text.trim().split('').map(function (char, index) {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}

function oddUpperCase(text) {
    return text.trim().split('').map(function (char, index) {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}

function inverseCase(text) {
    return text.trim().split('').map(function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}

function camelCase(text) {
    var result = text.trim().toLowerCase().replace(/[^a-zA-Z0-9čšžćđČŠŽĆĐ ]/g, '').replace(/\s+/g, ' ').split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
    return result.charAt(0).toLowerCase() + result.slice(1);
}

function pascalCase(text) {
    return text.trim().toLowerCase().replace(/[^a-zA-Z0-9čšžćđČŠŽĆĐ ]/g, '').replace(/\s+/g, ' ').split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

function kebabCase(text) {
    return text.trim().toLowerCase().replace(/[^a-zA-Z0-9čšžćđČŠŽĆĐ ]/g, '').replace(/\s+/g, ' ').replace(/ /g, '-');
}

function snakeCase(text) {
    return text.trim().toLowerCase().replace(/[^a-zA-Z0-9čšžćđČŠŽĆĐ ]/g, '').replace(/\s+/g, ' ').replace(/ /g, '_');
}

function bionicReading(text) {
    return text.trim().split(' ').map(function (word) {
        var boldLength = Math.floor(word.length / 2); // Half of the word length, rounded down
        var boldPart = word.slice(0, boldLength);
        var normalPart = word.slice(boldLength);
        return '<b>' + boldPart + '</b>' + normalPart;
    }).join(' ');
}

function stripHtml(text) {
    var div = document.createElement("div");
    div.innerHTML = text;
    var strippedText = div.textContent || div.innerText || "";
    return strippedText.replace(/[\r\n]+/g, '');
}

function textToMorse(text) {
    var morseCode = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
    };
    return text.trim().toLowerCase().split('').map(function(char) {
        return morseCode[char] ? morseCode[char] + ' ' : '';
    }).join(' ');
}

function morseToText(morse) {
    var textCode = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '/': ' '
    };
    return morse.trim().split(' ').map(function (char) {
        return textCode[char] || '';
    }).join('');
}

function removeExtraSpaces(text) {
    return text.trim().replace(/\s+/g, ' ');
}

function textToBinaryASCII(text) {
    return text.trim().split('').map(function (char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function binaryASCIIToText(binary) {
    return binary.split(' ').map(function (bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

function decimalToBinary(number) {
    return parseInt(number, 10).toString(2);
}

function binaryToDecimal(binary) {
    if (!/^[01]+$/.test(binary)) {
        return 'Error: Input is not a valid binary number.';
    }
    return parseInt(binary, 2).toString(10);
}

function textToBraille(text) {
    var brailleAlphabet = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽', 'z': '⠵', ' ': '⠀', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉', '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋', '7': '⠼⠛', '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚', '.': '⠲', ',': '⠂', '?': '⠦', '!': '⠖', "'": '⠄', '"': '⠐⠂'
    };
    return text.trim().toLowerCase().split('').map(function(char) {
        return brailleAlphabet[char] ? brailleAlphabet[char] + ' ' : '';
    }).join('');
}

function brailleToText(braille) {
    var textAlphabet = {
        '⠁': 'a', '⠃': 'b', '⠉': 'c', '⠙': 'd', '⠑': 'e', '⠋': 'f', '⠛': 'g', '⠓': 'h', '⠊': 'i', '⠚': 'j', '⠅': 'k', '⠇': 'l', '⠍': 'm', '⠝': 'n', '⠕': 'o', '⠏': 'p', '⠟': 'q', '⠗': 'r', '⠎': 's', '⠞': 't', '⠥': 'u', '⠧': 'v', '⠺': 'w', '⠭': 'x', '⠽': 'y', '⠵': 'z', '⠀': ' ', '⠼⠁': '1', '⠼⠃': '2', '⠼⠉': '3', '⠼⠙': '4', '⠼⠑': '5', '⠼⠋': '6', '⠼⠛': '7', '⠼⠓': '8', '⠼⠊': '9', '⠼⠚': '0', '⠲': '.', '⠂': ',', '⠦': '?', '⠖': '!', '⠄': "'", '⠐⠂': '"'
    };
    return braille.trim().split(' ').map(function(char) {
        return textAlphabet[char] || '';
    }).join('');
}

