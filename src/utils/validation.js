export const validateData = (name, email, password) => {
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const isNameValid = /^[0-9A-Za-z]{3,16}$/.test(name);
  if (!isNameValid) return "Name is not valid!";
  if (!emailValid) return "Email id is not valid!";
  if (!isPasswordValid) return "Password is not valid!";

  return null;
};
