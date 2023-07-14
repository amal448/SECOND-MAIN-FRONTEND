import React from 'react'

const UsersCount = ({ appointments, payment, patients }) => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{patients?.length}</span>
              <h3 className="text-base font-normal text-gray-500">Patients</h3>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{appointments}</span>
              <h3 className="text-base font-normal text-gray-500">Appointments</h3>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{payment}</span>
              <h3 className="text-base font-normal text-gray-500">Earnings</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersCount
