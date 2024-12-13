// Select the input and output elements
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

// Commands mapping (example, you can expand this)
const commands = {
    'help': 'Available commands: help, clear, repo',
    'clear': () => {
        outputElement.innerHTML = '';
    },
    'repo': () => {
        outputElement.innerHTML += '\nGitHub Repository: <a href="https://github.com/Gxdsins/Gxdsins-Terminal" target="_blank">Gxdsins Terminal</a>';
    }
};

// Handle input
inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = inputElement.value.trim().toLowerCase();
        inputElement.value = '';
        
        if (commands[command]) {
            // If command exists, execute it
            if (typeof commands[command] === 'function') {
                commands[command]();
            } else {
                outputElement.innerHTML += `\n${commands[command]}`;
            }
        } else {
            outputElement.innerHTML += `\nCommand not found. Type 'help' for available commands.`;
        }

        // Keep the terminal scrollable
        outputElement.scrollTop = outputElement.scrollHeight;
    }
});

// Focus on the input field when the page loads
window.onload = () => {
    inputElement.focus();
};
