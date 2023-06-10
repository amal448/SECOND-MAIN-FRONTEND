import React,{useLayoutEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom'; 
function DoctorsList() {

    const location=useLocation();
    const navigate=useNavigate()

    console.log(location.state.department);
    const department=location.state.department.department

    console.log("department",department);
    
    const getRequest=useFetch('GET')

    const [doctors,setDoctors] =useState()


    function handleOnClick(doctor) {
      navigate('/Availability',{state:{doctor:doctor}})
  }



    useLayoutEffect(()=>{
        console.log("lkldkledkkklewdkledwemwdod");
        getRequest(`/user/department-doctors/${department}`).then(res=>{
            console.log("depdoctors...................",res)

        setDoctors(res)

        })
    },[])

    return (
        <div>

<div className="w-full bg-white">
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
    <div className="text-center pb-8">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray">
        Our Faculties
      </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {doctors &&
        doctors.map((doctor) => (
          <div className="w-full bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-4">
              <img
                className="object-center object-cover rounded-full h-24 w-24"
                src={doctor.image}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray font-bold mb-1">
                {doctor.firstName} {doctor.lastName}
              </p>
              <p className="text-sm text-gray-400 font-normal">
                {doctor.department}
              </p>
           
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>handleOnClick(doctor)}>
                See Slot
              </button>
         

            </div>
          </div>
        ))}
    </div>
  </section>
</div>


            
        </div>
    )
}
export default DoctorsList