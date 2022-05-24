const rollBtn = document.getElementById("submit");
let userNumbers = [];
let AINumbers = [];
const minDice = 1;
const maxDice = 6;
let rollNum = 0;
let rollValid = true;


rollBtn.addEventListener("click", function () {
  let userNum = 0;
  let AINum = 0;
  rollNum = Math.floor(Math.random() * 10) + 1;
  console.log(rollNum);

  for (let i = 1; i <= rollNum; i++) {
    userNum += Math.floor(Math.random() * maxDice) + minDice;
    AINum += Math.floor(Math.random() * maxDice) + minDice;
  }
  console.log(userNum);
  console.log(AINum);

  if (userNum > AINum) {
    alert("Ha vinto l'umano!")
  } else if (AINum > userNum) {
    alert("Ha vinto il robot.")
  } else {
    alert("Non ha vinto nessuno.")
  }
});