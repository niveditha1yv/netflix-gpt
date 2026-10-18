export const checkValidate = (email, password, name) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "password is not valid";

  if (name !== null) {
    const validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!validName) return "Name is not valid";
  }

  return null;
};
