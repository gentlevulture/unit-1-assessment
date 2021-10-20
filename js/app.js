const input1 = document.getElementById("math-input1")
const mathResult =document.getElementById("math-result")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")

plusButton.addEventListener("click", add)
minusButton.addEventListener("click", subtract)

function add(evt) {
  const result = parseInt(input1.value) + parseInt(mathResult.innerHTML)
  mathResult.textContent = result
}

function subtract(evt) {
  const result = parseInt(mathResult.innerHTML) - parseInt(input1.value)
  mathResult.textContent = result 
}

