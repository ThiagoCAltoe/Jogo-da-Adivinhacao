const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const errou1 = document.querySelector(".errou1")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos //
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enterPress)

// Funções callback //
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão //

  const inputNumber = document.querySelector("#inputNumber")

  if (
    Number(inputNumber.value) < 0 ||
    Number(inputNumber.value) > 10 ||
    (!Number(inputNumber.value) && Number(inputNumber.value) != 0) ||
    inputNumber.value == ""
  ) {
    alert("Por favor insira um número de 0 a 10!")
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector(
        "h2"
      ).innerText = `Acertou em ${xAttempts} tentativas`
    } else {
      screen1.querySelector(".errou1").innerText = `Você errou ${xAttempts} x`
      inputNumber.value = ""
      xAttempts++
    }
  }
}

function enterPress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  errou1.classList.add("hide")
}
