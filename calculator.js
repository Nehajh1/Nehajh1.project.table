// Function to append characters to the display
function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and update the display with the result
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';  // Show error if there's an invalid expression
    }
}
