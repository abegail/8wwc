function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
      dates.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
  
  const d1 = new Date('2022-09-18');
  const d2 = new Date('2022-11-12');

  const datesInRange = getDatesInRange(d1, d2)
  const dates = document.getElementsByClassName('date');

for(let i = 0; i < dates.length; i++) {
    dates[i].textContent = datesInRange[i];
}



const contentTest = document.getElementsByClassName('content');
console.log(contentTest);

for(let i=0; i<contentTest.length; i++) {
  for(j=0; j<4; j++) {
    let editableDiv = document.createElement('div');
    editableDiv.classList.add('editable');
    contentTest[i].appendChild(editableDiv);
  }
}

const editableCells = document.getElementsByClassName('editable');

for(let i=0; i<editableCells.length; i++) {
  editableCells[i].setAttribute('contenteditable', 'true');
}