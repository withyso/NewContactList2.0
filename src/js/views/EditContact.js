import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditContact = () => {
  const params = useParams();
  const postURL = "https://playground.4geeks.com/contact/agendas/yoelwithy/contacts";
  const contactURL = "https://playground.4geeks.com/contact/";
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);


  /* Here I save all the data from inputs */
  const [inputData, setInputData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  })

  useEffect(() => {
    fetch(contactURL + 'agendas/yoelwithy')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data.contacts)
        setUserData(data.contacts)
      })
      .catch((error) => { error })
  }, [])


  /* This is the function that control all the inputs */
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  /* POST fetch to send all the data */
  const sendContactData = () => {
    fetch(postURL, {
      method: 'POST',
      body: JSON.stringify({
        "name": inputData.name,
        "phone": inputData.phone,
        "email": inputData.email,
        "address": inputData.address
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then(response => {
        console.log('contacto creado', response)
        navigate('/')
      })
      .catch(error => { error })
  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='container addContactOptions mt-5 d-flex align-items-center gap-3 justify-content-center'>
          <Link to="/">
            <button className='btn btn-danger'>  <i className="fa-solid fa-arrow-left"></i> Back </button>
          </Link>
          <h2 className='fs-1 display-2 text-center fw-bolder'>Edit Contact</h2>
        </div>
        <div className='container mt-3'>
          {/*Form with inputs*/}
          <form id='addContactForm' onSubmit={(e) => {
            sendContactData();
            e.preventDefault()
          }}>
            <div className='container bg-light' style={{ maxWidth: "max-content" }}>
              <div className='row inputGroup p-4 pb-2 pt-2 justify-content-center'>
                <div className='col-md-12 col-sm-12 mt-3'>
                  <label htmlFor="inputFirstName" className="form-label h5"> Full Name </label>
                  <input type="text" className="form-control mt-1" id="inputFirstName" onChange={handleInputChange} aria-describedby="nameHelp" placeholder={`${userData.name}`} name='name' required />
                </div>
              </div>
              <div className='row inputGroup p-4 pt-2 justify-content-center'>
                <div className='col-md-7 col-sm-12 mt-3'>
                  <label htmlFor="inputAddress" className="form-label h5"> Address </label>
                  <input type="text" className="form-control mt-1" id="inputAddress" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='5th avenue, new york' name='address' required />
                </div>
                <div className='col-md-5 col-sm-12 mt-3'>
                  <label htmlFor="inputPhone" className="form-label h5"> Phone </label>
                  <input type="phone" className="form-control mt-1" id="inputPhone" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='+584122793601' name='phone' />
                </div>
              </div>
              <div className='row inputGroup p-4 pb-0 pt-2 justify-content-center'>
                <div className='col-md-12 col-sm-12'>
                  <label htmlFor="inputEmail" className="form-label h5"> Email </label>
                  <input type="email" className="form-control mt-1" id="inputEmail" onChange={handleInputChange} aria-describedby="nameHelp" placeholder='example@email.com' name='email' required />
                </div>
              </div>
              <div className='row inputGroup p-4 pt-3'>
                <div className='col-md-12 col-sm-12 d-flex justify-content-center gap-2'>
                  <button type='submit' className='btn btn-success'> <i className="fa-solid fa-check"></i> Save </button>
                  <button className='btn btn-primary' onClick={(e) => {
                    let form = document.querySelector('#addContactForm')
                    form.reset()
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

export default EditContact