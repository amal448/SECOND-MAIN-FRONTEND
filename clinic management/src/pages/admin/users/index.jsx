// import React,{useEffect,useState} from 'react'
// import useFetch from '../../../hooks/useFetch'
 
// import deleteIcon from '../../../assets/svg/delete-icon.svg'
// import editIcon from '../../../assets/svg/edit-icon.svg'

// import './style.scss'
// const getRequest=useFetch("GET")

// function AllUsers() {
//     const [users,setUsers] =useState([])
//     useEffect(()=>{
//     getRequest('/admin/get-all-users').then(response =>{ 
//         console.log("users@index",response.alluser)
//         setUsers(response.alluser)
//     })
//     },[])
//   return (
//     <div className='admin-all-user-list'>
//     <div className="all-patients">
//         <div className="patients">
//             <h2>All Users</h2>
//             <div className="container">
//                 <div className="table">
//                     <div className="table-header">
//                         <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">ID</a></div>
//                         <div className="header__item"><a id="name" className="filter__link" href="#">Name</a></div>
//                         <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">DOB</a></div>
//                         <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">email</a></div>
//                         <div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">gender</a></div>
//                         <div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">mobile</a></div>
//                         <div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Action</a></div>
//                     </div>
//                     <div className="table-content">
//                         {users && users.map((user, i) => {
//                             console.log("user",user)
//                             const { _id: id, firstName, lastName, email, dateOfBirth, gender, mobile, } = user;
                           
//                            return <div className="table-row" key={id}>
//                                 <div className="table-data"> {i + 1}</div>
//                                 <div className="table-data">{firstName + " " + lastName}</div>
//                                 <div className="table-data">{dateOfBirth}</div>
//                                 <div className="table-data">{email}</div>
//                                 <div className="table-data">{gender}</div>
//                                 <div className="table-data">{mobile}</div>
//                                 <div className="table-data">
//                                     <span>
//                                         <img src={editIcon} alt="" />
//                                         <img src={deleteIcon} alt="" />
//                                     </span>
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                 </div>
//                 <div className="buttons">
//                     <button>&lt;</button>
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                     <button>&gt;</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> 


//   )
// }
// export default AllUsers

import React,{useEffect,useState} from 'react'
import useFetch from '../../../hooks/useFetch'
const getRequest=useFetch("GET")

import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import Users from "../../../components/adminComponents/users";

const List = () => {

  const [users,setUsers] =useState([])
       useEffect(()=>{
       getRequest('/admin/get-all-users').then(response =>{ 
           console.log("users@index",response.alluser)
           setUsers(response.alluser)
       }).catch((err)=>{
        console.log(err)
       })
       },[])


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Users users={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default List
