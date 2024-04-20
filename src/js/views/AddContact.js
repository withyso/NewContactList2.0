import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='container addContactOptions mt-5 d-flex align-items-center gap-3 justify-content-center'>
          <Link to="/">
            <button className='btn btn-danger'>  <i className="fa-solid fa-arrow-left"></i> Back </button>
          </Link>
          <h2 className='fs-1 display-2 text-center fw-bolder'>Add New Contact</h2>
        </div>
        <div className='container mt-3'>
          {/*Form with inputs*/}
          <div className='container bg-light' style={{ maxWidth: "max-content" }}>
            <div className='row inputGroup p-4 pt-2 justify-content-center'>
              <div className='col-md-6 col-sm-12 mt-3'>
                <label htmlFor="inputFirstName" className="form-label h5"> First Name</label>
                <input type="text" className="form-control mt-1" id="inputFirstName" aria-describedby="nameHelp" placeholder='Mike' />
              </div>
              <div className='col-md-6 col-sm-12 mt-3'>
                <label htmlFor="inputLastName" className="form-label h5"> Last Name</label>
                <input type="text" className="form-control mt-1" id="inputLastName" aria-describedby="nameHelp" placeholder='Flemming' />
              </div>
            </div>
            <div className='row inputGroup p-4 pb-0 pt-2 justify-content-center'>
              <div className='col-md-12 col-sm-12'>
                <label htmlFor="inputEmail" className="form-label h5"> Email </label>
                <input type="email" className="form-control mt-1" id="inputEmail" aria-describedby="nameHelp" placeholder='example@email.com' />
              </div>
            </div>
            <div className='row inputGroup p-4 pt-2 justify-content-center'>
              <div className='col-md-7 col-sm-12 mt-3'>
                <label htmlFor="inputAddress" className="form-label h5"> Address </label>
                <input type="text" className="form-control mt-1" id="inputAddress" aria-describedby="nameHelp" placeholder='5th avenue, new york' />
              </div>
              <div className='col-md-5 col-sm-12 mt-3'>
                <label htmlFor="inputPhone" className="form-label h5"> Phone </label>
                <input type="phone" className="form-control mt-1" id="inputPhone" aria-describedby="nameHelp" placeholder='+584122793601' />
              </div>
            </div>
            <div className='row inputGroup p-4 pt-2'>
              <div className='col-md-12 col-sm-12 d-flex justify-content-center gap-2'>
                <button className='btn btn-success'> <i class="fa-solid fa-check"></i> Send </button>
                <button className='btn btn-primary'>  <i class="fa-solid fa-rotate-right"></i> Reset </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </React.Fragment>
  )
}

export default AddContact