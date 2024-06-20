import React from 'react'
import Person from './Person'

function Detail12() {

    const Persons=[{ 
        id:11,
        name:"Avishkar",
        age:21,
        course:"React Js"
    },
    { 
        id:12,
        name:"Ashok",
        age:51,
        course:"Node Js"
    },
    {
        id:13,
        name:"Abhay",
        age:18,
        course:"Express Js"
    }]

    const personList=Persons.map(Person=>(<Person key={Person.id} Person={Person}/>))
  return (

    <>
        <Person/>
        {personList}
    </>
  )
}

export default Detail12