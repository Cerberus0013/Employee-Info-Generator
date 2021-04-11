
const Employee = require("./Employee");


class Manager extends Employee{
    constructor(name, id, email, special){
        super(name, id, email)
        this.special = special
    }

    officeNumber(){
        return this.special

    }

    getRole() {
        return "Manager"

    }

}

module.exports = Manager;











module.exports = Manager