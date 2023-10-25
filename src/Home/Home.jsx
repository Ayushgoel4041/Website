import React from 'react'
import logo_girl from '../img/features/back_img_5.jpg'
import '../styles/navbar.scss'
import button_img from '../img/features/button.png'
import img_1 from '../img/features/f1.png'
import img_2 from '../img/features/f2.png'
import img_3 from '../img/features/f3.png'
import img_4 from '../img/features/f4.png'
import img_5 from '../img/features/f5.png'
import img_6 from '../img/features/f6.png'
import img_7 from '../img/banner/b2.jpg'
import Footer from './Footer'
import products from '../products/products'
import { FcPrevious, fcNext, FcNext } from 'react-icons/fc'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DetailPage from './detailPage'
import { BsCCircle, BsSuitHeart } from 'react-icons/bs'

const Home = () => {
    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);
    const displayedDiscountProducts = products.filter(product => product.discount);
    console.log("Discounted products:", displayedDiscountProducts);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>

            <div className='home'>
                <div className="image">
                    <img src={logo_girl} alt="logo_girl" />
                    <div className="information">
                        <p>Trade-In-Offer</p>
                        <h1>Supper Value Deals <span>On All Products</span></h1>
                        <p>Some More with Coupon & Via upto 70% off</p>
                        <button><img src={button_img} alt="" /><span>Shop Now</span></button>

                    </div>
                </div>

                <div className='feature_products'>
                    <div className="feature_item">

                        <img src={img_1} alt="img 1" /><h3>Free Shipping</h3>
                    </div>
                    <div className="feature_item">
                        <img src={img_2} alt="img 2" /><h3>Online Order</h3>
                    </div>

                    <div className="feature_item">

                        <img src={img_3} alt="img 3" /><h3>Save Money</h3>
                    </div>

                    <div className="feature_item">

                        <img src={img_4} alt="img 4" /><h3>Promotions</h3>
                    </div>
                    <div className="feature_item">

                        <img src={img_5} alt="img 5" /><h3>Happy Sell</h3>
                    </div>
                    <div className="feature_item">

                        <img src={img_6} alt="img 6" /><h3>F 24/2 Support</h3>
                    </div>
                </div>
            </div>


            <div className="collection_product">
                <div className='text'>

                    <h1> Featured Product</h1>
                    <p>A Summer Collection New Modern Design</p>
                </div>

                <div className="products">
                    <ul className='product_list'>

                        {displayedProducts.map(product => (
                            <li key={product.id} className='product_item'>

                                <Link to={`/DetailPage/${product.id}`} >
                                    <img src={product.img} alt="{product.name}" />
                                    <div className="text">
                                        <div className='article'>{product.article}</div>
                                        <div className='name'>{product.name}</div>
                                        <div className='discount'>{product.discount}</div>
                                        <div className='name'>{product.price}</div>
                                        <div className="but">
                                            <div className="icon">

                                                <BsSuitHeart />
                                            </div>
                                            <button>

                                                Buy Now
                                            </button>
                                         
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><FcPrevious /></button>
                    <span>{`${currentPage} of ${totalPages}`}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}><FcNext /></button>
                </div>
            </div>

            <div className='banner'>
                <img src={img_7} alt="banner" />
                <div className="text">
                    <h2>Repair Services</h2>
                    <h1>Up to <span>70% off</span> - All Clothes & Accessories</h1>
                </div>
            </div>

            <div className="discount_product">
                <div className='text'>

                    <h1>Offer Session</h1>
                    <p>A Summer Collection New Modern Design</p>

                </div>

                <div className="products">
                    <div className="icon_contain">
                        <ul className='product_list'>
                            {displayedDiscountProducts.map(product => (
                                <li key={product.id} className='product_item'>
                                    <Link to={`/DetailPage/${product.id}`} >
                                        <img src={product.img} alt="{product.name}" />
                                        <div className='article'>{product.article}</div>
                                        <div className='name'>{product.name}</div>
                                        <div className='discount'>{product.discount}</div>
                                        <div className='name'>{product.price}</div>

                                        {/* <div className="icon"><FaShoppingCart /></div> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Home