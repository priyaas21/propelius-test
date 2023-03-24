export const validateEmail = (email) => {
    // will validate email id
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  
  export const validatePassword = (password) => {
    // will take 8 character long password to validate with one capital, one number and one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8}$/;
    return passwordRegex.test(password);
  }
  
  export const validateUsername = (username) => {
    // will validate only alphanumeric characters and will have length from 8 to 15
    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    return usernameRegex.test(username);
  }
  
  export const validateContactNumber = (contactNumber) => {
    // Starts with an optional +91 country code or hyphen separator
    // Allows an optional leading 0 before the 10-digit mobile number
    // The next two digits after the optional 0 and the +91 country code should be either 91 or any of the digits 7, 8, or 9
    // The remaining 7 digits can be any digit from 0 to 9

    const indianContactNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return indianContactNumberRegex.test(contactNumber.replace(/\s/g, ''));
  }
  