/*
   Author: Luis González
   Date of Development: 28/07/2023
   Purpose of Script: To manage and display information about a group of individuals and their favorite things.

   Note: Since the task involves updating the objects with the current date and handling possible
   inactive records, we will create a function to do that and then write the sorting and display code accordingly.
*/
// Object creation for Luis
var luisObject = {
    'Name': 'Luis Gonzalez',
    'Favorite Food': 'Salad',
    'Favorite Movie': 'Batman',
    'Status': 'Active'
};
// Array to store all the objects
var peopleArray = [
    {
        'Name': 'Rocky',
        'Favorite Food': 'Sushi',
        'Favorite Movie': 'Back to The Future',
        'Status': 'Inactive'
    },
    {
        'Name': 'Miroslav',
        'Favorite Food': 'Sushi',
        'Favorite Movie': 'American Psycho',
        'Status': 'Active'
    },
    {
        'Name': 'Donny',
        'Favorite Food': 'Singapore chow mei fun',
        'Favorite Movie': 'The Princess Bride',
        'Status': 'Inactive'
    },
    {
        'Name': 'Matt',
        'Favorite Food': 'Brisket Tacos',
        'Favorite Movie': 'The Princess Bride',
        'Status': 'Active'
    },
    luisObject
];
// Function to update the date for each object
function updateDateForObjects() {
    var currentDate = new Date().toLocaleDateString();
    for (var _i = 0, peopleArray_1 = peopleArray; _i < peopleArray_1.length; _i++) {
        var person = peopleArray_1[_i];
        person.Date = currentDate;
    }
}
// Function to sort the objects based on a specific property
function sortObjectsByProperty(property) {
    peopleArray.sort(function (a, b) {
        if (a[property] === b[property])
            return 0;
        return a[property] > b[property] ? 1 : -1;
    });
}
// Function to display active records with Name, date, and Favorite Movie, I used here some filters and arrow functions
function displayActiveRecords() {
    var activeRecords = peopleArray.filter(function (person) { return person.Status === 'Active'; });
    if (activeRecords.length === 0) {
        console.log("No active records found.");
    }
    else {
        for (var _i = 0, activeRecords_1 = activeRecords; _i < activeRecords_1.length; _i++) {
            var person = activeRecords_1[_i];
            //Printing the result using Template Literal
            console.log("Name: ".concat(person.Name, ", Date: ").concat(person.Date, ", Favorite Movie: ").concat(person['Favorite Movie']));
        }
    }
}
// Updating the date for each object
updateDateForObjects();
// Sorting the objects by Name (You can choose a different property to sort if needed)
sortObjectsByProperty('Name');
// Displaying active records with Name, date, and Favorite Movie
displayActiveRecords();
