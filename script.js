class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
}
console.log(new Person("Ivan", "Ivanov", 20))


class Military extends Person {
    constructor(...props) {
        super(...props)
        this.rank = props[3]   // Звание
        this.skill = props[4]  // Умение пользоваться оружием
    }
}
console.log(new Military("Petya", "Orlov", 35, "sergeant", true))


class Engineer extends Military {
    constructor(...props) {
        super(...props)
        this.repair_kit = props[5]
    }
}
console.log(new Engineer("Vasya", "Obezyankin", 84, "general", true, "with repair kit"))

class Medic extends Military {
    constructor(...props) {
        super(...props)
        this.medicine_chest = props[5]
    }
}
console.log(new Medic("Alexey", "Kravtsov", 18, "ordinary", true, "with medicine chest"))

class Sniper extends Military {
    constructor(...props) {
        super(...props)
        this.rifle = props[5]
    }
}
console.log(new Sniper("Varsonofiy", "Ignatiev", 53, "lieutenant", true, "with rifle"))

class Infantryman extends Military {
    constructor(...props) {
        super(...props)
        this.assault_rifle = props[5]
    }
}
console.log(new Infantryman("Vsevolod", "Guramov", 23, "captain", true, "with assault rifle"))