import React from 'react'
import Navbar from '../components/Navbar'
import mp_4 from '../img/about/1.mp4'
import ab1 from '../img/about/a6.jpg'
import '../styles/About.scss'
import Footer from './Footer'
const About = () => {
  return (
    <>
  
      <div>
        <div class="know">
          <h1>#know US</h1>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
        <div id="who">

          <div class="we">
            <img src={ab1} />
            <div class="tex">
              <h1>Who We Are?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                vero, perferendis accusantium laboriosam velit blanditiis sapiente
                molestias eligendi repellat incidunt, totam distinctio explicabo
                dolorem ratione doloribus! Sit aperiam pariatur quibusdam.
              </p>
              <abbr title="">Create stunning image with as muyvh as Kickstartercontrol Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet.</abbr>

              <marquee bgcolor="#ccc" logo="-1" scrollamount="5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae, minima
                ullam dolorum quaerat delectus obcaecati facilis nam aperiam sequi.</marquee>
            </div>
          </div>

        </div>
        <section id="about-app">
          <h1>Download Our <a href="#">App</a></h1>
          <div class="video">
            <video autoplay muted loop src={mp_4} ></video>
          </div>

        </section>
        <section id="sign" class="section-p1">
          <div class="format">
            <h1>Sign Up For Newsletters</h1>
            <span>get e-mail updates about our latest shop and special offers</span>
          </div>

          <div class="form">
            <input type="email" placeholder="Your email address" />
            <button>Sign up</button>
          </div>
        </section>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default About
