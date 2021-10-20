const input1 = document.getElementById("math-input1")
const mathResult = parseInt(document.getElementById("math-result").value)
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")

plusButton.addEventListener("click", add)
minusButton.addEventListener("click", subtract)

.operator.addEventListener("mouseover", function( event ) {
  event.target.style.color = "gray";
}, false);

function add(evt) {
  const result = parseInt(input1.value) + mathResult.value
  mathResult.textContent = result
}

function subtract(evt) {
  const result = parseInt(input1.value) - mathResult.value
  mathResult.textContent = result
}

