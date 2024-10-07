export function getUserIsAdmin(token) {
    const parts = token.split(".");
    const payload = JSON.parse(atob(parts[1])); // полезная информация
    const userRoles = payload.roles; // роли пользователя

    const userIsAdmin = userRoles.includes("ADMIN");
    
    return userIsAdmin;
}