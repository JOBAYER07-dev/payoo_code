document.getElementById('login-btn').addEventListener('click', function () {
  //  1. get the input mobile number
  const numberInput = document.getElementById('input-num');
  const contactNumber = numberInput.value;
  console.log(contactNumber)
  // 2. get the input pin
  const pinInput = document.getElementById('input-pin');
  const correctPin = pinInput.value;
  console.log(correctPin);
  // 3. match mobile number & pin
  if (contactNumber == '01234567890' && correctPin == "1234") {
    // 4. if true going to homepage
    alert("Log In Successfull")

    // going  to other page code || ai way te ager page a back kora jay na
    // window.location.replace("/home.html")

    window.location.assign("/home.html")
  } else {
    // 5. if flase retun alert massage
    alert("Log In Failed")
    return;
    }
});
