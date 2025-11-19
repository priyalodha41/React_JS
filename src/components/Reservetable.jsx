import React from 'react'
import Mainfooter from './Mainfooter'

const Reservetable = () => {
  return (
        <div className="reserve-body">
            <div className="container">
                <div className="row gy-lg-0 gy-3">
                    <div className="col-lg-6 col-12">
                        <div className='dish-title reserve-content'>
                            <h3 className='mb-3'>Reserve a Table</h3>
                            <h1>Reserve now your table and <span>enjoy the dining experience</span></h1>
                        </div>
                        <div className='open-hours'>
                            <h3 className='fw-bold mt-5 mb-3'>Open Hours</h3>
                            <ul>
                                <li>Mon - Thu <span>10:00 AM - 09:00 PM</span></li>
                                <li>Fri - Sat <span>09:00 AM - 10:00 PM</span></li>
                                <li>Sun <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                        <div className="reserve-form">
                            <form action="">
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='mb-4'>
                                            <label class="form-label">your name</label>
                                            <input type="text" name="name" class="form-control" id="name" placeholder="e.g. John" required=""></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='mb-4'>
                                             <label class="form-label">email address</label>
                                             <input type="email" name="email" class="form-control" id="email" placeholder="e.g. John@example.com" required=""></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='mb-4'>
                                                <label class="form-label">phone number</label>
                                                <input type="text" name="phone" class="form-control" id="phone" placeholder="e.g. + 123 456 8792" required=""></input>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-4'>
                                              <label class="form-label">date</label>
                                            <input type="date" name="date" class="form-control" id="date" required=""></input>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-4'>
                                            <label class="form-label">time</label>
                                        <select name="time" class="form-control form-select" id="time" required="">
                                            <option value="" disabled="" selected="">Select time</option>
                                            <option value="6_30pm">06:30 PM</option>
                                            <option value="7_00pm">07:00 PM</option>
                                            <option value="7_30pm">07:30 PM</option>
                                            <option value="8_00pm">08:00 PM</option>
                                            <option value="8_30pm">08:30 PM</option>
                                            <option value="9_00pm">09:00 PM</option>
                                         </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                            <div className='mb-4'>
                                                 <label class="form-label">Number Of Person</label>
                                                <select name="person" class="form-control form-select" id="person" required="">
                                                    <option value="" disabled="" selected="">Number of person</option>
                                                    <option value="1_person">1 Person</option>
                                                    <option value="5_person">5 Person</option>
                                                    <option value="10_person">10 Person</option>
                                                    <option value="15_person">15 Person</option>
                                                    <option value="20_person">20 Person</option>
                                                </select>
                                            </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="reserve-table-btn  mt-5">
                                            <button type="submit" class="btn-default disabled">reserve now</button>
                                        </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>

                   
                
                </div>
            </div>
            <Mainfooter />
        </div>
  )
}

export default Reservetable