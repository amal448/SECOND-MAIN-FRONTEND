import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    id:null,
    userName: null,
    email: null,
    phone: null,
    mobile: null,
    DOB: null,
    gender: null,
    loading:false,
    login:localStorage.getItem('user-token') ? true: false,
    doctors:[]
}

const userSlice=createSlice({
    name:'user',
    initialState,
     
    reducers:{
        startLoading: (state)=>{
            state.loading=true
        },

        userLogin: (state,{payload})=>{
            state.userName=payload.firstName + " " + payload.lastName
            state.email=payload.email
            state.gender=payload.gender
            state.mobile=payload.mobile
            state.DOB=payload.dateOfBirth
            state.login=true,

            state.id=payload._id
            console.log("payload1111111111111",payload)
        },
        setUser: (state,payload)=>{

            state={...state,...payload}
        },
        setDoctors: (state,{payload})=>{
            console.log(payload);
            state.doctors.push(...payload)
        },
        userLogout:(state, {payload})=>{
            if(payload)
            {
                localStorage.removeItem('user-token')
                window.location='/login'
            }
        },
        
    }

})

const userReducer=userSlice.reducer

export const {setUser,startLoading,userLogin,userLogout,setDoctors}=userSlice.actions

// export const selectUser=(state)=>state.user

export default userReducer 
