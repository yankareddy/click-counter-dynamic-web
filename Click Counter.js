const addCountButton = document.getElementById("incrementBtn");
const mainContainer = document.getElementById("clickCounterContainer");
let counterValue = document.getElementById("counterValue");

function addValue() {

    const counter = parseInt(counterValue.textContent);

    const updatedCountValue = counter + 1;
    counterValue.textContent = updatedCountValue;
    localStorage.setItem("clickCount", updatedCountValue);
}



addCountButton.onclick = function() {
    addValue();
}