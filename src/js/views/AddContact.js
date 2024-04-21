import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddContact = () => {

  /* Here I save all the data from inputs */
  const [inputData, setInputData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    console.log(inputData)
  }



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
          <form id='addContactForm'>
            <div className='container bg-light' style={{ maxWidth: "max-content" }}>
              <div className='row inputGroup p-4 pb-2 pt-2 justify-content-center'>
                <div className='col-md-12 col-sm-12 mt-3'>
                  <label htmlFor="inputFirstName" className="form-label h5"> Full Name </label>
                  <input type="text" className="form-control mt-1" id="inputFirstName" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='Mike Flemming' name='name' />
                </div>
              </div>
              <div className='row inputGroup p-4 pt-2 justify-content-center'>
                <div className='col-md-7 col-sm-12 mt-3'>
                  <label htmlFor="inputAddress" className="form-label h5"> Address </label>
                  <input type="text" className="form-control mt-1" id="inputAddress" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='5th avenue, new york' name='address' />
                </div>
                <div className='col-md-5 col-sm-12 mt-3'>
                  <label htmlFor="inputPhone" className="form-label h5"> Phone </label>
                  <input type="phone" className="form-control mt-1" id="inputPhone" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='+584122793601' name='phone' />
                </div>
              </div>
              <div className='row inputGroup p-4 pb-0 pt-2 justify-content-center'>
                <div className='col-md-12 col-sm-12'>
                  <label htmlFor="inputEmail" className="form-label h5"> Email </label>
                  <input type="email" className="form-control mt-1" id="inputEmail" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='example@email.com' name='email' />
                </div>
              </div>
              <div className='row inputGroup p-4 pt-3'>
                <div className='col-md-12 col-sm-12 d-flex justify-content-center gap-2'>
                  <button className='btn btn-success' onClick={(e) => {
                    console.log(inputData)
                    e.preventDefault();
                  }}> <i className="fa-solid fa-check"></i> Send </button>
                  <button className='btn btn-primary' onClick={(e) => {
                    let form = document.querySelectorAll('.form-control')
                    form.reset()
                    e.preventDefault()
                  }}>  <i className="fa-solid fa-rotate-right"></i> Reset </button>
                </div>
              </div>
            </div>
          </form>
        </div>


      </div>
    </React.Fragment>
  )
}

export default AddContact