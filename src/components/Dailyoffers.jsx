import React from 'react'

const Dailyoffers = () => {
  return (
        <div className="offers position-relative">
            <div className="container">
                <div className="row display align-items-center gy-lg-0 gy-5">
                    <div className="col-lg-6 col-12">
                        <div className='offers-main'>
                             <img src="/assets/images/daily-offer-image.png" alt="" />
                             <div className='burger-box'>
                                <div className="title">
                                    <h3>Delicious Burger</h3>
                                </div>
                                <div className="rating display align-items-center gap-1">
                                    <img src="/assets/images/star.png" alt="" />
                                    <img src="/assets/images/star.png" alt="" />
                                    <img src="/assets/images/star.png" alt="" />
                                    <img src="/assets/images/star.png" alt="" />
                                    <img src="/assets/images/star.png" alt="" />
                                </div>
                                <div className='list mt-4'>
                                    <ul>
                                        <li><i class="ri-check-fill me-2"></i><span>tomato sauces</span></li>
                                        <li><i class="ri-check-fill me-2"></i><span>vegitables</span></li>
                                        <li><i class="ri-check-fill me-2"></i><span>lettuce</span></li>
                                        <li><i class="ri-check-fill me-2"></i><span>cheese slice</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className='banner-left aboutus-content position-relative z-1 mt-lg-0 mt-4'>
                            <h3>our daily offers</h3>
                            <h1>taste the savings with our <span>daily specials</span></h1>
                            <p className='mt-3 mb-5'>
                              Every day is an opportunity to enjoy your favorites at a discounted price. Explore our daily rotating specials and indulge in flavorful meals at a fraction of the cost.
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
                                <button>Book Table<i className="ri-arrow-right-long-line ps-2"></i></button>
                                 <button className='aboutus-button'>Explore Menu <i className="ri-arrow-right-long-line ps-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dailyoffers