import React from 'react'
import { useState } from 'react'
import products from '../products/products';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import men_img from '../img/banner/men.jpg'
import Footer from './Footer';
import men_banner from '../img/banner/b1.jpg'
import { BsSuitHeart } from 'react-icons/bs';
import Navbar from '../components/Navbar';
const Men = () => {
  const productsPerPage = 11;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.filter(product => product.category === 'men')
  const displayedDiscountProducts = products.filter(product => product.discount);
  console.log("Discounted products:", displayedDiscountProducts);

  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div className="men_image">
        <img src={men_img} alt="men-image" />
      </div>
      <div className="collection_product">
        <div className="text">

          <h1>Men's Collection</h1>
        </div>
        <div className="products">
          <ul className='product_list'>

            {displayedProducts.map(product => (
              <li key={product.id} className='product_item'>

                <Link to={`/DetailPage/${product.id}`} >
                  <img src={product.img} alt="{product.name}" />

                  {/* <div className="text"> 

                    <div className='article'>{product.article}</div>
                    <div className='name'>{product.name}</div>
                    <div className='discount'>{product.discount}</div>
                    <div className='name'>{product.price}</div>
                    <div className="but">
                      <div className="icon">

                        <BsSuitHeart />
                      </div>
                      <button>

                        Whislist
                      </button>
                    </div>
                  </div> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}><FcPrevious /></button>
          <span>{`${currentPage} of ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}><FcNext /></button>
        </div> */}
      </div>
      {/* <div className='men_image'>
        <img src={men_banner} alt="" />
      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default Men
