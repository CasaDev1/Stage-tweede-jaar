function fetchData() {
  return fetch('data.json') // Pakt de content van de file
    .then(response => { // then > dan doet hij het volgende
      if (!response.ok) { // als response niet ok is, oftewel http code 200 (ok/succesvol) teruggeeft, doe dit
        throw new Error('Network response was not ok'); //gooit een foutmelding
      }
      return response.json(); // geeft de json in response terug
    })
    .catch(error => { //zoekt naar errors en pakt ze
      console.error('Error fetching data:', error); // gooit de error op, geeft hem aan de gebruiker in de browser console
    });
}

fetchData().then(array => { // als function is gerund, doe dan dit met variabele array welke de content is van wat de functie heeft teruggegeven
  if (array) { // als er in de functie een array zit, doe dan dit
    elements = ['reaction', 'memory', 'verbal', 'visual'] // pak alle categorien
    count = 0

    elements.forEach(element => { // voor elk element in de elements array
      document.querySelector(`.summary-block__stats-${element}--icon`).src = array[count].icon
      document.querySelector(`.summary-block__stats-${element}--text`).innerText = array[count].category
      document.querySelector(`.summary-block__stats-${element}__score--num`).innerText = array[count].score
      count++
    });
  }
});