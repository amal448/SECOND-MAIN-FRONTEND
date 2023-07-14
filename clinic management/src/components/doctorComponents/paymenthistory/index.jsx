
import React from 'react';
import { setInfo } from '../../../store/slice/doctersSlice';
import { useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import moment from 'moment'
import useFetch from '../../../hooks/useFetch';
import jwt_decode from 'jwt-decode'; 
 
function PaymentComponent({appointments}) {
console.log("appointments",appointments)
  let postRequest=useFetch('POST')

//   // const doctor=useSelector(setInfo)
//   let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidGltaW5ncyI6ImluaXQiLCJfaWQiOiJpbml0IiwiZmlyc3ROYW1lIjoiaW5pdCIsImxhc3ROYW1lIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm1vYmlsZSI6ImluaXQiLCJkb2IiOiJpbml0IiwiaW1hZ2UiOiJpbml0IiwiYWJvdXQiOiJpbml0IiwiYWRkcmVzcyI6ImluaXQiLCJkZXBhcnRtZW50IjoiaW5pdCIsImV4cGVyaWVuY2UiOiJpbml0Iiwic3RhcnRUaW1lIjoiaW5pdCIsImVuZFRpbWUiOiJpbml0IiwiZmVlcyI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJibG9jayI6ImluaXQiLCJzdGF0dXMiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJmaXJzdE5hbWUiOnRydWUsImxhc3ROYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibW9iaWxlIjp0cnVlLCJkb2IiOnRydWUsImltYWdlIjp0cnVlLCJhYm91dCI6dHJ1ZSwiYWRkcmVzcyI6dHJ1ZSwiZGVwYXJ0bWVudCI6dHJ1ZSwiZXhwZXJpZW5jZSI6dHJ1ZSwic3RhcnRUaW1lIjp0cnVlLCJlbmRUaW1lIjp0cnVlLCJ0aW1pbmdzIjp0cnVlLCJmZWVzIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiYmxvY2siOnRydWUsInN0YXR1cyI6dHJ1ZSwiX192Ijp0cnVlfX19LCJza2lwSWQiOnRydWUsInZhbGlkYXRpb25FcnJvciI6eyJlcnJvcnMiOnsic3RhcnRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoic3RhcnRUaW1lIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImtpbmQiOiJjYXN0IiwicGF0aCI6InN0YXJ0VGltZSIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImVuZFRpbWUiOnsibmFtZSI6IlZhbGlkYXRvckVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoiZW5kVGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInR5cGUiOiJjYXN0IiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJlbmRUaW1lIiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19fSwiX21lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkIiwibmFtZSI6IlZhbGlkYXRpb25FcnJvciIsIm1lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkOiBzdGFydFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIsIGVuZFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjY0OGVlOWZhNGVmOWQ2YmY0NWI1OGQ0OSIsImZpcnN0TmFtZSI6IkFNQUwiLCJsYXN0TmFtZSI6IlRIT01BUyIsImVtYWlsIjoiYW1hbHRob21hczMzMzQ0NEBnbWFpbC5jb20iLCJtb2JpbGUiOiI5MTg4Mzc1NzY5IiwiZG9iIjoiMjAyMy0wNi0wMSIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG1tbmM4aGowL2ltYWdlL3VwbG9hZC92MTY4NzA4NzU5Ny9NZW5zLVdpbnRlci1GYXNoaW9uLXR1cnRsZW5lY2stbWluX3hudnhjYS53ZWJwIiwiYWJvdXQiOiJNQkJTIiwiYWRkcmVzcyI6ImJyb3RvdHlwZSIsImRlcGFydG1lbnQiOiJQVUxNT05PTE9HWSIsImV4cGVyaWVuY2UiOiI4IiwidGltaW5ncyI6WyI5OjAwIEFNIiwiMTA6MDAgQU0iLCIxMTowMCBBTSIsIjEyOjAwIFBNIiwiMTowMCBQTSIsIjI6MDAgUE0iLCIzOjAwIFBNIiwiNDowMCBQTSJdLCJmZWVzIjo1MDAsInBhc3N3b3JkIjoic2hhMSRlNmM3OWM3MyQxJGJkY2VkMWJhNGJlMGViZmMzODBjYTQ3ZmM4YzQ3NGM2NGVmZjA3NzAiLCJibG9jayI6ZmFsc2UsInN0YXR1cyI6IlJlamVjdGVkIiwiX192IjowLCJkb2N0b3JUaW1pbmdzIjp7IlN1bmRheSI6WyIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIk1vbmRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSJdLCJUdWVzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIiwiMTowMCBQTSIsIjE6MzAgUE0iLCIyOjAwIFBNIiwiMjozMCBQTSIsIjM6MDAgUE0iLCIzOjMwIFBNIiwiNDowMCBQTSIsIjQ6MzAgUE0iXSwiV2VkbmVzZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIlRodXJzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIl0sIkZyaWRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSIsIjI6MDAgUE0iLCIyOjMwIFBNIl0sIlNhdHVyZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iXX19LCIkZXJyb3JzIjp7InN0YXJ0VGltZSI6eyJuYW1lIjoiVmFsaWRhdG9yRXJyb3IiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA5OjAwQU1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJzdGFydFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6InN0YXJ0VGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwidHlwZSI6ImNhc3QiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJzdGFydFRpbWUiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJlbmRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6ImVuZFRpbWUiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA1OjAwUE1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJlbmRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fSwia2luZCI6ImNhc3QiLCJwYXRoIjoiZW5kVGltZSIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fX0sImlhdCI6MTY4ODEzOTA2N30.6WU2V7YqnuGTiDG2BPMMKPjpMfGkwWFCZ80we9zmwxg"

//   var decoded = jwt_decode(token)
//   console.log("code 123",decoded)
//    const doctorId = decoded._doc._id;
const info = useSelector(state => state?.doctor?.info);
console.log("infoooooooo",info)

let doctorId=info?._id
console.log("doctorIddddddddd",doctorId)







  const navigate=useNavigate()

  const createChatHandler =async(userId)=>{
    
  
 
    const credentials={ 
    senderId:userId,
    receiverId:doctorId
  }
console.log("credentials",credentials)
  //  const isExist =await postRequest('/conversations/check-existance',credentials)

  // console.log(isExist);
  
  if (credentials) {
    // const create = await createConversation(credentials);
    const create=await postRequest('/conversations',credentials)
    }


    navigate('/doctor/chat');

}



  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 pt-4">PAYMENT</h2>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-500">
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">No</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Name</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Email</span>
            </th>
            {/* <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Mobile</span>
            </th> */}
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Date</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Time</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Price</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
        
{ appointments?.map((appointment,index)=>(

          <tr className="bg-white border-4 border-gray-200" key={index}>
            <td className="px-16 py-2 flex flex-row items-center">
              {/* <img
                className="h-8 w-8 rounded-full object-cover"
                src=""
                alt=""
              /> */}
              <span>{index+1}</span>
            </td>
            <td>
              <span className="text-center ml-2 font-semibold">{appointment.paymentOwner}</span>
            </td>
            <td className="px-16 py-2">
              <span>{appointment.paymentOwnerEmail}</span>
            </td>
            {/* <td className="px-16 py-2">
              <span>DOB</span>
            </td> */}
            <td className="px-16 py-2">
              <span className="text-green-500">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg> */}
                {appointment.date}
              </span>
            </td>
            <td className="px-16 py-2">
              <span>
              {appointment.time
}
              </span>
            </td>
            <td className="px-16 py-2">
              <div className="flex justify-center space-x-2">
                <span>{appointment.price}</span>
                
              </div>
            </td>
          </tr>
))  }
        </tbody>
      </table>
    </div>
  );
}

export default PaymentComponent;

















// import React from 'react';
// import { setInfo } from '../../../store/slice/doctersSlice';
// import { useSelector } from 'react-redux';
// import {Link,useNavigate} from 'react-router-dom';
// import moment from 'moment'
// import useFetch from '../../../hooks/useFetch';
// import jwt_decode from 'jwt-decode'; 
 
// function Appointment({appointments}) {
// console.log("appointments",appointments)
//   let postRequest=useFetch('POST')

//   // const doctor=useSelector(setInfo)
//   let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidGltaW5ncyI6ImluaXQiLCJfaWQiOiJpbml0IiwiZmlyc3ROYW1lIjoiaW5pdCIsImxhc3ROYW1lIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm1vYmlsZSI6ImluaXQiLCJkb2IiOiJpbml0IiwiaW1hZ2UiOiJpbml0IiwiYWJvdXQiOiJpbml0IiwiYWRkcmVzcyI6ImluaXQiLCJkZXBhcnRtZW50IjoiaW5pdCIsImV4cGVyaWVuY2UiOiJpbml0Iiwic3RhcnRUaW1lIjoiaW5pdCIsImVuZFRpbWUiOiJpbml0IiwiZmVlcyI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJibG9jayI6ImluaXQiLCJzdGF0dXMiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJmaXJzdE5hbWUiOnRydWUsImxhc3ROYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibW9iaWxlIjp0cnVlLCJkb2IiOnRydWUsImltYWdlIjp0cnVlLCJhYm91dCI6dHJ1ZSwiYWRkcmVzcyI6dHJ1ZSwiZGVwYXJ0bWVudCI6dHJ1ZSwiZXhwZXJpZW5jZSI6dHJ1ZSwic3RhcnRUaW1lIjp0cnVlLCJlbmRUaW1lIjp0cnVlLCJ0aW1pbmdzIjp0cnVlLCJmZWVzIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiYmxvY2siOnRydWUsInN0YXR1cyI6dHJ1ZSwiX192Ijp0cnVlfX19LCJza2lwSWQiOnRydWUsInZhbGlkYXRpb25FcnJvciI6eyJlcnJvcnMiOnsic3RhcnRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoic3RhcnRUaW1lIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImtpbmQiOiJjYXN0IiwicGF0aCI6InN0YXJ0VGltZSIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImVuZFRpbWUiOnsibmFtZSI6IlZhbGlkYXRvckVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoiZW5kVGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInR5cGUiOiJjYXN0IiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJlbmRUaW1lIiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19fSwiX21lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkIiwibmFtZSI6IlZhbGlkYXRpb25FcnJvciIsIm1lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkOiBzdGFydFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIsIGVuZFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjY0OGVlOWZhNGVmOWQ2YmY0NWI1OGQ0OSIsImZpcnN0TmFtZSI6IkFNQUwiLCJsYXN0TmFtZSI6IlRIT01BUyIsImVtYWlsIjoiYW1hbHRob21hczMzMzQ0NEBnbWFpbC5jb20iLCJtb2JpbGUiOiI5MTg4Mzc1NzY5IiwiZG9iIjoiMjAyMy0wNi0wMSIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG1tbmM4aGowL2ltYWdlL3VwbG9hZC92MTY4NzA4NzU5Ny9NZW5zLVdpbnRlci1GYXNoaW9uLXR1cnRsZW5lY2stbWluX3hudnhjYS53ZWJwIiwiYWJvdXQiOiJNQkJTIiwiYWRkcmVzcyI6ImJyb3RvdHlwZSIsImRlcGFydG1lbnQiOiJQVUxNT05PTE9HWSIsImV4cGVyaWVuY2UiOiI4IiwidGltaW5ncyI6WyI5OjAwIEFNIiwiMTA6MDAgQU0iLCIxMTowMCBBTSIsIjEyOjAwIFBNIiwiMTowMCBQTSIsIjI6MDAgUE0iLCIzOjAwIFBNIiwiNDowMCBQTSJdLCJmZWVzIjo1MDAsInBhc3N3b3JkIjoic2hhMSRlNmM3OWM3MyQxJGJkY2VkMWJhNGJlMGViZmMzODBjYTQ3ZmM4YzQ3NGM2NGVmZjA3NzAiLCJibG9jayI6ZmFsc2UsInN0YXR1cyI6IlJlamVjdGVkIiwiX192IjowLCJkb2N0b3JUaW1pbmdzIjp7IlN1bmRheSI6WyIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIk1vbmRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSJdLCJUdWVzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIiwiMTowMCBQTSIsIjE6MzAgUE0iLCIyOjAwIFBNIiwiMjozMCBQTSIsIjM6MDAgUE0iLCIzOjMwIFBNIiwiNDowMCBQTSIsIjQ6MzAgUE0iXSwiV2VkbmVzZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIlRodXJzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIl0sIkZyaWRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSIsIjI6MDAgUE0iLCIyOjMwIFBNIl0sIlNhdHVyZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iXX19LCIkZXJyb3JzIjp7InN0YXJ0VGltZSI6eyJuYW1lIjoiVmFsaWRhdG9yRXJyb3IiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA5OjAwQU1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJzdGFydFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6InN0YXJ0VGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwidHlwZSI6ImNhc3QiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJzdGFydFRpbWUiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJlbmRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6ImVuZFRpbWUiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA1OjAwUE1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJlbmRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fSwia2luZCI6ImNhc3QiLCJwYXRoIjoiZW5kVGltZSIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fX0sImlhdCI6MTY4ODEzOTA2N30.6WU2V7YqnuGTiDG2BPMMKPjpMfGkwWFCZ80we9zmwxg"

//   var decoded = jwt_decode(token)
//   console.log("code 123",decoded)
//    const doctorId = decoded._doc._id;

//   const navigate=useNavigate()

//   const createChatHandler =async(userId)=>{
    
  
 
//     const credentials={ 
//     senderId:userId,
//     receiverId:doctorId
//   }
// console.log("credentials",credentials)
//    const isExist =await postRequest('/conversations/check-existance',credentials)

//   console.log(isExist);
  
//   if (isExist?.data?.success) {
//     // const create = await createConversation(credentials);
//     const create=await postRequest('/conversations',credentials)
//     }


//     navigate('/doctor/chat');

// }



//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4 pt-4">APPOINTMENT</h2>
//       <table className="min-w-full table-auto">
//         <thead className="justify-between">
//           <tr className="bg-gray-500">
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">No</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Name</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Email</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Mobile</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Date</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Time</span>
//             </th>
//             <th className="px-16 py-2 text-left">
//               <span className="text-gray-300">Actions</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-gray-200">
        
// { appointments?.map((appointment,index)=>(

//           <tr className="bg-white border-4 border-gray-200" key={index}>
//             <td className="px-16 py-2 flex flex-row items-center">
//               <img
//                 className="h-8 w-8 rounded-full object-cover"
//                 src=""
//                 alt=""
//               />
//             </td>
//             <td>
//               <span className="text-center ml-2 font-semibold">{appointment.paymentOwner}</span>
//             </td>
//             <td className="px-16 py-2">
//               <span>{appointment.paymentOwnerEmail}</span>
//             </td>
//             <td className="px-16 py-2">
//               <span>DOB</span>
//             </td>
//             <td className="px-16 py-2">
//               <span className="text-green-500">
//                 {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="#2c3e50"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path stroke="none" d="M0 0h24v24H0z" />
//                   <path d="M5 12l5 5l10 -10" />
//                 </svg> */}
//                 {appointment.date}
//               </span>
//             </td>
//             <td className="px-16 py-2">
//               <span>
//               {appointment.time
// }
//               </span>
//             </td>
//             <td className="px-16 py-2">
//               <div className="flex justify-center space-x-2">
//                 <button 
//                  onClick={() => createChatHandler(appointment?.userId)}
//                 className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
//                   Chat 
//                 </button>
//                 <button className="bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-green-500 hover:text-black">
//                   Meet
//                 </button>
//               </div>
//             </td>
//           </tr>
// ))  }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Appointment;