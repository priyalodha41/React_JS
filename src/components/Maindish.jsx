import React from 'react'
import Alldish from './Alldish'

const Maindish = () => {
  return (
    <div>
        <div className="our-dishes position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className='text-center dish-title'>
                        <h3 className='mb-3'>Our Main Dishes</h3>
                        <h1>Statisfy your cravings with our <span>signature mains</span></h1>
                    </div>
                    </div>
                </div>
                <div className="row all-dishes">
                    <div className="col-xl-3 col-md-6">
                        <Alldish
                            img="/assets/images/our-dish-image-1.jpg"
                            text="soups"
                            content="Warm, comforting, and full of flavor, our soups avre the perfect start to any meal."
                         />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <Alldish
                            img="/assets/images/our-dish-image-2.jpg"
                            text="salads"
                            content="Refreshing, vibrant, and full of fresh flavors, our salads are crafted to senses."
                         />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <Alldish
                            img="/assets/images/our-dish-image-3.jpg"
                            text="main dishes"
                            content="Offering bold flavors and expertly crafted recipes that cater to every taste."
                         />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <Alldish
                            img="/assets/images/our-dish-image-4.jpg"
                            text="appetizers"
                            content="Our appetizers are the perfect way to begin your dining experience flavors."
                         />
                    </div>

                    <div className="col-12">
                        <div className='text-center mt-5 dish-footer'>
                            <p>Hungry for Something Delicious? <a href="menu.html">View All Dishes!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Maindish