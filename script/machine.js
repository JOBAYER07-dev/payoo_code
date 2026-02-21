function getValueFromInput(id) {
  const input = document.getElementById(id)
  const returnValue = input.value;
  // console.log(returnValue);
  return returnValue;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.getElementById("balance")
  const balance = balanceElement.innerText;
  // console.log(returnInnerText);
  return Number(balance);
}

// machine value -> set balace
function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
  
}