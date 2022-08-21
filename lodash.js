const _ = require( "lodash")

const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
//get array of first names of everyone
 const firstname = _.map( members, value => {
    const name = _.split(value.name, " " , 2)
    return name[0]
 })
 console.log(firstname)