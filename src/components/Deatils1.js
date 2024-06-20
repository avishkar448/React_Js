import React from 'react'

function Deatils1() {
    const person=[{ 
        id:11,
        name:"Avishkar", 
        age:21,
        courseName:"Python"    
    },
    {
        id:12,
        name:"Abhay", 
        age:18,
        courseName:"Java" 
    },
    { 
        id:13,
        name:"Ashok", 
        age:51,
        courseName:"Digital Marketing" 
    }]
    const personList=person.map((person)=>(<h3>My name is {person.name}... I am {person.age} years old. My Course is {person.courseName}</h3>))
  return (
    <>
        <h1>Deatail</h1> 
        <h1>{personList[0]}</h1> 
    </>
  )
}

export default Deatils1