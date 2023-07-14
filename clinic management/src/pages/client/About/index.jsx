// import React, { useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import useFetch from "../../../hooks/useFetch";
// import { setDoctors } from "../../../store/slice/userSlice";

// import ContactForm from "../../../components/userComponents/contactForm";
// import Footer from "../../../components/userComponents/footer";

// import aboutBackground from "../../../assets/svg/about-section-background.svg";
// import backgroundSvg from "../../../assets/svg/shape.svg";
// import person1 from "../../../assets/svg/person-1.svg";
// import person2 from "../../../assets/svg/person-2.svg";

// import "./style.scss";
// function AboutPage() {
//   const getRequest = useFetch("GET");
//   const dispatch = useDispatch();

//   const { doctors } = useSelector((state) => state.root.user);

//   useLayoutEffect(() => {
//     getRequest("/user/get-all-doctors")
//       .then((res) => {
//         console.log(res);
//         dispatch(setDoctors(res?.doctors));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="user-home">
//       <div className="intro-section">
//         <div className="text">
//           <h1>We help people to get appointment in online</h1>
//           <span>
//             Lorem Media is a full-service social media agency. We offer
//             businesses innovative solutions that deliver the right type of
//             audience to you in the most effective strategies possible. We strive
//             to develop a community around your business, polishing your
//             branding, and improving your public relations.
//           </span>
//           Book an appointment
//         </div>
//         <div className="image">
//           <img src={backgroundSvg} alt="" />

//           <div className="person">
//             <img src={person2} alt="" />
//             <img src={person1} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="about-section">
//         <div className="image">
//           <img src={aboutBackground} alt="" />
//         </div>
//         <div className="text">
//           <span>Biography</span>
//           <h1>Who We Are</h1>
//           <p>
//             Lorem Media is a full-service social media agency. We offer
//             businesses innovative solutions that deliver the right type of
//             audience to you in the most effective strategies possible. We strive
//             to develop a community around your business, polishing your
//             branding, and improving your public relations. Social Media is now
//             one of the most powerful marketing tools with the ability to
//             communicate with a target audience in real time.
//             <br />
//             <br />
//             It's 2019: time to sink or swim.
//             <br />
//             <br />
//             We are your Social Media Marketing Agency.
//           </p>
//           <br />
//           <br />
//           <a href="#">see more</a>
//         </div>
//       </div>
   
     
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default AboutPage;

import React from 'react'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <div>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        ></div>
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {/* <a href="/apply-doctor">Apply for Doctor <span aria-hidden="true">&rarr;</span></a> */}
            <Link to='/apply-doctor'>Apply for Doctor <span aria-hidden="true">&rarr;</span></Link>
            <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>
            Push to deploy
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            SSL certificates
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            Simple queues
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
              </svg>
            </div>
            Advanced security
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>



  </div>
  
  )
}

export default AboutPage



