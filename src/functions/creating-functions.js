// Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increment( num ) {
  return num + 1
}

// Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function capitalizeWord( word ) {

  return word[0].toUpperCase() + word.slice(1)
}

function sayHi( name ) {

  // Ensure name is capitalized
  // Add "Hi, " to beginning of returned message
  // Add capitalized name to middle of message
  // Add " :)" to end of message

  // let hiMessage = name

  // hiMessage = "Hi, Edward :)"

  let firstPart = "Hi, "
  let capitalizedName = capitalizeWord( name )
  let lastPart = " :)"

  let hiMessage = firstPart + capitalizedName + lastPart

  return hiMessage
}



// TODO: change undefined to be the name of the functions you defined
module.exports = {
  a: increment, // change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: sayHi // change undefined to be the name of the function you defined to say hi (the second TODO)
}
