document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault()

    const inputNumber = Number(document.getElementById('inputField').value)

    if (inputNumber > 0) {
        let tableHTML = '<table><tr><th>Multiplier</th><th>Result</th></tr>'

        for (let i = 1; i <= 50; i++) {
            tableHTML += `<tr><td>${inputNumber} x ${i}</td><td>${inputNumber * i}</td></tr>`
        }

        tableHTML += '</table>';
        document.getElementById('tableContainer').innerHTML = tableHTML;
    } else {
        alert('Please enter a valid positive number.');
    }
};
