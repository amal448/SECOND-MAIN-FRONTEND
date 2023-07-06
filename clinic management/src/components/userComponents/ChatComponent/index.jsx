import React from 'react';

function MessageContent({ chat, messages,own }) {
  console.log(messages);
  return (
      <div className="w-full px-5 flex flex-col justify-between">
      {chat ? (
        <>
          <div className="flex flex-col mt-5">
          <div className={own ? "flex justify-end mb-4" : "flex justify-start mb-4"}>
              <div className={own ? `mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white` : `mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-br-3xl rounded-tr-xl text-white`}>
                {messages.text}
              </div>
              {/* <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              /> */}
            </div>
          </div>
        </>
      ) : (
        <>
        <span>Open a conversation</span>
        </>
      )}
    </div>
  );
}

export default MessageContent;



// import React, { useEffect, useState } from 'react';
// import useFetch from '../../../hooks/useFetch';
// // function MessageContent({ chat, messages,own }) {

// function MessageContent({ chat,currentUserId,recieveMessage,own }) {
 
//  const [userData,setUserData]=useState(null)
//  const [messages, setMessages] = useState([]);

//  const getRequest=useFetch('GET')

//  useEffect(()=>{
//   if(recieveMessage!==null && recieveMessage.conversationId ===chat._id){
//     setMessages([...messages, recieveMessage])

//   }
//  }, [recieveMessage])

// // fetch data

// useEffect(()=>{
//  const userId=chat?.members?.find((id)=>id !==currentUserId)
//  console.log("userId in messageContent",userId);
//   const getUserData =async ()=>{
//     try{
//           const user=await getRequest(`/get-doctor/${userId}`)
//           setUserData(user?.data)
//     }
//     catch (error){
//       return error
//     }
//   }
  
//   if (chat !== null) getUserData();
// }, [chat, currentUserId]);


// useEffect(() => {
//   const fetchMessages = async () => {
//     try {
//       const data = await getRequest(`/message/${chat?._id}`)
//       setMessages(data?.data?.messages);
//     } catch (error) {
//       return error;
//     }
//   };
//   if (chat !== null) fetchMessages();
// }, [chat]);



//   console.log(messages);
//   return (
//       <div className="w-full px-5 flex flex-col justify-between">
//       {chat ? (
//         <>
//           <div className="flex flex-col mt-5">
//           <div className={own ? "flex justify-end mb-4" : "flex justify-start mb-4"}>
//               <div className={own ? `mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white` : `mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-br-3xl rounded-tr-xl text-white`}>
//                 {messages.text}
//               </div>
//               {/* <img
//                 src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                 className="object-cover h-8 w-8 rounded-full"
//                 alt=""
//               /> */}
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//         <span>Open a conversation</span>
//         </>
//       )}
//     </div>
//   );
// }

// export default MessageContent;