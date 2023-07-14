

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import ConversationComponent from '../Conversation';
import MessageContent from '../ChatComponent';
import io from 'socket.io-client';

function Messenger() {

  const [conversations, setConversations] = useState([]); // List of all conversations
  const [currentChat, setCurrentChat] = useState(null); // show conversertion when currently click
  const [messages, setMessages] = useState([]); // for seeing the chat conversation
  const [sendMessage,setSendMessage]=useState("")
  const [receiveMessage,setReceiveMessage]=useState(null)
  const [onlineUsers,setOnlineUsers] =useState([])

  const socket =useRef()
  const scrollRef=useRef()

  const user = useSelector((state) => state);
  const userid = user?.user.id;
  console.log("userid",userid)
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
   
  },[])

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

 console.log(socket);



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
  }, [userid]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        console.log('asdf');
        const res = await getRequest('/messages/' + currentChat?._id)
        console.log('1111111111111111111111111111', res);
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

    if(sendMessage.trim() !== ''){

      const message = {
        sender :userid,
        text:sendMessage,
        conversationId :currentChat?._id
      }
  
      const receiverId=currentChat.members.find(member=>member !==userid)
  
  
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
      disabled={sendMessage.trim() === ''}
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
