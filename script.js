function emboldenText(inputText) {
    const boldUpperStart = 0x1D5D4; // Bold A
    const boldLowerStart = 0x1D5EE; // Bold a

    let result = "";

    for (const char of inputText) {
        const code = char.charCodeAt(0);

        // A–Z
        if (code >= 65 && code <= 90) {
            result += String.fromCodePoint(boldUpperStart + (code - 65));
        }
        // a–z
        else if (code >= 97 && code <= 122) {
            result += String.fromCodePoint(boldLowerStart + (code - 97));
        }
        // Other characters
        else {
            result += char;
        }
    }

    return result;
}

function convert(index) {
    const input = document.getElementById(`input${index}`).value;
    const output = emboldenText(input);
    document.getElementById(`output${index}`).value = output;
}

function copyText(index, button) {
    const outputBox = document.getElementById(`output${index}`);

    outputBox.select();
    outputBox.setSelectionRange(0, 99999); // Mobile support

    navigator.clipboard.writeText(outputBox.value).then(() => {
        const originalText = button.textContent;

        button.textContent = "Copied!";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    });
}
