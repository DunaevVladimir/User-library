export function getLocalUser() {
  const user = localStorage.getItem('currentUser');

  if (user) {
    return JSON.parse(user)?.email
  } else {
    return null
  }
}