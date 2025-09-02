

function generatePassword(length, strength) {
   if (typeof length !== "number" || length < 4 || length > 50) {
    throw new Error("Password length must be a number between 4 and 50");
  }

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=<>?/{}~|";

  let chars = "";
  if (strength === "lowPassword") {
    chars = lowercase + uppercase; 
  } else if (strength === "mediumPassword") {
    chars = lowercase + uppercase + numbers; 
  } else if (strength === "highPassword") {
    chars = lowercase + uppercase + numbers + symbols;
  } else {
    throw new Error("Invalid password strength");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }


  return password;
}


module.exports = generatePassword;


// console.log("Low strength:", generatePassword(8, "lowPassword"));
// console.log("Medium strength:", generatePassword(12, "mediumPassword"));
// console.log("High strength:", generatePassword(16, "highPassword"));