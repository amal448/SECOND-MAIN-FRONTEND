import React from 'react';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
const UserProfile = () => {

let user=useSelector(state=>state)
const [users,setUser]=useState('')

useEffect(() => {
    setUser(user?.user);
  }, []);


console.log("users",users)

    return (
    <>
      <div className="p-4 md:p-8">
        <div className="bg-white shadow mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-4 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-lg md:text-xl">22</p>
                <p className="text-gray-400">Friends</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-lg md:text-xl">10</p>
                <p className="text-gray-400">Photos</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-lg md:text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative mt-4 md:mt-0">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-12 md:-mt-24 flex items-center justify-center text-indigo-500">

                <svg
                  xmlns={users?.image}
                  className="h-16 w-16 md:h-24 md:w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 text-center border-b pb-6 md:pb-12">
            <h1 className="text-2xl md:text-4xl font-medium text-gray-700 mt-4 md:mt-0">
              {users?.userName},{' '}
              <span className="font-light text-gray-500">27</span>
            </h1>
            <p className="font-light text-gray-600 mt-2 md:mt-3">
              Bucharest, Romania
            </p>
            <p className="mt-4 md:mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>
          <div className="mt-6 md:mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light px-2 md:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-indigo-500 py-2 px-4 font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;