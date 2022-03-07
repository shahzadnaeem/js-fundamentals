// Do not edit below this line
const user = {
  name: 'Jane',
  level: 'admin',
  extra: { height: 600, location: 'Home' },
  nums: [ 1, 2, 3 ]
}

const ary = [ "one", 2, "three " ]

const first = ary[0]
const third = ary[2]


console.log( `user-START: `, user )


// TODO: Make city an object with a name key set to 'London' and a population key set to 9000000
const city = {
  name: 'London',
  population: 9000000
}

// TODO: Set name equal to the name key of the user object
let name = user.name

name = user['name']

const location = user.extra.location

const loc2 = user['extra']['location']

// TODO: Update the level key on the user object to 'view-only'
user.level = 'view-only'

// TODO: Add a email key of with the value 'jane@gmail.com' to the user object
user.email = 'jane@gmail.com'

user['moreNums'] = [ 0 ]

console.log( `user-FINAL: `, user )

// Do not edit this exported object
module.exports = {
  a: city,
  b: name,
  c: user
}
