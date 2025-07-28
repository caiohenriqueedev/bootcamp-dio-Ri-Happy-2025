const choices = ["dragao", "mago", "exodia"];
const results = {
  dragao: { vence: "mago", perde: "exodia" },
  mago: { vence: "exodia", perde: "dragao" },
  exodia: { vence: "dragao", perde: "mago" },
};

const buttons = document.querySelectorAll("button");
const playerSpan = document.getElementById("player-choice");
const cpuSpan = document.getElementById("cpu-choice");
const resultDisplay = document.getElementById("result");

function getCpuChoice() {
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function jogar(playerChoice) {
  const cpuChoice = getCpuChoice();

  playerSpan.textContent = formatar(playerChoice);
  cpuSpan.textContent = formatar(cpuChoice);

  if (playerChoice === cpuChoice) {
    exibirResultado("Empate!");
  } else if (results[playerChoice].vence === cpuChoice) {
    exibirResultado("Você venceu! 🔥");
  } else {
    exibirResultado("Você perdeu! 💀");
  }
}

function exibirResultado(texto) {
  resultDisplay.textContent = `Resultado: ${texto}`;
}

function formatar(choice) {
  return {
    dragao: "Dragão Branco",
    mago: "Mago Negro",
    exodia: "Exodia"
  }[choice];
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => jogar(btn.dataset.choice));
});
