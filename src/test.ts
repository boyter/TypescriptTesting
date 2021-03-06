class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

import { ZipCodeValidator } from "./module";

let myValidator = new ZipCodeValidator();
myValidator.isAcceptable("")

_.each([], function(e) {
    console.log(e);
});

// Say we want to use underscore
declare var _: any;

import { SearchModel } from "./SearchModel"

SearchModel.searchvalue