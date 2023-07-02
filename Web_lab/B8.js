function validateEmail(email) {
    // Regular expression pattern for email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Check if the email matches the pattern
    if (pattern.test(email)) {
      return true; // Valid email
    } else {
      return false; // Invalid email
    }
  }
  
  // Example usage:
  const email = "1nt20is179.tushar@nmit.ac.in";
  if (validateEmail(email)) {
    console.log("Email is valid.");
  } else {
    console.log("Email is invalid.");
  }