import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import { setDoctors } from "../../../store/slice/userSlice";

import ContactForm from "../../../components/userComponents/contactForm";
import Footer from "../../../components/userComponents/footer";

import aboutBackground from "../../../assets/svg/about-section-background.svg";
import backgroundSvg from "../../../assets/svg/shape.svg";
import person1 from "../../../assets/svg/person-1.svg";
import person2 from "../../../assets/svg/person-2.svg";

import "./style.scss";
function AboutPage() {
  const getRequest = useFetch("GET");
  const dispatch = useDispatch();

  const { doctors } = useSelector((state) => state.root.user);

  useLayoutEffect(() => {
    getRequest("/user/get-all-doctors")
      .then((res) => {
        console.log(res);
        dispatch(setDoctors(res?.doctors));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-home">
      <div className="intro-section">
        <div className="text">
          <h1>We help people to get appointment in online</h1>
          <span>
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations.
          </span>
          Book an appointment
        </div>
        <div className="image">
          <img src={backgroundSvg} alt="" />

          <div className="person">
            <img src={person2} alt="" />
            <img src={person1} alt="" />
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="image">
          <img src={aboutBackground} alt="" />
        </div>
        <div className="text">
          <span>Biography</span>
          <h1>Who We Are</h1>
          <p>
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time.
            <br />
            <br />
            It's 2019: time to sink or swim.
            <br />
            <br />
            We are your Social Media Marketing Agency.
          </p>
          <br />
          <br />
          <a href="#">see more</a>
        </div>
      </div>
   
     
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutPage;
