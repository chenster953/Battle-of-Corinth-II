// Create Objects
const zeus = {
  id: 6,
  name: "Zeus",
  picture: "zeus.jpg",
  health: 200,
  dmg: 100,
  alive: true
}
const jupiter = {
  id: 1,
  name: "Jupiter",
  picture: "jupiter.jpg",
  health: 200,
  dmg: 100,
  alive: true
}
const posiden = {
  id: 7,
  name: "Posiden",
  picture: "posiden.jpg",
  health: 250,
  dmg: 80,
  alive: true
}
const neptune = {
  id: 2,
  name: "Neptune",
  picture: "neptune.jpg",
  health: 250,
  dmg: 80,
  alive: true
}
const hades = {
  id: 8,
  name: "Hades",
  picture: "hades.jpg",
  health: 160,
  dmg: 70,
  alive: true
}
const pluto = {
  id: 3,
  name: "Pluto",
  picture: "pluto.jpg",
  health: 160,
  dmg: 70,
  alive: true
}
const ares = {
  id: 9,
  name: "Ares",
  picture: "ares.jpg",
  health: 150,
  dmg: 120,
  alive: true
}
const mars = {
  id: 4,
  name: "Mars",
  picture: "mars.jpg",
  health: 150,
  dmg: 120,
  alive: true
}
const athena = {
  id: 10,
  name: "Athena",
  picture: "athena.jpg",
  health: 170,
  dmg: 50,
  alive: true
}
const minerva = {
  id: 5,
  name: "Minerva",
  picture: "minerva.jpg",
  health: 170,
  dmg: 50,
  alive: true
}
// Constructor function for Objects
function God(data) {
  Object.assign(this, data);
  this.makeGodHtml = ()=> {
    // Assign variables to this
    const { id, name, picture, health, dmg } = this;
    // Render HTML using template strings
    document.getElementById(id).innerHTML = 
    `<h4 class="name">${this.name}</h4>
    <img class="picture" src="${picture}"/>
    <div class="stats">
      <div class="health">
        <div class="hp-icon">💚</div>
        <div class="hp">${this.health}</div>
      </div>
      <div class="damage">
        <div class="dmg-icon">⚔️</div>
        <div class="dmg">${this.dmg}</div>
      <div/>
    </div>`
  }
}
// Create new instance of God(object)
const zeusE1 = new God(zeus);
const posidenE1 = new God(posiden);
const hadesE1 = new God(hades);
const aresE1 = new God(ares);
const athenaE1 = new God(athena);
const jupiterE1 = new God(jupiter);
const neptuneE1 = new God(neptune);
const plutoE1 = new God(pluto);
const marsE1 = new God(mars);
const minervaE1 = new God(minerva);

// Use method to render HTML
zeusE1.makeGodHtml();
posidenE1.makeGodHtml();
hadesE1.makeGodHtml();
aresE1.makeGodHtml();
athenaE1.makeGodHtml();
jupiterE1.makeGodHtml();
neptuneE1.makeGodHtml();
plutoE1.makeGodHtml();
marsE1.makeGodHtml();
minervaE1.makeGodHtml();

let answers = [];
let points = 0;
let correct_answer = []
let question = []
let i = 0;
let d = 0;
let damage = 0
let category = 20;
let difficulty = ['easy', 'medium', 'hard']
const pointsHTML = document.querySelector(".points");
const endTurn = document.querySelector(".endturn");

// Attack button renders questions container
const attack = document.querySelector(".attack");
attack.addEventListener("click", ()=> {
  document.querySelector(".questions-container").classList.remove("active");
  document.querySelector(".my-container").classList.add("active");
  document.querySelector(".opponent-container").classList.add("active");
  renderPopup();
  d++;
  if (d > 2) {
    d = 0;
    category = 10;
  }
})

// Display question and answers in popup
function renderPopup() {
  fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty[d]}&type=multiple`)
  .then((response) => response.json())
  .then((data) => {
    answers.push(data.results[0].correct_answer, data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2]);
    question.push(data.results[0].question)
    correct_answer.push(answers[0])
    console.log(correct_answer)
    // Randomize correct answer placement
      let placeholder = answers[0];
      let randomNum = Math.floor(Math.random() * 4);
      answers[0] = answers[randomNum];
      answers[randomNum] = placeholder;
      // Render HTML
      renderQuestions();
      // Check if answer is correct
      checkAnswers();
      function checkAnswers() {
      const option1 = document.querySelector(".option1");
      const option2 = document.querySelector(".option2");
      const option3 = document.querySelector(".option3");
      const option4 = document.querySelector(".option4");
      option1.addEventListener("click", ()=> {
        if (option1.innerHTML == correct_answer) {
          points++;
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        } else {
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        }
      })
      option2.addEventListener("click", ()=> {
        if (option2.innerHTML == correct_answer) {
          points++;
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        } else {
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        }
      })
      option3.addEventListener("click", ()=> {
        if (option3.innerHTML == correct_answer) {
          points++;
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        } else {
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        }
      })
      option4.addEventListener("click", ()=> {
        if (option4.innerHTML == correct_answer) {
          points++;
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        } else {
          clear();
          renderNext();
          renderQuestions();
          checkAnswers();
        }
      })
      function renderNext() {
        if (i < 9) {
          i++;
          answers.push(data.results[i].correct_answer, data.results[i].incorrect_answers[0], data.results[i].incorrect_answers[1], data.results[i].incorrect_answers[2]);
          question.push(data.results[i].question)
          correct_answer.push(answers[0])
          console.log(i)
          console.log(correct_answer)
          // Randomize correct answer placement
            let placeholder = answers[0];
            let randomNum = Math.floor(Math.random() * 4);
            answers[0] = answers[randomNum];
            answers[randomNum] = placeholder;
        } else {
          document.querySelector(".questions-container").classList.add("active");
          document.querySelector(".my-container").classList.remove("active");
          document.querySelector(".opponent-container").classList.remove("active");
          points *= 15;
          pointsHTML.innerHTML = `Damage Points: ${points}`;
          attack.classList.add("active");
          endTurn.classList.remove("active");
        }
      }
  }})
}
function clear() {
  answers = [];
  correct_answer = [];
  question = [];
}
function renderQuestions() {
  document.querySelector(".questions-container").innerHTML = 
  `<div class="question"><h1>${question}</h1></div>
  <div class="options">
    <div><button class="option1">${answers[0]}</button></div>
    <div><button class="option2">${answers[1]}</button></div>
    <div><button class="option3">${answers[2]}</button></div>
    <div><button class="option4">${answers[3]}</button></div>
  </div>`
}
const zeusCard = document.querySelector(".opp1");
const posidenCard = document.querySelector(".opp2");
const hadesCard = document.querySelector(".opp3");
const aresCard = document.querySelector(".opp4");
const athenaCard = document.querySelector(".opp5");

const oppCards = [zeusCard, posidenCard, hadesCard, aresCard, athenaCard]

const jupiterCard = document.querySelector(".me1");
const neptuneCard = document.querySelector(".me2");
const plutoCard = document.querySelector(".me3");
const marsCard = document.querySelector(".me4");
const minervaCard = document.querySelector(".me5");

const myCards = [jupiterCard, neptuneCard, plutoCard, marsCard, minervaCard]

jupiterCard.addEventListener("click", ()=> {
  if (points >= jupiter.dmg) {
    damage = jupiter.dmg;
    targetLock();
  }
})
neptuneCard.addEventListener("click", ()=> {
  if (points >= neptune.dmg) {
    damage = neptune.dmg;
    targetLock();
  }
})
plutoCard.addEventListener("click", ()=> {
  if (points >= pluto.dmg) {
    damage = pluto.dmg;
    targetLock();
  }
})
marsCard.addEventListener("click", ()=> {
  if (points >= mars.dmg) {
    damage = mars.dmg;
    targetLock();
  }
})
minervaCard.addEventListener("click", ()=> {
  if (points >= minerva.dmg) {
    damage = minerva.dmg;
    targetLock();
  }
})

function targetLock() {
  zeusCard.addEventListener("click", ()=> {
    zeus.health -= damage;
    if (zeus.health <= 0) {
      zeus.health = 0;
      zeus.alive = false;
      zeusCard.classList.add("active");
    }
    points -= damage;
    const zeusE1 = new God(zeus);
    zeusE1.makeGodHtml();
    pointsHTML.innerHTML = `Damage Points: ${points}`
    used();
    damage = 0;
  })
  posidenCard.addEventListener("click", ()=> {
    posiden.health -= damage;
    if (posiden.health <= 0) {
      posiden.health = 0;
      posiden.alive = false;
      posidenCard.classList.add("active")
    }
    points -= damage;
    const posidenE1 = new God(posiden);
    posidenE1.makeGodHtml();
    pointsHTML.innerHTML = `Damage Points: ${points}`
    used();
    damage = 0;
  })
  hadesCard.addEventListener("click", ()=> {
    hades.health -= damage;
    if (hades.health <= 0) {
      hades.health = 0;
      hades.alive = false;
      hadesCard.classList.add("active")
    }
    points -= damage;
    const hadesE1 = new God(hades);
    hadesE1.makeGodHtml();
    pointsHTML.innerHTML = `Damage Points: ${points}`
    used();
    damage = 0;
  })
  aresCard.addEventListener("click", ()=> {
    ares.health -= damage;
    if (ares.health <= 0) {
      ares.health = 0;
      ares.alive = false;
      aresCard.classList.add("active")
    }
    points -= damage;
    const aresE1 = new God(ares);
    aresE1.makeGodHtml();
    pointsHTML.innerHTML = `Damage Points: ${points}`
    used();
    damage = 0;
  })
  athenaCard.addEventListener("click", ()=> {
    athena.health -= damage;
    if (athena.health <= 0) {
      athena.health = 0;
      athena.alive = false;
      athenaCard.classList.add("active");
    }
    points -= damage;
    const athenaE1 = new God(athena);
    athenaE1.makeGodHtml();
    pointsHTML.innerHTML = `Damage Points: ${points}`
    used();
    damage = 0;
  })
}

function used() {
  if (damage == jupiter.dmg) {
    jupiterCard.classList.add("active");
  }
  if (damage == neptune.dmg) {
    neptuneCard.classList.add("active");
  }
  if (damage == pluto.dmg) {
    plutoCard.classList.add("active");
  }
  if (damage == mars.dmg) {
    marsCard.classList.add("active");
  }
  if (damage == minerva.dmg) {
    minervaCard.classList.add("active");
  }  
}
// OPPONENT CARD BRIGHTNESS DECREASES DURING ATTACK
// OPPONENT ATTACKS WITH RANDOM NUM FROM 10-40
endTurn.addEventListener("click", ()=> {
  opponentAttack();
  i = 0;
  points = 0;
  console.log(oppCards)
  win();
})
function opponentAttack() {
  setTimeout(() => {
    zeusCard.classList.add("active");
  }, 600);
  setTimeout(() => {
    posidenCard.classList.add("active");
  }, 1200);
  setTimeout(() => {
    hadesCard.classList.add("active");
  }, 1800);
  setTimeout(() => {
    aresCard.classList.add("active");
  }, 2400);
  setTimeout(() => {
    athenaCard.classList.add("active");
  }, 3000);
  setTimeout(() => {
    zeusCard.classList.remove("active");
    posidenCard.classList.remove("active");
    hadesCard.classList.remove("active");
    aresCard.classList.remove("active");
    athenaCard.classList.remove("active");
    let opponentDmg = Math.floor(Math.random() * 40) + 10;
    if (true) {
      jupiter.health -= opponentDmg;
      const jupiterE1 = new God(jupiter);
      jupiterE1.makeGodHtml();
      pointsHTML.innerHTML = `Damage Points: ${points}`
    }
    if (true) {
      neptune.health -= opponentDmg;
      const neptuneE1 = new God(neptune);
      neptuneE1.makeGodHtml();
      pointsHTML.innerHTML = `Damage Points: ${points}`
    }
    if (true) {
      pluto.health -= opponentDmg;
      const plutoE1 = new God(pluto);
      plutoE1.makeGodHtml();
      pointsHTML.innerHTML = `Damage Points: ${points}`
    }
    if (true) {
      mars.health -= opponentDmg;
      const marsE1 = new God(mars);
      marsE1.makeGodHtml();
      pointsHTML.innerHTML = `Damage Points: ${points}`
    }
    if (true) {
      minerva.health -= opponentDmg;
      const minervaE1 = new God(minerva);
      minervaE1.makeGodHtml();
      pointsHTML.innerHTML = `Damage Points: ${points}`
    }
    attack.classList.remove("active");
    checkIfDead();
    refreshCards();
    lose();
  }, 4000);
  endTurn.classList.add("active");
}
function checkIfDead() {
  if (jupiter.health <= 0) {
    jupiter.alive = false;
    jupiter.health = 0;
    myCards.pop(jupiterCard)
  }
  if (neptune.health <= 0) {
    neptune.alive = false;
    neptune.health = 0;
    myCards.pop(neptuneCard)
  }
  if (pluto.health <= 0) {
    pluto.alive = false;
    pluto.health = 0;
    myCards.pop(plutoCard)
  }
  if (mars.health <= 0) {
    mars.alive = false;
    mars.health = 0;
    myCards.pop(marsCard)
  }
  if (minerva.health <= 0) {
    minerva.alive = false;
    minerva.health = 0;
    myCards.pop(minervaCard)
  }
}
function refreshCards() {
  if (zeus.alive === true) {
    zeusCard.classList.remove("active");
  } else {
    zeusCard.classList.add("active");
  }
  if (posiden.alive === true) {
    posidenCard.classList.remove("active");
  } else {
    posidenCard.classList.add("active");
  }
  if (hades.alive === true) {
    hadesCard.classList.remove("active");
  } else {
    hadesCard.classList.add("active");
  }
  if (ares.alive === true) {
    aresCard.classList.remove("active");
  } else {
    aresCard.classList.add("active");
  }
  if (athena.alive === true) {
    athenaCard.classList.remove("active");
  } else {
    athenaCard.classList.add("active");
  }
  if (jupiter.alive === true) {
    jupiterCard.classList.remove("active");
  } else {
    jupiterCard.classList.add("active");
  }
  if (neptune.alive === true) {
    neptuneCard.classList.remove("active");
  } else {
    neptuneCard.classList.add("active");
  }
  if (pluto.alive === true) {
    plutoCard.classList.remove("active");
  } else {
    plutoCard.classList.add("active");
  }
  if (mars.alive === true) {
    marsCard.classList.remove("active");
  } else {
    marsCard.classList.add("active");
  }
  if (minerva.alive === true) {
    minervaCard.classList.remove("active");
  } else {
    minervaCard.classList.add("active");
  }
}
// VICTORY SCREEN, DEFEAT SCREEN
function win() {
  if (zeus.alive === false && posiden.alive === false && hades.alive === false && ares.alive === false && athena.alive === false) {
    document.querySelector(".victory").classList.remove("active");
    console.log(oppCards)
  }
}
function lose() {
  if (jupiter.alive === false && neptune.alive === false && pluto.alive === false && mars.alive === false && minerva.alive === false) {
    document.querySelector(".defeat").classList.remove("active");
  }
}