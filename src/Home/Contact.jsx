import React from 'react'
import { BsClockFill, BsMapFill, BsMessenger, BsPhoneFill } from 'react-icons/bs'
import { BiSolidMessage } from 'react-icons/bi'
import '../styles/Contact.scss'
import Footer from './Footer'
import pep1 from "../img/people/1.png"
import pep2 from "../img/people/2.png"
import pep3 from "../img/people/3.png"
const Contact = () => {
  return (
    <>
      <div>
        <div class="know">
          <h1>#Let's talk</h1>
          <p>LEAVE A MESSAGE.We love to hear with you.... </p>
        </div>

        {/* <!-- contact section --> */}
        <section id="contact">
          <div class="detail">
            <span>GET IN TOUCH</span>
            <h1>Visit one of our agency locations or contact us today</h1>
            <h3>Head Office</h3>

            <div class="ico">
              <p><BsMapFill /><span> Greater Noida , Uttar Pradesh 201306</span></p> 
              <p><BiSolidMessage /><span>ayushgoel3388@gmail.com</span></p>
              <p><BsPhoneFill /> <span>9560496817</span></p>
              <p><BsClockFill /><span>Mon to Sat 9:00 to 10pm</span></p>
            </div>
          </div>
          <div class="map">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48229.44327253276!2d-73.77389684999999!3d40.930210550000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d89d5ba56b5%3A0xcf7ac33b6a7edaa2!2sNew%20Rochelle%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1692563715642!5m2!1sen!2sin"
            width="600" height="450" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>

        {/* <!-- input section --> */}
        <section id="user">
          <div class="mes">
            <p>LEAVE A MESSSAGE</p>
            <h1>We love to hear from you</h1>
            <form>

              <div class="form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="subject" />
                <textarea id="message" cols="10" rows="10" placeholder="Your Message" />
              </div>
              <button>submit</button>
            </form>
          </div>


          <div class="person">
            <div class="p1">

              <img src={pep1}/>
              <div class="p1detail">
                <h1>John Doe</h1>
                <span>Senior Marketing Manager</span>
                <span>Phone - 987xxxxx</span>
                <span>Email - abc@gmail.com</span>
              </div>
            </div>
            <div class="p1">

              <img src={pep2} />
              <div class="p1detail">
                <h1>William Smith</h1>
                <span>Senior Marketing Manager</span>
                <span>Phone - 987xxxxx</span>
                <span>Email - xyz@gmail.com</span>
              </div>
            </div>
            <div class="p1">

              <img src={pep3} />
              <div class="p1detail">
                <h1>Emma Stone</h1>
                <span>Senior Marketing Manager</span>
                <span>Phone - 987xxxxx</span>
                <span>Email - pqr@gmail.com</span>
              </div>
            </div>
          </div>
        </section >
        {/* <!-- signup section --> */}

        < section id="sign" class="section-p1" >
          <div class="format">
            <h1>Sign Up For Newsletters</h1>
            <span>get e-mail updates about our latest shop and special offers</span>
          </div>

          <div class="form">
            <input type="email" placeholder="Your email address" />
            <button>Sign up</button>
          </div>
        </section >

      </div >
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Contact