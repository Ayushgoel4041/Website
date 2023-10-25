import React from 'react'
import ban_1 from '../img/banner/b7.jpg'
import ban_2 from '../img/banner/b6.jpg'
import ban_3 from '../img/banner/b5.jpg'
import ban_4 from '../img/banner/b3.jpg'
import '../styles/Blog.scss'
import Footer from './Footer'
import Navbar from '../components/Navbar'
const Blog = () => {
  return (
    <>
    
      <div class="read">
        <h1>#readmore</h1>
        <p>Read all case studies and products</p>
      </div>
      <div id="blog">

        <div class="one">
          <h1>13/01</h1>
          <img src={ban_1} width="40%" />
          <div class="tex">
            <h3>The cotton-jersey Zip-up Hoodie</h3>
            <p>Kickstarter man braid godard coloring book. Rocklettte waistcoot selfies yr wall chartreuse hexagon
              irony. godard_</p>

            <a href="#">CONTINUE READING ......</a>
          </div>
        </div>
        <div class="one">
          <h1>13/01</h1>
          <img src={ban_2} width="35%" height="10%" />
          <div class="tex">
            <h3>The cotton-jersey Zip-up Hoodie</h3>
            <p>Kickstarter man braid godard coloring book. Rocklettte waistcoot selfies yr wall chartreuse hexagon
              irony. godard_</p>

            <a href="#">CONTINUE READING ......</a>
          </div>
        </div>
        <div class="one">
          <h1>13/01</h1>
          <img src={ban_3} width="40%" height="10%" />
          <div class="tex">
            <h3>The cotton-jersey Zip-up Hoodie</h3>
            <p>Kickstarter man braid godard coloring book. Rocklettte waistcoot selfies yr wall chartreuse hexagon
              irony. godard_</p>

            <a href="#">CONTINUE READING ......</a>
          </div>
        </div>
        <div class="one">
          <h1>13/01</h1>
          <img src={ban_4} width="35%" height="5%" />
          <div class="tex">
            <h3>The cotton-jersey Zip-up Hoodie</h3>
            <p>Kickstarter man braid godard coloring book. Rocklettte waistcoot selfies yr wall chartreuse hexagon
              irony. godard_</p>

            <a href="#">CONTINUE READING ......</a>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>

    </>
  )
}

export default Blog
