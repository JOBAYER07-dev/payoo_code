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

// machine id > hide all > show id
function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashOut = document.getElementById('cashout');
  // sobaike hide kore daw
  addMoney.classList.add ("hidden")
  cashOut.classList.add ("hidden")
  // id wala element ta show koro
  const selected = document.getElementById(id);
  selected.classList.remove("hidden")
}