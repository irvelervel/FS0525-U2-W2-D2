const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const burn = function () {
  // :O
  document.querySelector('body').innerHTML = ''
}

// rendiamo funzionanti i bottoni sulle card dei cani
const hideCard = function (e) {
  console.log('CLICCATO BOTTONE', e)
  // e.target è il bottone che è stato cliccato, uno degli 8
  // grazie a questo riferimento spziale io sono in grado di risalire alla card
  // che lo contiene e la renderò trasparente
  console.log(e.target)
  //   console.log(e.target.parentElement.parentElement) // metodo pigro
  console.log(e.target.closest('.card')) // utilizzo un selettore CSS per risalire il dom
  const card = e.target.closest('.card') // le diamo un nome "card"
  card.classList.toggle('opacity-0') // rende l'elemento invisibile lasciando però
  //   l'ingombro originale nella pagina
}

// seleziono tutti i bottoni con classe "dog-button" al fine di renderli cliccabili
const allTheButtons = document.getElementsByClassName('dog-button')
console.log('ALLTHEBUTTONS', allTheButtons)
const allTheCards = document.getElementsByClassName('dog-card') // 3 cards

for (let i = 0; i < allTheButtons.length; i++) {
  allTheButtons[i].addEventListener('click', () => {
    console.log('CLICCATO DOG BUTTON')
    // funzionano! ora creiamo da 0 un elemento badge di bootstrap, e andremo
    // ad appenderlo alla card corrispondente al bottone premuto

    // <span class="badge rounded-pill text-bg-danger">NEW</span>
    const badge = document.createElement('span') //<span></span>
    badge.classList.add(
      'badge',
      'rounded-pill',
      'text-bg-danger',
      'position-absolute',
      'top-0',
      'start-100', // right: 0
      'translate-middle', // transform: translate(50%, -50%)
      'z-1'
    )
    badge.innerText = 'NEW' // <span class="badge rounded-pill text-bg-danger">NEW</span>
    // ora la devo appendere alla card corrispondente

    // allTheCards è una collezione di 3 cards
    // dico che alla pressione del primo bottone vado ad interagire con la prima card
    // alla pressione del secondo, la seconda e così via
    allTheCards[i].appendChild(badge)
  })
}
