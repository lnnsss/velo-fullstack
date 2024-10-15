export function getUserIsAdmin(token) {
  if (token !== "0" & token !== null) {
    const parts = token.split(".");
    const payload = JSON.parse(atob(parts[1])); // полезная информация
    const userRoles = payload.roles; // роли пользователя

    const userIsAdmin = userRoles.includes("ADMIN");

    return userIsAdmin;
  }

  return false; // если пользователь не вошел в аккаунт
}
