/* 
   Author: Luis González
   Date of Development: 28/07/2023
   Purpose of Script: To manage and display information about a group of individuals and their favorite things.

   Note: Since the task involves updating the objects with the current date and handling possible 
   inactive records, we will create a function to do that and then write the sorting and display code accordingly.
*/

interface Person {
    Name: string;
    'Favorite Food': string;
    'Favorite Movie': string;
    Status: 'Active' | 'Inactive';
    Date?: string; // Adding the optional Date property this mean that the property could be undefined or missing 
  }
  
  // Object creation for Luis
  let luisObject: Person = {
    'Name': 'Luis Gonzalez',
    'Favorite Food': 'Salad',
    'Favorite Movie': 'Batman',
    'Status': 'Active'
  };
  
  // Array to store all the objects
  let peopleArray: Person[] = [
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
    let currentDate = new Date().toLocaleDateString();
    for (let person of peopleArray) {
      person.Date = currentDate;
    }
  }
  
 
  // Function to sort the objects based on a specific property
  function sortObjectsByProperty(property: keyof Person) {
    peopleArray.sort((a, b) => {
      if (a[property] === b[property]) return 0;
      return a[property]! > b[property]! ? 1 : -1;
    });
  }
  
  // Function to display active records with Name, date, and Favorite Movie, I used here some filters and arrow functions
  function displayActiveRecords() {
    let activeRecords = peopleArray.filter(person => person.Status === 'Active');
    if (activeRecords.length === 0) {
      console.log("No active records found.");
    } else {
      for (let person of activeRecords) {
        //Printing the result using Template Literal
        console.log(`Name: ${person.Name}, Date: ${person.Date}, Favorite Movie: ${person['Favorite Movie']}`);
      }
    }
  }
  
  // Updating the date for each object
  updateDateForObjects();
  
  // Sorting the objects by Name (You can choose a different property to sort if needed)
  sortObjectsByProperty('Name');
  
  // Displaying active records with Name, date, and Favorite Movie
  displayActiveRecords();
  