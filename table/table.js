// table.js

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('words', (result) => {
        let words = result.words || [];

        let tableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];

        words.forEach( (word) => {
            let row = document.createElement('tr');
            let markCell = document.createElement('td')
            let wordCell = document.createElement('td');
            let numRepCell = document.createElement('td')
            let bestTimeCell = document.createElement('td')
            let lvlRepeatCell = document.createElement('td')
            let timeUpdateCell = document.createElement('td')
            let firstAddCell = document.createElement('td')
            let allTimeCell = document.createElement('td')

            wordCell.textContent = word;

            row.appendChild(markCell);
            row.appendChild(wordCell);
            row.appendChild(numRepCell);
            row.appendChild(bestTimeCell);
            row.appendChild(lvlRepeatCell);
            row.appendChild(timeUpdateCell);
            row.appendChild(firstAddCell);
            row.appendChild(allTimeCell);

            tableBody.appendChild(row);
        });
    });
});