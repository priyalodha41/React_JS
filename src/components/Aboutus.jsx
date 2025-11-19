import React from 'react'
import Counter from './Counter'
import Aboutusdetailbox from './Aboutusdetailbox'

const Aboutus = () => {
  return (
    <div className='aboutus position-relative'>
        <div className="container">
                <div className="row display align-items-center gy-lg-0 gy-5">
                    <div className="col-lg-6  col-12 order-lg-1 order-2 display justify-content-center position-relative">
                        <div>
                            <div className='main-aboutus-img position-relative z-1'>
                                <img src="/assets/images/about-us-image.jpg" alt=""/>
                            </div>
                            <div className='aboutus-img'>
                                    <div className='img-inner display justify-content-center align-items-center'>
                                        <img src="/assets/images/about-us-img-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className='aboutus-iconbox'>
                                <img src="/assets/images/icon-company-experience.svg" alt="" />
                                <div className="stats mt-3">
                                    <h3><Counter end={30} />+  years of experience </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <div className='banner-left aboutus-content'>
                            <h3>About Us</h3>
                            <h1>Our commitment to authenticity & <span>Excellence</span></h1>
                            <p className='mt-3 mb-5'>
                               Every dish we create is a celebration of connection, crafted with passion and inspired by diverse flavors. Join us in an inviting space where every bite sparks joy and every moment becomes a cherished memory.
                            </p>

                            <div>
                            <ul>
                                <li className='mb-2'>
                                <i class="ri-check-fill"></i>
                                <span>seasonal &amp; locally sourced ingredients</span>
                                </li>
                                <li className='mb-2'><i class="ri-check-fill"></i><span>vegetarian &amp; dietary-friendly options</span></li>
                                <li className='mb-2'><i class="ri-check-fill"></i><span>exquisite pairings &amp; unique flavors</span></li>
                                </ul>
                            </div>

                            <div className='display align-items-center gap-4 mt-5'>
                                <button>Order Now<i className="ri-arrow-right-long-line ps-2"></i></button>
                                 <button className='aboutus-button'>Read More <i className="ri-arrow-right-long-line ps-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="container">
            <div className="row about-detail-container gy-lg-0 gy-3">
                <div className="col-12 col-lg-4 col-md-6">
                <Aboutusdetailbox
                    img="/assets/images/icon-about-detail-1.svg"
                    text="premium dining"
                    content="It's very personal, and can only be a positive experience."
                />
                </div>

                <div className="col-12 col-lg-4 col-md-6">
                <Aboutusdetailbox
                    img="/assets/images/icon-about-detail-2.svg"
                    text="abundant flavors"
                    content="At secret recipe, we take immense pride in crafting."
                />
                </div>

                <div className="col-12 col-lg-4 col-md-6">
                <Aboutusdetailbox
                    img="/assets/images/icon-about-detail-3.svg"
                    text="indigenous meal"
                    content="With local ingredients, unique spins on traditional flavors."
                />
                </div>
  </div>
        </div>

    </div>

  )
}

export default Aboutus