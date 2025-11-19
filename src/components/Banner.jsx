import React from 'react'
const Banner = () => {
  return (
      <div className='container'>
        <div className="row banner-section display align-items-center">
              <div className="col-lg-7">
                  <div className='banner-left'>
                      <h3>Art of fine dining</h3>
                      <h1>Dining Redefined with <span>Every Bite</span></h1>
                      <p className='mt-3 mb-4'>Immerse yourself in a dining experience like no other, where every dish is a masterpiece of flavor, crafted with care and precision. From the freshest ingredients.</p>

                      <div className='display align-items-center gap-md-5 gap-3 mt-5'>
                          <button>Book a Table <i className="ri-arrow-right-long-line ps-2"></i></button>
                          <div className='download'>
                            <a href="javascript:void(0);">Download App</a>
                            <i class="ri-google-play-fill ps-2"></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-5 display justify-content-center mt-5 mt-lg-0">
                 
                 <div className='banner-imgs'>
                    <div className='banner-img position-relative'>
                      <img src="assets/images/hero-img.jpg" alt="" />
                  </div>

                  <div className='banner-img-1 position-absolute'>
                      <div className='img-animae'>
                          <div className='img-inner banner-inner-img'>
                            <img src="assets/images/hero-circle-img-1.jpg" alt="" />
                          </div>
                      </div>
                  </div>

                  <div className='banner-img-2 position-absolute'>
                    <div className='img-animae'>
                          <div className='img-inner'>
                            <img src="assets/images/hero-circle-img-2.jpg" alt="" />
                          </div>
                      </div>
                  </div>
                 </div>

              </div>
        </div>
      </div>
  )
}

export default Banner