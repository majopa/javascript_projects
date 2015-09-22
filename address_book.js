// Author: Matthew Palomar
// Date: 9/13/15

// Desc: An simple address book exercise.

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++)
    {
        if (lastName == contacts[i].lastName) {
            return printPerson(contacts[i]);
        }
        else {
            return "Not found";
        }
    }
}

function add(firstName, lastName, phoneNumber, email) {
    var newContact = new Object();
    newContact.firstName = firstName;
    newContact.lastName = lastName;
    newContact.phoneNumber = phoneNumber;
    newContact.email = email;

    contacts[contacts.length] = newContact;
}

add("Gandalf", "Gray", "555-MAGE", "gandalf@gmail.com");

list();