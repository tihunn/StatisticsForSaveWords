// table.js

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('words', (result) => {
        let words = result.words || [];

        let tableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];

        words.forEach( (word) => {
            let row = document.createElement('tr');
            let wordCell = document.createElement('td');


            wordCell.textContent = word;
            // You can populate the additional info cell as needed

            row.appendChild(wordCell);

            tableBody.appendChild(row);
        });
    });
});