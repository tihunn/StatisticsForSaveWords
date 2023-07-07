// table.js

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('tableWords', (result) => {
        let words = result.tableWords || [];

        let tableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];

        words.forEach( (rowWord) => {
            let row = document.createElement('tr');
            let markCell = document.createElement('td')
            let wordCell = document.createElement('td');
            let numRepCell = document.createElement('td')
            let bestTimeCell = document.createElement('td')
            let lvlRepeatCell = document.createElement('td')
            let timeUpdateCell = document.createElement('td')
            let firstAddCell = document.createElement('td')
            let allTimeCell = document.createElement('td')

            markCell.textContent = rowWord.mark;
            wordCell.textContent = rowWord.word;
            numRepCell.textContent = rowWord.numRep;
            lvlRepeatCell.textContent = rowWord.lvlRepeat;
            timeUpdateCell.textContent = rowWord.timeUpdate;
            firstAddCell.textContent = rowWord.firstAdd;


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