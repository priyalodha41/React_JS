import React from 'react'
import Blogcontent from './Blogcontent'

const Ourblog = () => {
  return (
    <div className='blog'>
        <div className="container position-relative z-1">
            <div className="row">
                 <div className="col-12">
                    <div className='text-center dish-title blog-title'>
                        <h3 className='mb-3'>Latest Blog</h3>
                        <h1>Explore our latest news <span>and updates</span></h1>
                    </div>
                </div>
            </div>
            <div className="row display align-items-center main-blog position-relative z-1 gy-lg-0 gy-4 ps-md-0 ps-2 pe-md-0 pe-2 ">
                <div className="col-lg-4 col-md-6">
                    <Blogcontent 
                        img="assets/images/post-1.jpg"
                        text="5 Tips for Perfecting Your Home Dining Experience"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <Blogcontent 
                        img="assets/images/post-2.jpg"
                        text="Why Locally Sourced Ingredients Make a Difference"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <Blogcontent 
                        img="assets/images/post-3.jpg"
                        text="Creating Memorable Dining Moments with Friends"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourblog