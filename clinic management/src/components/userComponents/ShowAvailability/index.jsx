import React,{useState} from 'react';


function SingleDoctorAvailability({doctors}) {

  const [firstName,setFirstName]=useState(doctors?.firstName)
  const[fees,setFees]=useState(doctors?.fees)
  const [lastName,setlastName]=useState(doctors?.lastName)
  const [department,setDepartment]=useState(doctors?.department)
  const[email,setEmail]=useState(doctors?.email)

  return (
    <div className="flex items-center justify-center h-screen">

    <div className="border border-gray-200 rounded-md p-4" style={{ width: '90%' }}>
    <div className="flex items-center">
          <img className="h-12 w-12 rounded-md mr-2" src={doctors?.image} alt="Image" />
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Doctor Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details </p>
          </div>
        </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Dr. {firstName} {lastName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Department</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{department}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Consulting Fee</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{fees}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
          </div>
         
        </dl>
      </div>
    </div>

    
    </div>
  );
}

export default SingleDoctorAvailability;
