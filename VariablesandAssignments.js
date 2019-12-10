// Variables and assignment

// var: keyword that declares a variable
var firstName = "Jim"
var favoriteSport; //Undefined 

/*var is a keyword and firstName is a human readable version
of the memory assignment. The actual memory address won't
be assigned until the program executes so either way its not
something you would remember the assignment is after the operator
which the equals sign */
/* let is used more often instead of var since var is global and can potenitally
be problematic when the program executes*/

// let: keyword that declares a block scoped variable
let lastName = "Thorne"
/* Case in point; if the let is in a function body thats the only place the
assignment applies*/
function myFunction () {
    let middleInit = "P"
}

//Camelcase
favoriteSport = "Mountain Biking"

//snake_case
let last_name = Thorne

// PascalCase
let SecondFavorite = "Jeeping"

/* Both 'var' and 'let' can be initialized with a value at the time
they are declares (see above) or they can be left undefined to have 
a value assigned to them later after the value is created dynamically
*/

// const: keyword that declares a block scoped read only variable

const uniqueIdentifier = 5678

/* read-only: once a value assigned to a const (constant) variable
that value is not allowed to change for the duration of its existence*/

/* if const uniqueIdenifier is assigned a string or another number you will
get an error message */