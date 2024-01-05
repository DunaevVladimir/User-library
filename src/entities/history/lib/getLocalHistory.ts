export function getLocalHistory() {
  const user = localStorage.getItem('currentUser');

  if (user) {
    return JSON.parse(user)?.history
  } else {
    return []
  }
}