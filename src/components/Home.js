import React from 'react'
import { useAuth } from './AuthContext'

function Home() {
    const {user,login,logout}=useAuth();
  return (
    <div>
        {user ?(
            <>
            <p>Welcome {user.username}</p>
            <button onClick={logout}>logout</button>
            </>
        ):( 
            <>
                <p>Please log in</p>
                <button onClick={()=>login({username:'Avishkar'})}>login</button>
            </>
        )}
    </div>
  )
}

export default Home
//