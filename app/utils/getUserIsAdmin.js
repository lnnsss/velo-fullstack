export function getUserIsAdmin(token) {
  if ((token !== "0") & (token !== null)) {
    const parts = token.split(".");
    const payload = JSON.parse(atob(parts[1])); // полезная информация
    const userRoles = payload.roles; // роли пользователя

    const userIsAdmin = userRoles.includes("ADMIN");

    return userIsAdmin;
  }

  if (token == null) {
    localStorage.setItem("veloJWT", "0");
  }

  return false; // если пользователь не вошел в аккаунт
}
