import React from 'react'

const Alldish = ({img,text,content}) => {
  return (
    <div className='ourdishitems'>
        <div className='ourdishimg mb-4'>
                    <div className="img-animae">
                        <div className="img-inner all-dishes">
                            <img src={img} alt="" />
                    </div>
                </div>
        </div>
        <div className='ourdishcontent text-center'>
            <h3>{text}</h3>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Alldish