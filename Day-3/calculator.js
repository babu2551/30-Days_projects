function appendValue(value){
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function cal() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = "error"

    }

    const button = document.getElementById('equal-to');
    button.style.backgroundColor = 'green';

    setTimeout(() => {
        button.style.backgroundColor = 'Orange';
    },100);
}




