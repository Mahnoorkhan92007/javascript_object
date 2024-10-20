document.write("<h1>OBJECT CALCULATION.</h1>")
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var allitem = 0

for (var i = 0; i < itemsArray.length; i++) {
    var totalprice = itemsArray[i]
    var items = Number(totalprice.price) * Number(totalprice.quantity)
    document.write(totalprice.name + " is " + items + "<br>")
    allitem += items

}

document.write("The total of All item is " + allitem + "<br>")


//point 2
document.write("<h1>OBJECTS</h1>")
var inputs = {
    fullname: "Mahnoor",
    email: "mahnoorkhan@gmail.com",
    age: 17,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
}
var Age1 = inputs.hasOwnProperty("age");
var Country1 = inputs.hasOwnProperty("country");

var FirstName = inputs.hasOwnProperty("firstName");
var LastName = inputs.hasOwnProperty("lastName");

document.write("Age exists: " + Age1 + "<br>");
document.write("Country exists: " + Country1 + "<br>");
document.write("First Name exists: " + FirstName + "<br>");
document.write("Last Name exists: " + LastName + "<br>");


//point 3

function Person(name, city, lastName, email, gender, country) {
    this.name = name;
    this.city = city;
    this.lastname = lastName;
    this.email = email;
    this.gender = gender;
    this.country = country;
}


var person1 = new Person("Fariha", "Karachi", "Khan", "fari@gmail.com", "Female", "Pakistan");
var person2 = new Person("Ali Ahmed", "Lahore", "Ahmed", "ali.ahmed@example.com", "Male", "Pakistan");
var person3 = new Person("Eshaal", "Islamabad", "Malik", "eshal@example.com", "Female", "Pakistan");

console.log(person1);
console.log(person2);
console.log(person3);


//point 4

function area(name, address, gender, education, profession) {
    this.name = name;
    this.address = address;
    this.gender = gender;
    this.education = education;
    this.profession = profession;
}

var records = [];

function addRecord(name, gender, address, education, profession) {
    var record = new area(name, gender, address, education, profession);
    records.push(record);
}


addRecord("Alice", "Female", "123 Main St", "Bachelor's", "Engineer");
addRecord("Bob", "Male", "456 Elm St", "Master's", "Doctor");


console.log(records);
function saveRecordsToLocal() {
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

function loadRecordsFromLocal() {
    var storedRecords = localStorage.getItem('populationRecords');
    if (storedRecords) {
        records = JSON.parse(storedRecords);
    }
}


saveRecordsToLocal();
loadRecordsFromLocal();
