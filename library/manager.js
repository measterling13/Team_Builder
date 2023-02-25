const Employee = require("./employee")

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email, "manager");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {

        return this.officeNumber
    }

    getRole() {

        return this.role
    }
}

module.exports = Manager