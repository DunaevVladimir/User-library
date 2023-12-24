let id = JSON.parse(localStorage.getItem('HistoryId')!);

if (!id) {
  id = 1;
}

export function generateId() {
  function incId() {
    ++id;
    localStorage.setItem('HistoryId', JSON.stringify(id));
    return id;
  }

  return incId();
}