import React from 'react'
import Profile from '../../../components/doctorComponents/profile'
import { useSelector } from 'react-redux'

function ProfilePage() {
  let data=useSelector(state=>state)
 
  return (
    <div>
      <Profile />
    </div>
  )
}

export default ProfilePage
