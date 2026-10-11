
function showMessage() {
  const message = document.getElementById("profile-message");

  if (message) {
    message.textContent = "Thank you for viewing my resume!";
  } else {
    console.error("Profile message paragraph not found.");
  }
}
