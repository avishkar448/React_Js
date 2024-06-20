import React from 'react'
import { useData } from './DataContext' 

function DisplayData() {
    const {data,loading}=useData()
  return (
    <div>
        {loading ?( 
            <p>loading...!</p>
        ):( 
            <ul>
                {data.map(item =>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        )}
    </div>
  )
}
//
export default DisplayData;