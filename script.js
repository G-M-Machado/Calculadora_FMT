const form = document.querySelector("form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault()
  calcular()
})


let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operacao = document.getElementById("operacao");
let resposta = document.getElementById("resposta");

function calcular(){
    switch(operacao.value){
      case "+":
        soma()
        break;
      case "-":
        subtracao()
        break;
      case "/":
        divisao()
        break;
      case "*":
        multiplicacao()
        break;
      default:
            alert("Insira uma operação válida (+, -, *, /)");
    }
  }
  
  function soma(){
    let resultado = Number(num1.value.replace(",", ".")) + Number(num2.value.replace(",", "."));
    resposta.innerText = `${resultado}`
  }
  
  function subtracao(){
    let resultado = Number(num1.value.replace(",", ".")) - Number(num2.value.replace(",", "."))
    resposta.innerText = `${resultado}`
  }
  
  function divisao(){
    let resultado = Number(num1.value.replace(",", ".")) / Number(num2.value.replace(",", "."))
    resposta.innerText = `${resultado}`
  }
  
  function multiplicacao(){
    let resultado = Number(num1.value.replace(",", ".")) * Number(num2.value.replace(",", "."))
    resposta.innerText = `${resultado}`
  }

