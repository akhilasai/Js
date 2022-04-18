let counterElement=document.getElementById("count")
console.log(counterElement)

const onIncrement=()=>{
    let previousCounterValue = counterElement.textContent;
    console.log(previousCounterValue)
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    console.log(updatedCounterValue)
    if (updatedCounterValue > 0) {
      counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
      counterElement.style.color = "red";
    }
    else {
      counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

const onDecrement=()=>{
    let previousCounterValue = counterElement.textContent;
    console.log(previousCounterValue)
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    console.log(updatedCounterValue)
    if (updatedCounterValue > 0) {
      counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
      counterElement.style.color = "red";
    }
    else {
      counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

const onReset=()=>{
    counterElement.textContent=0
    counterElement.style.color = "black";
}