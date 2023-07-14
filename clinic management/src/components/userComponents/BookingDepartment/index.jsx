import React from 'react'
import siteLogo from './../../../assets/svg/site-logo.svg';
import { useNavigate } from 'react-router-dom';

function BookDepartmentComponent({department}) {

    const navigate=useNavigate()

    function handleOnClick(dep) {
        navigate('/dep-doctors',{state:{department:dep}})
    }
  return (
    <div className="flex items-center justify-center flex-col bg-white">
    <div className="bg-[#F4F5FA] p-10 rounded-xl">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="max-w-sm font-semibold text-lg">OUR DEPARTMENTS</div>
        <div className="font-light max-w-lg mt-5 text-sm">
          All devices come with free delivery or pickup as standard. See information on available shopping options for
          your location.
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {department &&
          department.map((dep) => (
            <div key={dep.department} className="bg-[#FFFBEC] rounded-xl m-3">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <img src={siteLogo} className="w-8" alt="Site Logo" />
                <div className="mt-3 font-semibold text-lg">{dep.department}</div>
                <div className="text-sm font-light">Available Slot</div>
                <div className="my-4">
                  <span className="font-bold text-base">Doctor's Count-</span>
                  <span className="font-light text-sm">1</span>
                </div>
                <button
                  className="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4"
                  onClick={() => handleOnClick(dep)}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* <div className="flex justify-center">
        <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">See all subscriptions</button>
      </div> */}
    </div>
  </div>
  )
}

export default BookDepartmentComponent
