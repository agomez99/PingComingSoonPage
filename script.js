function isValidEmailFormat(emailAddress) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress) && emailAddress !== "";
  }
  
  function signUp() {
    var email = document.getElementById("email").value;
    var errorDisplay = document.getElementById("error-display");
    var successDisplay = document.getElementById("success-display");
  
    if (!isValidEmailFormat(email)) {
      // Show error message
      errorDisplay.classList.add("visible");
      errorDisplay.textContent = "Please provide a valid email address";
    
      return;
    }
  
    // Clear error message
    errorDisplay.classList.remove("visible");
    errorDisplay.textContent = "";
  
    console.log("Signed up with email:", email);
  
    document.getElementById("email").value = "";
  
    // Show success message
    successDisplay.textContent = "Successfully signed up " + email + " for our newsletter!";
    successDisplay.classList.add("visible");
  }
  
  function clearError() {
    var errorDisplay = document.getElementById("error-display");
    var successDisplay = document.getElementById("success-display");
  
    // Clear error and success messages
    errorDisplay.textContent = "";
    successDisplay.textContent = "";
  }
  