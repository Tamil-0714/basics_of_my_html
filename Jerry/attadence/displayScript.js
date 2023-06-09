let table = document.createElement('table');
table.classList.add('my-table');
let dummyJSON = localStorage.getItem('attadence_data')
let headName = localStorage.getItem('name');
document.querySelector("header").innerHTML = headName;
let newobj = JSON.parse(dummyJSON);
let headingRow = document.createElement('tr');
let headingCell1 = document.createElement('th');
let headingCell2 = document.createElement('th');
headingCell1.textContent = 'D.No';
headingCell2.textContent = 'No:Days';
headingRow.appendChild(headingCell1);
headingRow.appendChild(headingCell2);
table.appendChild(headingRow);
for (let i = 0; i < newobj.length; i++) {
  let row = document.createElement('tr');
  let keyCell = document.createElement('td');
  let valueCell = document.createElement('td');

  let key = Object.keys(newobj[i])[0];
  let value = newobj[i][key];

  keyCell.textContent = key;
  valueCell.textContent = value;

  row.appendChild(keyCell);
  row.appendChild(valueCell);
  table.appendChild(row);
}

document.body.appendChild(table);
