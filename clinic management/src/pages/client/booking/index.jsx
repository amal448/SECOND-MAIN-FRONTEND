import React,{useLayoutEffect,useState} from 'react';
import siteLogo from './../../../assets/svg/site-logo.svg';
import useFetch from '../../../hooks/useFetch';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BookingSlot() {
const getRequest =useFetch('GET')
const navigate=useNavigate()

    const[department,setDepartments]=useState([])


function handleOnClick(dep) {
    navigate('/dep-doctors',{state:{department:dep}})
}




useLayoutEffect(()=>{
    getRequest('/user/get-departments').then(res=> {
        console.log("res12345",res);
        setDepartments(res.response);
    })
},[])
    return (
        <div className="flex items-center justify-center flex-col bg-white">
            <div className="bg-[#F4F5FA] p-10 rounded-xl">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="max-w-sm font-semibold text-lg">
                        OUR DEPARTMENTS
                    </div>
                    <div className="font-light max-w-lg mt-5 text-sm">
                        All devices come with free delivery or pickup as standard. See information on available shopping options for your location.
                    </div>
                </div>

{}
                <div className="flex justify-start flex-wrap">
                    {department.map(dep => (<div className="bg-[#FFFBEC] rounded-xl m-3">
                        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                            <img src={siteLogo} className="w-8" />
                            <div className="mt-3 font-semibold text-lg">{dep.department}</div>
                            <div className="text-sm font-light">Available Slot</div>
                            <div className="my-4">
                                <span className="font-bold text-base">Doctor's Count-</span>
                                <span className="font-light text-sm">1</span>
                            </div>
                            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4" onClick={()=>handleOnClick(dep)}>
                                Book
                            </button>
                        </div>
                    </div>))}


                    {/* Add more cards with the same structure */}
                </div>

                {/* <div className="flex justify-center">
          <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">See all subscriptions</button>
        </div> */}
            </div>
        </div>
    );
}

export default BookingSlot;
