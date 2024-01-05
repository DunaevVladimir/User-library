export function getLocalFavorites() {
  const user = localStorage.getItem('currentUser');

  if (user) {
    return JSON.parse(user)?.favorites
  } else {
    return []
  }
}