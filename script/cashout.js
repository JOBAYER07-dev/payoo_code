/*
document.getElementById('withdraw-btn').addEventListener("click", function () {
  // 1. get the ageent number & validate
  const cashoutNumberInput = document.getElementById('agent-num');
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  if (cashoutNumber.length !== 11) {
    alert("Invalid Number");
    return
  }
  // 2. get the amount , validate , convert to number
  const cashoutAmountInput = document.getElementById('amount');
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount)
  // 3. get the current balace , validate , convert to number
  const balaceElement = document.getElementById('balace');
  const cheakBalace = balaceElement.innerText;
  console.log(cheakBalace);
  // 4. calculate the new balace
  const newBalace = Number(cheakBalace) - Number(cashoutAmount);
  if (newBalace < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5. get the pin and verify
  const verifyPinInput = document.getElementById('cashout-pin');
  const verifyPin = verifyPinInput.value;
  if (verifyPin === "1234") {
    // 5-1. if true show cashout succesfull massage and ser new balace
    alert("CashOut Successfull")
    console.log("new balace :", newBalace);
    balaceElement.innerText = newBalace;
  } else {
    // 5-2. else false show eror massage and return 
    alert("Invalid Pin")
    return;
  }
})

*/

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput('agent-num');
  // console.log(cashoutNumber);
  if (cashoutNumber.length !== 11) {
    alert("Invalid Number");
    return;
  }
  // 2.get the amount
  const cashoutAmount = getValueFromInput('amount');
  // console.log(cashoutAmount);
  // 3. get the current balace
  const cheakBalance = getBalance();
  console.log(cheakBalance);
  // 4. calculate balance
  const newBalance = cheakBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Balace");
    return;
  }
  // 5. cheak pin.
  const cheakPin = getValueFromInput('cashout-pin')
  console.log(cheakPin);
  if (cheakPin === "1234") {
    alert("CashOut Successfull");
    setBalance(newBalance);
  } else {
    alert("Invalid Pin")
    return;
  }
})