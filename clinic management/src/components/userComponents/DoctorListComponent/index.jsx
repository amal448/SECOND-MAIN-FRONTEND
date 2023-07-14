import React from 'react'
import Paginate from '../../../components/userComponents/pagination';
import { useNavigate } from 'react-router-dom';
import NoDataFound from '../../../components/userComponents/NoDataComponent';


function DoctorListComponent({doctors,currentPage,setCurrentPage,totalPages}) {

    const navigate = useNavigate();
    function handleOnClick(doctor) {
        navigate('/Availability', { state: { doctor: doctor } });
      }
const handlePageChange =(page)=>{
  if(page>=1 )
  {
    setCurrentPage(page)
  }
}

  return (
    <div>
      {doctors.length > 0 ? (
        <div className="w-full bg-white">
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
            <div className="text-center pb-8">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray">
                Our Faculties
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {doctors.map((doctor) => (
                <div
                  className="w-full bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center"
                  key={doctor.id}
                >
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
                    <button
                      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleOnClick(doctor)}
                    >
                      See Slot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>



          <div className="flex items-center justify-center my-6">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                    onClick={()=>handlePageChange(currentPage-1)}
                    disabled={currentPage === 1}        
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}   
                                
                                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium  'text-blue-500' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                               {i + 1}
                            </button>
                         ))}
                        <button
                          onClick={()=>handlePageChange(currentPage +1)}
                          disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            next
                        </button>
                    </nav>
                </div>



        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  )
}

export default DoctorListComponent
