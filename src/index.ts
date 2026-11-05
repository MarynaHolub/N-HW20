// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки) и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.

class Animal {
  public name: string;
  public species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log('The animal makes a sound');
  }
}

class Dog extends Animal {
  public breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species); // сначала передаем родителю свойства. super(name, species) вызывает конструктор Animal. Родительский конструктор инициализирует name и species.
    this.breed = breed;
  }

  override sound(): void {
    console.log('The dog barks');
  }
}

const animal = new Animal('Busya', 'Katze');
console.log(animal);

const dog = new Dog('Reks', 'Hund', 'Ter`er');
console.log(dog);

// Задание 2
// Статическое свойство для учета всех книг
// Создайте класс `Library`, который имеет статическое свойство `totalBooks` (общее количество книг).
// При каждом добавлении книги это свойство должно увеличиваться.
// В классе также должен быть метод `addBook()`, который увеличивает счетчик книг.
// Создайте несколько объектов класса и проверьте, как изменяется общее количество книг.

class Library {
  static totalBooks: number = 0;

  addBook() {
    Library.totalBooks++;
  }
}

const book1 = new Library();
const book2 = new Library();
const book3 = new Library();

book1.addBook();
book2.addBook();
book3.addBook();

console.log(Library.totalBooks);

// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

class Vehicle {
  constructor(
    public make: string,
    public model: string,
  ) {}
}

class Motorcycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    public type: string,
  ) {
    super(make, model);
  }
}
const vehicle = new Vehicle('BMW', 'X5');
console.log(vehicle);

const motorcycle = new Motorcycle('Kawasaki', 'Ninja 650', 'Sport');
console.log(motorcycle);
