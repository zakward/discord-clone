export function validateLoginForm({ mail, password }) {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
}
export function validateRegisterForm({ mail, password, username }) {
  return (
    validateMail(mail) &&
    validatePassword(password) &&
    validateUsername(username)
  );
}
function validatePassword(password) {
  return password.length >= 6 && password.length <= 12;
}

function validateMail(mail) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(mail);
}

function validateUsername(username) {
  return username.length > 2 && username.length < 13;
}
