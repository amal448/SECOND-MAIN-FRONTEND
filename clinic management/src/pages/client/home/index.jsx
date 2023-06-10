import React from 'react'
import HomeHeader from '../../../components/userComponents/HeaderHome'
import Testimonials from '../../../components/userComponents/Testimonials'
import DoctorsList from '../../../components/userComponents/DoctorCard'
import Footer from '../../../components/userComponents/footer'
function UserHome() {
  return (
    <div>
      <HomeHeader />
      <Testimonials />
      <DoctorsList />
      <Footer />
    </div>
  )
}

export default UserHome
