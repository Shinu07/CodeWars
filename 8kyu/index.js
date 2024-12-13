// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year.

// Task 2: Add a method to the book object that returns a string with the book's title and author, and log the result of
// calling this method.

// Task 3: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log
// the updated object.


const favLibrarys = {
    title: "Atomics Habits",
    author: "james clear",
    year : 2018,
    alldetails: function(){
        let all = `BookName: ${this.title}, AutherNAme: ${this.author}, ReleasedYear: ${this.year} `
        return all
    },
    upyear: function(year){
        this.year=2020
        return year
    }

}

favLibrarys.upyear()
console.log(favLibrarys.alldetails());



