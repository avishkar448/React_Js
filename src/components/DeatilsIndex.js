import React from "react";

function DeatilsIndex() {
  const person = [
    {
      id: 11,
      name: "Avishkar",
      age: 21,
      courseName: "Python",
    },
    {
      id: 12,
      name: "Abhay",
      age: 18,
      courseName: "Java",
    },
    {
      id: 13,
      name: "Ashok",
      age: 51,
      courseName: "Digital Marketing",
    }
  ];

  const name=["Amit","Sham","Aman","Amit","Sham","Aman","Amit","Sham","Aman"]

  const personList=person.map(person=>(<person key={person.name} />))

  const nameList=name.map((name,index)=><h2 key={index}>{name}</h2>)
  return(
    <>  
        <h4>{personList}</h4>
        <h4>{nameList}</h4>
    </>
  );
}

export default DeatilsIndex;
