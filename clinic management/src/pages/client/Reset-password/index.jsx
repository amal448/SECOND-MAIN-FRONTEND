import React from 'react'
import ResetPassword from '../../../components/userComponents/ResetPasswordComponent'
import { useParams } from 'react-router-dom' 
function ResetPasswordPage() {

  const {user_id,newtoken }=useParams()
  return (
  
    <ResetPassword  userId={user_id} token={newtoken} />

  )
}

export default ResetPasswordPage
