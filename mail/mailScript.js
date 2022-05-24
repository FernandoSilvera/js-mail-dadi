const emails = [
  "fernando.silvera02@gmail.com",
  "luca.rosso@outlook.it",
  "matteoricci007@yahoo.it",
  "marco.bernini1996@libero.it",
  "claudia.tavano01@gmail.com"
]
let emailCheck = false;

const email = prompt("Inserisci la tua mail");

for (i = 0; i <= (emails.length - 1); i++) {
  if (email === emails[i]) {
    emailCheck = true;
  }
}

if (emailCheck) {
  alert("La tua mail è presente nel database!");
} else {
  alert("La tua mail NON è presente nel database.");
}