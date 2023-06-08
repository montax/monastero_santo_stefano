//Domande da terminare.
const questions = [
  {
    question: "Su quale monte risiede il monastero?",
    optionA: "Monte Sudo",
    optionB: "Monte Peso",
    optionC: "Monte Parto",
    optionD: "Monte Pisa",
    correctOption: "optionB"
  },

  {
    question: "A chi ha dato ragione la Corte D'appello?",
    optionA: "Al comune",
    optionB: "Al privato",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  },

  {
    question: "Il primo documento che menziona la chiesa di S. Stefano risale al...",
    optionA: "1000 C.",
    optionB: "1100 C.",
    optionC: "1200 C.",
    optionD: "1300 C.",
    correctOption: "optionC"
  },

  {
    question: "Indica l'ordine di possessione del monastero che è avvenuto nel tempo corretto.",
    optionA: "Amministrazione comunale --> Gesuiti --> Gerolamini",
    optionB: "Gesuiti --> Gerolamini --> Amministrazione comunale",
    optionC: "Gesuiti --> Amministrazione comunale --> Gerolamini",
    optionD: "Gerolamini --> Gesuiti --> Amministrazione comunale",
    correctOption: "optionD"
  },

  {
    question: "Qual'è stata l'ultima famiglia a possedere il monastero?",
    optionA: "La famiglia dei Barbi",
    optionB: "La famiglia della Torre",
    optionC: "La famiglia della Sacra Colonna",
    optionD: "La famiglia dei Retiscoli",
    correctOption: "optionA"
  },

  {
    question: "Il comune per colpa della condanna dovrà pagare ________ euro.",
    optionA: "500.000",
    optionB: "1.000.000",
    optionC: "2.000.000",
    optionD: "900.000",
    correctOption: "optionB"
  },

  {
    question: "In che epoca fu costruito il monastero?",
    optionA: "Nel 1600",
    optionB: "Nel 1500",
    optionC: "Nel 1400",
    optionD: "Nel 1300",
    correctOption: "optionC"
  },

  {
    question: "I monaci gesuiti restaurarono il monastero. Vero o falso?",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionA"
  },

  {
    question: "Chi possiede il monastero?",
    optionA: "Lo Stato",
    optionB: "Il comune",
    optionC: "La chiesa",
    optionD: "Un privato",
    correctOption: "optionB"
  },

  {
    question: "Il proprietario ha avviato di recente un'opera di recupero degli arredi sacri al suo interno.",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  },

  {
    question: "Ad oggi (06/23) il monastero si trova chiuso e abbandonato a causa delle necessarie ristrutturazioni.",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionA"
  },

  {
    question: "Cos'è il TAR?",
    optionA: "Tecno-partito Avanzato di Ricorso",
    optionB: "Teologie di Architettura di Ripudio",
    optionC: "Tribuno Amministrato della Regione",
    optionD: "Tribunale Amministrativo Regionale",
    correctOption: "optionD"
  },

  {
    question: "Il monastero è stato acquistato ad un prezzo ___ ____ del suo valore effettivo",
    optionA: "Piu' alto",
    optionB: "Piu' basso",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  },

  {
    question: "Il monastero è attualmente aperto al pubblico. (2023)",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  },

  {
    question: "Grazie alla presenza di preziosi fregi e di interessanti particolari architettonici e ristrutturativi, l'edificio si presenta ancora come un luogo di grande fascino, ampiamente meritevole di una nuova e degna valorizzazione all'interno del patrimonio storico e architettonico bresciano.",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  },
  
  {
    question: "Tuttavia, ad oggi il monastero si trova chiuso e abbandonato a causa delle necessarie ristrutturazioni. Vero o Falso? (2023)",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionA"
  },

  {
    question: "Il restauro del monastero sarà un progetto che valorizzerà il patrimonio culturale della zona e contribuirà alla conservazione di questo luogo affascinante per le generazioni future.",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionA"
  },

  {
    question: "Nel monastero, in passato, venne instaurata una sacrestìa che era una stanza attigua alla chiesa nella quale si custodiscono gli arredi sacri che venne però, distrutta, nel 1631 sotto la ferocità dei francesi guidati da Filippo IV detto il bello.",
    optionA: "Vero",
    optionB: "Falso",
    optionC: null,
    optionD: null,
    correctOption: "optionB"
  }
]

//Configurazione del gioco
const qNumberValue = 3 //Numero di domande da mostrare



let shuffledQuestions = [] //Array dichiarato vuoto per contenere le domande mischiate

function handleQuestions() {
  //funzione per mischiare le domande e inserirle nell'array shuffledQuestions
  //il ciclo while continua a pushare domande nell'array shuffledQuestions finchè non raggiunge la lunghezza di qNumberValue
  while (shuffledQuestions.length <= (qNumberValue - 1)) {
    const random = questions[Math.floor(Math.random() * questions.length)]
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random)
    }
  }
}


let questionCurrent = 1 //mantiene il numero della domanda corrente
let playerScore = 0  //punteggio (risposte corrette) del giocatore inizializzato a 0  
let wrongAttempt = 0 //numero di risposte sbagliate del giocatore inizializzato a 0
let indexNumber = 0 //sarà usato per accedere alle domande nell'array shuffledQuestions e mostrare la prossima domanda

// funzione per mostrare la domanda successiva nel dom
// si occupa anche di mostrare il numero della domanda corrente e il punteggio del giocatore
// la funzione viene chiamata quando il bottone next viene cliccato
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]

  if (currentQuestion.optionC == null && currentQuestion.optionD == null) {
    document.getElementById("question-number").innerHTML = questionCurrent
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    //inviamo i dati solo all'opzione 1 e opzione 2, (optionA e optionB)
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA; // Vero
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB; // Falso
    //inviamo un carattere vuoto agli altri due elementi (optionC e optionD) in modo da sostituire i valori dell'eventuale domanda precedente
    document.getElementById("option-three-label").innerHTML = " ";
    document.getElementById("option-four-label").innerHTML = " ";
    //nascondiamo i label della domanda tre e quattro, in modo da nascondere totalmente gli elementi in modo graduale (grazie al transition 0.50s)
    document.getElementById("span-option-three-label").style.opacity = "0"
    document.getElementById("span-option-four-label").style.opacity = "0"
    //intervallo di 0.25 secondi
    setTimeout(() => {
      document.getElementById("span-option-three-label").style.zIndex = "-10"
      document.getElementById("span-option-four-label").style.zIndex = "-10"
    }, 500)
  }

  else {
    //rendiamo nuovamente visibili gli elementi precedentemente nascosti
    //da notare che non è detto che questi elementi siano stati nascosti, ma è necessario comunque rendere visibili gli elementi in modo da non avere problemi con le domande successive
    document.getElementById("span-option-three-label").style.zIndex = "inherit"
    document.getElementById("span-option-four-label").style.zIndex = "inherit"
    document.getElementById("span-option-three-label").style.opacity = "1"
    document.getElementById("span-option-four-label").style.opacity = "1"
    //inviamo i nuovi dati a tutti gli elementi (optionA, optionB, optionC, optionD)
    document.getElementById("question-number").innerHTML = questionCurrent
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  }
}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //ottiene la domanda corrente
  const currentQuestionAnswer = currentQuestion.correctOption //ottiene la risposta corretta dalla domanda corrente
  const options = document.getElementsByName("option"); //ottiene tutti gli elementi nel dom con il nome di 'option' (in questo caso gli input radio)
  let correctOption = null

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //ottiene l'id dell'elemento label che è il genitore dell'input radio
      correctOption = option.labels[0].id
    }
  })

  //controlla se una delle opzioni è stata selezionata
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
    document.getElementById('option-modal').style.display = "flex"
  }

  //controlla se la risposta data è corretta o meno e mostra il colore corrispondente
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "#008327be"
      playerScore++ //risposta corretta, dunque aggiungiamo un punto al punteggio del giocatore
      indexNumber++ //aggiorniamo l'indice in modo che punti alla domanda successiva
      //delay che permette all'utente di visualizzare la risposta corretta prima di passare alla domanda successiva
      setTimeout(() => {
        questionCurrent++
      }, 1000)
    }

    else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id
      document.getElementById(wrongLabelId).style.backgroundColor = "#c40000be"
      document.getElementById(correctOption).style.backgroundColor = "#008327be"
      wrongAttempt++ //risposta errata, dunque incrementiamo il numero di risposte errate
      indexNumber++
      //delay nel caso di risposta sbagliata che permette all'utente di visualizzare la risposta corretta prima di passare alla domanda successiva
      //leggermente più lungo del delay precedente per dare all'utente più tempo per leggere la risposta corretta prima di passare alla domanda successiva
      setTimeout(() => {
        questionCurrent++
      }, 1500)
    }
  })
}

//funzione richiamata quando viene premuto l'elemento button presente nel div con id next-button-container
function handleNextQuestion() {

  checkForAnswer() //controlliamo se il giocatore ha risposto correttamente o meno alla domanda corrente
  unCheckRadioButtons()
  //ritardo nella visualizzazione della domanda successiva per un secondo solo per alcuni effetti in modo che le domande non si affrettino sul giocatore
  //delay non necessario per il funzionamento, si può tranquillamente rimuovere se si desidera far sì che le domande cambino istantaneamente quando si preme il pulsante next
  //comunque sconsigliato poichè rende il quiz sotto un certo aspetto più piacevole e meno affrettato per l'utente
  setTimeout(() => {
    if (indexNumber <= (qNumberValue - 1)) {
      //mostra la domanda successiva fintanto che l'indice non è maggiore di 9, ricorda che l'indice parte da 0, dunque l'indice 9 è la domanda 10
      NextQuestion(indexNumber)
    }
    else {
      handleEndGame()//finisce il quiz se l'indice è maggiore di 9 e mostra il punteggio del giocatore
    }
    resetOptionBackground()
  }, 1500);
}

//funzione per resettare il colore di sfondo di tutte le opzioni a quello standard
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

//funzione per deselezionare tutti i pulsanti radio per la domanda successiva (può essere fatta anche con map o foreach loop)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

//funzione per quando tutte le domande vengono risposte
function handleEndGame() {
  let remark = null
  let remarkColor = null

  //controllo delle condizioni per il punteggio del giocatore e il colore del punteggio
  if (playerScore == 0) {
    remark = "Male. Sei sicuro di aver studiato?"
    remarkColor = "darkred"
  }
  else if (playerScore == 1) {
    remark = "Potresti fare di meglio."
    remarkColor = "red"
  }
  else if (playerScore == 2) {
    remark = "Quasi! Continua così."
    remarkColor = "orange"
  }
  else if (playerScore == 3) {
    remark = "Ottimo lavoro! Tutto corretto."
    remarkColor = "green"
  }
  const finalGrade = playerScore

  //dati da visualizzare nel modal del punteggio del giocatore
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade').innerHTML = finalGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//chiude il modal del punteggio e riavvia il quiz
function closeScoreModal() {
  questionCurrent = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//funzione per chiudere il modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}
