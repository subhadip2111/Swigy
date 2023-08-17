import React, { useEffect } from 'react'

const Profile = () => {
 
  useEffect(() => {
   console.log("Use Effect")
 })
 
  return (
    <div>
      <h1>profile component </h1>
    </div>
  )
}

export default Profile
