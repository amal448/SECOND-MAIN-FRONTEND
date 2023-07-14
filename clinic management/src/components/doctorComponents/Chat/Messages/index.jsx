import React from 'react';
import { format } from 'timeago.js';

function MessageContent({ chat, messages, own }) {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      {chat ? (
        <div className="flex flex-col mt-5">
          <div className={own ? 'flex justify-end mb-4' : 'flex justify-start mb-4'}>
            <div
              className={
                own
                  ? 'mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'
                  : 'mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-br-3xl rounded-tr-xl text-white'
              }
            >
              {messages.text}
            </div>
          </div>
          <span className={`text-xs text-gray-600 ${own ? 'self-end mr-2' : 'self-start ml-2'}`}>
            {format(messages.createdAt)}
          </span>
        </div>
      ) : (
        <span>Open a conversation</span>
      )}
    </div>
  );
}

export default MessageContent;
