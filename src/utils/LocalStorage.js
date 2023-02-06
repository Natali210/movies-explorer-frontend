class LocalStorage {
  constructor(item, localValues = "") {
    this.item = item;
    this.localValues = localValues;
  }
  
  // Сохранить пару ключ и значение
  set(values) {
    localStorage.setItem(this.item, JSON.stringify(values));
  }
  
  // Получить данные по ключу
  get() {
    const values = localStorage.getItem(this.item);
    return values ? JSON.parse(values) : this.localValues;
  }
  
  // Удалить данные с ключом
  remove() {
    localStorage.removeItem(this.item);
  }
}

export default LocalStorage;