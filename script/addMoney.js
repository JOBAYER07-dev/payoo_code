document.getElementById('add-money-btn').addEventListener('click', function () {
  // 1. Get Bank Account
  const selectBank = getValueFromInput('add-money-bank');
  // console.log(selectBank)
  if (selectBank === 'Select a Bank') {
    alert('Please Select a Bank');
    return;
  }

  // 2. get back account number
  const accountNumber = getValueFromInput('add-money-num');
  console.log(accountNumber);
  if (accountNumber.length !== 11) {
    alert('Invalid Account Number');
    return;
  }
  // 3. get ammount
  const ammount = getValueFromInput('add-money-amount');
  const newBalance = getBalance() + Number(ammount);

  // pin
  const pin = getValueFromInput('add-money-pin');
  if (pin === '1234') {
    alert(`Add Money Successfull 
      from ${selectBank} 
      at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert('Invalid Pin');
    return;
  }
});
