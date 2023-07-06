

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
import ConversationComponent from '../Conversation';
import MessageContent from '../Messages';
import io from 'socket.io-client';
import { setInfo } from '../../../../store/slice/doctersSlice';
import jwt_decode from 'jwt-decode'; 

function Messenger() {

  const [conversations, setConversations] = useState([]); // List of all conversations
  const [currentChat, setCurrentChat] = useState(null); // show conversertion when currently click
  const [messages, setMessages] = useState([]); // for seeing the chat conversation
  const [sendMessage,setSendMessage]=useState("")
  const [receiveMessage,setReceiveMessage]=useState(null)
  const [onlineUsers,setOnlineUsers] =useState([])

  const socket =useRef()
  const scrollRef=useRef()

  let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidGltaW5ncyI6ImluaXQiLCJfaWQiOiJpbml0IiwiZmlyc3ROYW1lIjoiaW5pdCIsImxhc3ROYW1lIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm1vYmlsZSI6ImluaXQiLCJkb2IiOiJpbml0IiwiaW1hZ2UiOiJpbml0IiwiYWJvdXQiOiJpbml0IiwiYWRkcmVzcyI6ImluaXQiLCJkZXBhcnRtZW50IjoiaW5pdCIsImV4cGVyaWVuY2UiOiJpbml0Iiwic3RhcnRUaW1lIjoiaW5pdCIsImVuZFRpbWUiOiJpbml0IiwiZmVlcyI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJibG9jayI6ImluaXQiLCJzdGF0dXMiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJmaXJzdE5hbWUiOnRydWUsImxhc3ROYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibW9iaWxlIjp0cnVlLCJkb2IiOnRydWUsImltYWdlIjp0cnVlLCJhYm91dCI6dHJ1ZSwiYWRkcmVzcyI6dHJ1ZSwiZGVwYXJ0bWVudCI6dHJ1ZSwiZXhwZXJpZW5jZSI6dHJ1ZSwic3RhcnRUaW1lIjp0cnVlLCJlbmRUaW1lIjp0cnVlLCJ0aW1pbmdzIjp0cnVlLCJmZWVzIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiYmxvY2siOnRydWUsInN0YXR1cyI6dHJ1ZSwiX192Ijp0cnVlfX19LCJza2lwSWQiOnRydWUsInZhbGlkYXRpb25FcnJvciI6eyJlcnJvcnMiOnsic3RhcnRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoic3RhcnRUaW1lIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImtpbmQiOiJjYXN0IiwicGF0aCI6InN0YXJ0VGltZSIsInZhbHVlIjoiMDk6MDBBTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDk6MDBBTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDk6MDBBTSIsInBhdGgiOiJzdGFydFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIifX0sImVuZFRpbWUiOnsibmFtZSI6IlZhbGlkYXRvckVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIiwicHJvcGVydGllcyI6eyJwYXRoIjoiZW5kVGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInR5cGUiOiJjYXN0IiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJlbmRUaW1lIiwidmFsdWUiOiIwNTowMFBNIiwicmVhc29uIjp7InN0cmluZ1ZhbHVlIjoiXCIwNTowMFBNXCIiLCJ2YWx1ZVR5cGUiOiJzdHJpbmciLCJraW5kIjoiTnVtYmVyIiwidmFsdWUiOiIwNTowMFBNIiwicGF0aCI6ImVuZFRpbWUiLCJyZWFzb24iOnsiZ2VuZXJhdGVkTWVzc2FnZSI6dHJ1ZSwiY29kZSI6IkVSUl9BU1NFUlRJT04iLCJhY3R1YWwiOmZhbHNlLCJleHBlY3RlZCI6dHJ1ZSwib3BlcmF0b3IiOiI9PSJ9LCJuYW1lIjoiQ2FzdEVycm9yIiwibWVzc2FnZSI6IkNhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19fSwiX21lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkIiwibmFtZSI6IlZhbGlkYXRpb25FcnJvciIsIm1lc3NhZ2UiOiJkb2N0b3JzIHZhbGlkYXRpb24gZmFpbGVkOiBzdGFydFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwOTowMEFNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwic3RhcnRUaW1lXCIsIGVuZFRpbWU6IENhc3QgdG8gTnVtYmVyIGZhaWxlZCBmb3IgdmFsdWUgXCIwNTowMFBNXCIgKHR5cGUgc3RyaW5nKSBhdCBwYXRoIFwiZW5kVGltZVwiIn19LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjY0OGVlOWZhNGVmOWQ2YmY0NWI1OGQ0OSIsImZpcnN0TmFtZSI6IkFNQUwiLCJsYXN0TmFtZSI6IlRIT01BUyIsImVtYWlsIjoiYW1hbHRob21hczMzMzQ0NEBnbWFpbC5jb20iLCJtb2JpbGUiOiI5MTg4Mzc1NzY5IiwiZG9iIjoiMjAyMy0wNi0wMSIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZG1tbmM4aGowL2ltYWdlL3VwbG9hZC92MTY4NzA4NzU5Ny9NZW5zLVdpbnRlci1GYXNoaW9uLXR1cnRsZW5lY2stbWluX3hudnhjYS53ZWJwIiwiYWJvdXQiOiJNQkJTIiwiYWRkcmVzcyI6ImJyb3RvdHlwZSIsImRlcGFydG1lbnQiOiJQVUxNT05PTE9HWSIsImV4cGVyaWVuY2UiOiI4IiwidGltaW5ncyI6WyI5OjAwIEFNIiwiMTA6MDAgQU0iLCIxMTowMCBBTSIsIjEyOjAwIFBNIiwiMTowMCBQTSIsIjI6MDAgUE0iLCIzOjAwIFBNIiwiNDowMCBQTSJdLCJmZWVzIjo1MDAsInBhc3N3b3JkIjoic2hhMSRlNmM3OWM3MyQxJGJkY2VkMWJhNGJlMGViZmMzODBjYTQ3ZmM4YzQ3NGM2NGVmZjA3NzAiLCJibG9jayI6ZmFsc2UsInN0YXR1cyI6IlJlamVjdGVkIiwiX192IjowLCJkb2N0b3JUaW1pbmdzIjp7IlN1bmRheSI6WyIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIk1vbmRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSJdLCJUdWVzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIiwiMTowMCBQTSIsIjE6MzAgUE0iLCIyOjAwIFBNIiwiMjozMCBQTSIsIjM6MDAgUE0iLCIzOjMwIFBNIiwiNDowMCBQTSIsIjQ6MzAgUE0iXSwiV2VkbmVzZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iLCIzOjAwIFBNIiwiMzozMCBQTSIsIjQ6MDAgUE0iLCI0OjMwIFBNIl0sIlRodXJzZGF5IjpbIjExOjAwIEFNIiwiMTE6MzAgQU0iLCIxMjowMCBQTSIsIjEyOjMwIFBNIl0sIkZyaWRheSI6WyIxMDowMCBBTSIsIjEwOjMwIEFNIiwiMTE6MDAgQU0iLCIxMTozMCBBTSIsIjEyOjAwIFBNIiwiMTI6MzAgUE0iLCIxOjAwIFBNIiwiMTozMCBQTSIsIjI6MDAgUE0iLCIyOjMwIFBNIl0sIlNhdHVyZGF5IjpbIjEwOjAwIEFNIiwiMTA6MzAgQU0iLCIxMTowMCBBTSIsIjExOjMwIEFNIiwiMTI6MDAgUE0iLCIxMjozMCBQTSIsIjE6MDAgUE0iLCIxOjMwIFBNIiwiMjowMCBQTSIsIjI6MzAgUE0iXX19LCIkZXJyb3JzIjp7InN0YXJ0VGltZSI6eyJuYW1lIjoiVmFsaWRhdG9yRXJyb3IiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA5OjAwQU1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJzdGFydFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6InN0YXJ0VGltZSIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIiwidHlwZSI6ImNhc3QiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJraW5kIjoiY2FzdCIsInBhdGgiOiJzdGFydFRpbWUiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJyZWFzb24iOnsic3RyaW5nVmFsdWUiOiJcIjA5OjAwQU1cIiIsInZhbHVlVHlwZSI6InN0cmluZyIsImtpbmQiOiJOdW1iZXIiLCJ2YWx1ZSI6IjA5OjAwQU0iLCJwYXRoIjoic3RhcnRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDk6MDBBTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcInN0YXJ0VGltZVwiIn19LCJlbmRUaW1lIjp7Im5hbWUiOiJWYWxpZGF0b3JFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiIsInByb3BlcnRpZXMiOnsicGF0aCI6ImVuZFRpbWUiLCJtZXNzYWdlIjoiQ2FzdCB0byBOdW1iZXIgZmFpbGVkIGZvciB2YWx1ZSBcIjA1OjAwUE1cIiAodHlwZSBzdHJpbmcpIGF0IHBhdGggXCJlbmRUaW1lXCIiLCJ0eXBlIjoiY2FzdCIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fSwia2luZCI6ImNhc3QiLCJwYXRoIjoiZW5kVGltZSIsInZhbHVlIjoiMDU6MDBQTSIsInJlYXNvbiI6eyJzdHJpbmdWYWx1ZSI6IlwiMDU6MDBQTVwiIiwidmFsdWVUeXBlIjoic3RyaW5nIiwia2luZCI6Ik51bWJlciIsInZhbHVlIjoiMDU6MDBQTSIsInBhdGgiOiJlbmRUaW1lIiwicmVhc29uIjp7ImdlbmVyYXRlZE1lc3NhZ2UiOnRydWUsImNvZGUiOiJFUlJfQVNTRVJUSU9OIiwiYWN0dWFsIjpmYWxzZSwiZXhwZWN0ZWQiOnRydWUsIm9wZXJhdG9yIjoiPT0ifSwibmFtZSI6IkNhc3RFcnJvciIsIm1lc3NhZ2UiOiJDYXN0IHRvIE51bWJlciBmYWlsZWQgZm9yIHZhbHVlIFwiMDU6MDBQTVwiICh0eXBlIHN0cmluZykgYXQgcGF0aCBcImVuZFRpbWVcIiJ9fX0sImlhdCI6MTY4ODEzOTA2N30.6WU2V7YqnuGTiDG2BPMMKPjpMfGkwWFCZ80we9zmwxg"
  var decoded = jwt_decode(token);
  // console.log("code 123",decoded)

  console.log("code decodeddd",decoded._doc._id)

  const user=decoded._doc
  // console.log(user)
  // console.log(user._id)

  const userid = decoded._doc._id;

  // const user = useSelector(setInfo);
  // console.log("doctorrrrrr",user)
  const getRequest = useFetch('GET');
  const postRequest= useFetch('POST')




  //receive- Message
  useEffect(()=>{
    socket.current=io("http://localhost:8800")

      socket.current.on("getMessage",data=>{
          setReceiveMessage({
            sender:data.senderId,
            text:data.text,
            createdAt:Date.now()
          })
      })
   
  },[socket])

useEffect(()=>{
  receiveMessage && currentChat?.members.includes(receiveMessage.sender) &&
  setMessages((prev)=>[...prev,receiveMessage])
},[receiveMessage,currentChat])

  useEffect(()=>{
    socket.current.emit("addUser",userid);
    socket.current.on("getUsers",users=>{ 
      setOnlineUsers(users)
      // console.log(users)
    })
  },[user])

//  console.log(socket);



//get chat connection list
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await getRequest('/conversations/' + userid);

        setConversations(res);
      } catch (error) {
        // console.log(error);
      }
    };
    getConversations();
  // }, [userid]);
}, []);


  useEffect(() => {
    const getMessages = async () => {
      try {
        console.log('asdf');
        const res = await getRequest('/messages/' + currentChat?._id)
        // console.log('1111111111111111111111111111', res);
        setMessages(res)
      }
      catch (error) {
        console.log(error)
      }
    }
    getMessages();
  }, [currentChat])




  const handleSubmit =async(e) =>{
    e.preventDefault();
    const message = {
      sender :userid,
      text:sendMessage,
      conversationId :currentChat?._id
    }

    const receiverId=currentChat.members.find(member=>member !==userid)
    console.log("receiverId",receiverId)

socket.current.emit("sendMessage",{
  senderId:userid,
  receiverId,
  text:sendMessage
})

    try
    {
      const res =await postRequest('/messages',message)
      setMessages([...messages,res])
      setSendMessage("")
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[messages])



  // console.log(messages)
  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div className="container mx-auto shadow-lg rounded-lg">
        {/* <!-- Header --> */}
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">GoingChat</div>
          <div className="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>
        {/* <!-- End Header --> */}
        {/* <!-- Chatting --> */}
        <div className="flex flex-row justify-between bg-white">
          {/* <!-- Chat list --> */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* <!-- Search component --> */}
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {/* <!-- End Search component --> */}

            {/* <!-- User list --> */}


            {conversations.map((c) => (

              <div onClick={() => setCurrentChat(c)}>
                <ConversationComponent conversation={c} currentUser={userid} />

              </div>
            ))}

          </div>

            <div className="w-full px-5 flex flex-col justify-between">
            {/* <!-- Message --> */}
            {messages.map((m) => {
              return <div ref={scrollRef}>

                 <MessageContent chat={currentChat} messages={m} own={m.sender === userid} />

              </div>
              
            })}


<div className="py-5 flex items-center">
  <div className="relative flex-grow">
    <input
      className="w-full bg-gray-300 py-5 px-3 rounded-xl"
      type="text"
      placeholder="Type your message here..."
      onChange={(e) => setSendMessage(e.target.value)}
      value={sendMessage}
    />
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-md"
      onClick={handleSubmit}
    >
      Submit
    </button>
  </div>
</div>












            </div> 
      

          {/* <!-- End Message --> */}
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">MERN Stack Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover rounded-xl h-64"
                alt=""
              />
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;




// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import useFetch from '../../../hooks/useFetch';
// import ConversationComponent from '../Conversation';
// import MessageContent from '../ChatComponent';
// import io from 'socket.io-client';

// function Messenger() {

//   const [conversations, setConversations] = useState([]); // List of all conversations
//   const [currentChat, setCurrentChat] = useState(null); // show conversertion when currently click
//    const [messages, setMessages] = useState([]); // for seeing the chat conversation
//   const [sendMessage,setSendMessage]=useState(null)
//   const [receiveMessage,setReceiveMessage] = useState(null);
  
//   // const [socket,setSocket]=useState(null)


//   const scrollRef=useRef()
//   const socket = useRef();

//   const user = useSelector((state) => state);
//   const userid = user?.root?.user.id;
//   const getRequest = useFetch('GET');
//   const postRequest= useFetch('POST')

//    //send message
//    useEffect(()=>{
//     if(sendMessage !== null){
//       socket.current.emit('send-message',sendMessage)
//     }
//   },[sendMessage]);


//  //socket
//  useEffect(()=>{
//   socket.current = io('http://localhost:8800');
  
//   socket.current.on('welcome', (message) => {
//     console.log(message);
//   });
//   socket.current.emit("new-user-add",userid);
 
// },[user])
//    //recieve message
//    useEffect(()=>{
//     socket.current.on('recieve-message',(data)=>{
//       setReceiveMessage(data)
//     })
//   },[])




//   useEffect(() => {
//     const getConversations = async () => {
//       try {
//         const res = await getRequest('/conversations/' + userid);

//         setConversations(res);
//       } catch (error) {
//         // console.log(error);
//       }
//     };
//     getConversations();
//   }, [userid]);


//   // useEffect(() => {
//   //   const getMessages = async () => {
//   //     try {
//   //       console.log('asdf');
//   //       const res = await getRequest('/messages/' + currentChat?._id)
//   //       console.log('1111111111111111111111111111', res);
//   //       setMessages(res)
//   //     }
//   //     catch (error) {
//   //       console.log(error)
//   //     }
//   //   }
//   //   getMessages();
//   // }, [currentChat])

//   const handleSubmit =async(e) =>{
//     e.preventDefault();
//     const message = {
//       sender :userid,
//       text:sendMessage.trim(),
//       conversationId :currentChat?._id
//     }

//     try
//     {
//       const res =await postRequest('/messages',message)
//       setMessages([...messages,res])
//       setSendMessage("")
//     }catch(error){
//       console.log(error)
//     }

//     const recieverId = currentChat.members.find((id) => id !== userid);
//     setSendMessage({ ...message, recieverId })
//   }

//   useEffect(()=>{
//     scroll.current?.scrollIntoView({behavior:"smooth"})
//   },[messages])



//   // console.log(messages)
//   return (
//     <div>
//       {/* <!-- This is an example component --> */}
//       <div className="container mx-auto shadow-lg rounded-lg">
//         {/* <!-- Header --> */}
//         <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
//           <div className="font-semibold text-2xl">GoingChat</div>
//           <div className="w-1/2">
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="search IRL"
//               className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
//             />
//           </div>
//           <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
//             RA
//           </div>
//         </div>
//         {/* <!-- End Header --> */}
//         {/* <!-- Chatting --> */}
//         <div className="flex flex-row justify-between bg-white">
//           {/* <!-- Chat list --> */}
//           <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
//             {/* <!-- Search component --> */}
//             <div className="border-b-2 py-4 px-2">
//               <input
//                 type="text"
//                 placeholder="search chatting"
//                 className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
//               />
//             </div>
//             {/* <!-- End Search component --> */}

//             {/* <!-- User list --> */}


//             {conversations.map((c) => (

//               <div onClick={() => setCurrentChat(c)}>
//                 <ConversationComponent conversation={c} currentUser={userid} />

//               </div>
//             ))}

//           </div>

//             <div className="w-full px-5 flex flex-col justify-between">
//             {/* <!-- Message --> */}
//             {messages.map((m) => {
//               return <div ref={scrollRef}>

//                  {/* <MessageContent chat={currentChat} messages={m} own={m.sender === userid} setSendMessage={setSendMessage} recieveMessage={receiveMessage} /> */}
//                  <MessageContent chat={currentChat}  currentUserId={userid} own={m.sender === userid}  recieveMessage={receiveMessage} />

//               </div>
              
//             })}


// <div className="py-5 flex items-center">
//   <div className="relative flex-grow">
//     <input
//       className="w-full bg-gray-300 py-5 px-3 rounded-xl"
//       type="text"
//       placeholder="Type your message here..."
//       onChange={(e) => setSendMessage(e.target.value)}
//       value={sendMessage}
//     />
//     <button
//       className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-md"
//       onClick={handleSubmit}
//     >
//       Submit
//     </button>
//   </div>
// </div>












//             </div> 
      

//           {/* <!-- End Message --> */}
//           <div className="w-2/5 border-l-2 px-5">
//             <div className="flex flex-col">
//               <div className="font-semibold text-xl py-4">MERN Stack Group</div>
//               <img
//                 src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
//                 className="object-cover rounded-xl h-64"
//                 alt=""
//               />
//               <div className="font-semibold py-4">Created 22 Sep 2021</div>
//               <div className="font-light">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Messenger;
