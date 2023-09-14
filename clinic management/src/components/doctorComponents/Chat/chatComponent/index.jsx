import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
import ConversationComponent from '../Conversation';
import MessageContent from '../Messages';
import io from 'socket.io-client';


function Messenger() {

  const [conversations, setConversations] = useState([]); // List of all conversations
  const [currentChat, setCurrentChat] = useState(null); // show conversertion when currently click
  const [messages, setMessages] = useState([]); // for seeing the chat conversation
  const [sendMessage,setSendMessage]=useState("")
  const [receiveMessage,setReceiveMessage]=useState(null)
  const [onlineUsers,setOnlineUsers] =useState([])
  const [user,setUser] = useState(null);

  const socket =useRef()
  const scrollRef=useRef()


  const info = useSelector(state => state?.doctor?.info);
  console.log("infoooooooo",info)

  let userid=info?._id
  console.log("doctorIddddddddd",userid)

  const getRequest = useFetch('GET');
  const postRequest= useFetch('POST')




  //receive- Message
  useEffect(()=>{
    socket.current=io("http://localhost:5000")
    // socket.current = io("https://www.wecareindia.online/api");
    

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
  },[])
// },[user])

//  console.log(socket);



//get chat connection list
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await getRequest('/conversations/' + userid);
        console.log("conversationssssssssssssssssssssssss",res)
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

  useEffect(() => {
    console.log("ero rrrrrrrrrrrrd");

    const getUser = async () => {
      try {
        if (currentChat) {
          const patientId = currentChat?.members?.find((m) => m !== userid);
          console.log("patientIddddddddddddddddd", patientId);
         
          const res = await getRequest("/user/user/" +patientId);
          console.log("resuserrrrrrrrrrr", res);
          setUser(res?.alluser[0]);
          console.log("userdata", user);

          // setLoading(false)
        }
      } catch (error) {
        console.log("ero d", error);
      }
    };
    getUser();

  }, [currentChat, userid]);



  const handleSubmit =async(e) =>{
    e.preventDefault();

    if(sendMessage.trim() !== ''){

      
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
        {currentChat === null && (
          <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
            <div className="font-semibold text-2xl">Patients</div>
            <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
              RA
            </div>
          </div>
        )}

        {/* <!-- End Header --> */}
        {/* <!-- Chatting --> */}
        <div className="flex flex-col md:flex-row">
          {/* <!-- Chat list --> */}
          {currentChat ? // Hide the conversation list when currentChat is truthy
          null : (
            <div className="flex flex-col w-full md:w-2/5 md:border-r-2 overflow-y-auto">
              {conversations.map((c) => (
                <div key={c.id} onClick={() => setCurrentChat(c)}>
                  <ConversationComponent
                    conversation={c}
                    currentUser={userid}
                  />
                </div>
              ))}
            </div>
          )}

        <div className="w-full md:w-5/5">
            {" "}
            {/* Adjust the width */}
            {currentChat ? (
              <>
                <div className="flex-grow p-5 overflow-y-auto">
                  <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="flex items-center">
                      {" "}
                      {/* Add flex and items-center to center the content */}
                      <img
                        src={user?.image}
                        alt="Doctor"
                        className="h-8 w-8 rounded-full ml-2"
                      />
                      <div className="font-semibold text-2xl ml-4">
                        {user?.firstName} {user?.lastName}
                      </div>
                    </div>
                    <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
                      RA
                    </div>
                  </div>

                  {messages.map((m) => (
                    <div key={m.id} ref={scrollRef}>
                      <MessageContent
                        chat={currentChat}
                        messages={m}
                        own={m.sender === userid}
                      />
                    </div>
                  ))}
                </div>

                <div className="py-5 px-3">
                  <div className="relative">
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
                      disabled={sendMessage.trim() === ""}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <div className="flex-grow p-5 flex items-center justify-center">
              <span className="text-5xl text-gray-200 text-center">Open a conversation</span>
            </div> */}
              </>
            )}
          </div>


        </div>
      </div>
    </div>
  );
}

export default Messenger;








