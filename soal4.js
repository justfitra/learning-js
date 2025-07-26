function validationPassword(password) {
  let messages = "";
  let validator = /\d/gi;
  password.length < 8
    ? (messages = "password must be at least 8 characters long")
    : "";
  if (!password.match(/[A-Z]/g)) {
    messages = "password must be a letter case";
  }
  if (!password.match(validator)) {
    messages = "password must be a no number";
  }
  if (password.match(/ /gi)) {
    messages = "password must be no space";
  }
  messages = "passowrd sucessfully created";
  return messages;
}

console.log(validationPassword("Sembarang23"));
