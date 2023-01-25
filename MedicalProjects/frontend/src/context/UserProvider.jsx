import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import userContext from './userContext'

function UserProvider({children}) {
    const[user,setUser] = useState({
        name : "Satyam"
    })

    useEffect(()=>{
        setUser({
            name : "Paridhi"
        })
    },[])

  return (
      <userContext.Provider value = {user}>
        {children}
      </userContext.Provider>
  )
}

export default UserProvider
