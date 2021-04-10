function showMessage() {
  // console.log("hi")
  var submitContactMessage = document.querySelector(".contact-message");
  // console.log(submitContactMessage)
  if (submitContactMessage.style.display === "none") {
    submitContactMessage.style.display = "block";
  } else {
    submitContactMessage.style.display = "none";
  }
}
