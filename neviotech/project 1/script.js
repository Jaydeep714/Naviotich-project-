document.getElementById("submitBtn").addEventListener("click", function() {
  let inputField = document.getElementById('messageInput');
  let outputPara = document.getElementById('output');
  let message = inputField.value.trim();

  if (message !== "") {
    outputPara.textContent = message;
    inputField.value = "";
  } else {
    alert("Message is empty.");
    outputPara.textContent = "";
  }
});