import React from 'react'
import { useContext } from 'react'
import Base from '../../Components/Base'
import userContext from '../../context/userContext'

function ProfileInfo() {
 const user =useContext(userContext)
  return (
    <Base>
    <div>
      Profile of user
      <h1>Welcome {user.name}</h1>
    </div>
    </Base>
  )
}

export default ProfileInfo
