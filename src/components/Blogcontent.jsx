import React from 'react'

const Blogcontent = ({img,text}) => {
  return (
    <div className='blog-content'>
        <div className='img-animae'>
            <div className="img-inner blog-img">
                <img src={img} alt="" />
            </div>
        </div>
        <div className='blog-main-content mt-4'>
                <h3 className='mb-4'>{text}</h3>
                <a href="javascript:void(0);">
                  <div className='display align-items-center'>
                      <span className='me-2'>Read More </span>
                      <i class="ri-arrow-right-long-line"></i>
                  </div>
                  </a>
        </div>
    </div>
  )
}

export default Blogcontent