function validateEmail(email) {
    // Basic format check
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return false;
    }
  
    // Domain restriction
    const allowedDomains = ["gmail.com", "outlook.com", "yahoo.com"];
    const domain = email.split('@')[1].toLowerCase();
    if (!allowedDomains.includes(domain)) {
      alert("Only email addresses from Gmail, Outlook, and Yahoo are allowed.");
      return false;
    }
  
    return true;
  }
  
  // Usage in your form submission handler:
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById("emailInput").value;
    if (validateEmail(email)) {
      // Send email using your preferred Jabscript method (e.g., `sendmail`)
      // ...
  
      // (Optional for temporary client-side limit, but server-side is recommended)
      // Implement client-side tracking of sent emails (consider session storage for better persistence)
      // ...
    }
  }