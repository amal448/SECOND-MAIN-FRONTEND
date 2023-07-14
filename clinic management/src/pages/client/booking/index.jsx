import React,{useLayoutEffect,useState} from 'react';
import siteLogo from './../../../assets/svg/site-logo.svg';
import useFetch from '../../../hooks/useFetch';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BookDepartmentComponent from '../../../components/userComponents/BookingDepartment';

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
        console.log("res1444444345",res?.res);

        setDepartments(res?.res);
    })
},[])
console.log("department",department);
    return (
< BookDepartmentComponent department={department} />
    
    );
}

export default BookingSlot;

