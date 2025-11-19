import React from 'react'

const Mainfooter = () => {
  return (
    <footer>
        <div className="footer-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className='mb-4'>
                                <img src="/assets/images/logo.svg" alt="" />
                            </div>
                            <div class="footer-contact-box">
                                <div class="footer-contact display align-items-center gap-2 mb-3">
                                    <div>
                                        <img src="/assets/images/icon-location.svg" alt="" />
                                    </div>
                                    <div class="footer-contact-content">
                                        <p className='mb-0'>4517 Washington Ave, Kentucky 39495</p>
                                    </div>
                                </div>
                                <div class="footer-contact display align-items-center gap-2">
                                    <div>
                                        <img src="/assets/images/icon-phone.svg" alt="" />
                                    </div>
                                    <div class="footer-contact-content">
                                        <p className='mb-0'>+01 780 859 632</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="footer-social-icon">
                                <ul className='display align-items-center gap-4'>
                                    <li><i class="ri-dribbble-line"></i></li>
                                    <li><i class="ri-facebook-fill"></i></li>
                                    <li><i class="ri-instagram-line"></i></li>
                                </ul>
                            </div>
                        </div>

                    <div class="col-md-6">
                        <div class="footer-copyright-text">
                            <p>Copyright © 2025 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Mainfooter