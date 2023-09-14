import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { userLogout } from '../../../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
function UserNavBar() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

    const isLoggedIn = useSelector((state) => state.user.login);
    console.log("isLoggedInisLoggedIn",isLoggedIn);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

      const handleLogout=()=>{
        dispatch(userLogout(true))
      }
      let data=useSelector((state)=>state)
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa",data)

  return (
    <div >
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleDropdown} 
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                    className={`block h-6 w-6 ${isDropdownOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className={`h-6 w-6 ${isDropdownOpen ? 'block' : 'hidden'}`}
                fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="/medicallogo1.jpeg"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/medicallogo1.jpeg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    // href="/"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page" onClick={(e)=>{
                      e.preventDefault()
                      navigate('/')
                      return false
                    }}
                  >
                    Home
                  </a>
                  <a
                    // href="/booking"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/booking')
                      return false
                    }}  >
                    booking
                  </a>
                  {/* <a
                    // href="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/about')
                      return false
                    }}  >
                    About
                  </a> */}
                  <a
                    // href="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/contact')
                      return false
                    }}  >
                    Contact
                  </a>
                  <a
                    // href="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/chat')
                      return false
                    }}  >
                    Chat
                  </a>
                  <a
                    // href="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/ListPrescription')
                      return false
                    }}  >
                    Prescription
                  </a>
                  <a
                    // href="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/paymenthistory')
                      return false
                    }}  >
                    Book History
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button> */}

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={data?.user?.image}
                      alt=""
                    />
                  </button>
                </div>

                {/* Dropdown menu, show/hide based on menu state */}
                {/* Entering: "transition ease-out duration-100" */}
                {/* From: "transform opacity-0 scale-95" */}
                {/* To: "transform opacity-100 scale-100" */}
                {/* Leaving: "transition ease-in duration-75" */}
                {/* From: "transform opacity-100 scale-100" */}
                {/* To: "transform opacity-0 scale-95" */}




                {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/')
                      return false
                    }} 
                  >
                   Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/booking')
                      return false
                    }}
                  >
                    booking
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/about')
                      return false
                    }}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/contact')
                      return false
                    }}
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/chat')
                      return false
                    }}
                  >
                    Chat
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/ListPrescription')
                      return false
                    }}
                  >
                    Prescription
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={(e)=>{
                      e.preventDefault()
                      navigate('/paymenthistory')
                      return false
                    }}
                  >
                    BookHistory
                  </a>


                  {isLoggedIn ? (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              ) : (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/login'); // Redirect to the login page or take any other action for login
                    return false;
                  }}
                >
                  Log In
                </a>
              )}
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default UserNavBar;
