import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const CreateAgenda = () => {
    const navigate = useNavigate()
    const [userValue, setUserValue] = useState('')
    const { store, actions } = useContext(Context)
    const handleInputValue = () => {
        console.log(userValue);
        // let finalValue = userValue;
        //actions.setUserAgenda(finalValue)
        localStorage.setItem('userAgenda', userValue);
        actions.createAgenda();
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }
    return (
        <React.Fragment>
            <div className='container mt-5 p-3 pt-2'>
                <div className='row justify-content-center mt-5'>
                    <div className="col-md-6 col-sm-12 alert alert-warning alert-dismissible show fade" role="alert">
                        <strong>Oh no! :( </strong> Parece que no encontramos un usuario registrado. Por favor introduce un nombre de usuario para crear una agenda!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-sm-12 p-5 bg-light border rounded'>
                        <div className='info d-flex flex-column align-items-center'>
                            <label htmlFor="inputFirstName" className="form-label h5 mb-3"> Nombre de Agenda </label>
                            <input type="text" className="form-control mt-1" id="inputFirstName" aria-describedby="nameHelp" placeholder='yoels2024' name='agenda_name' required onChange={(e) => {
                                setUserValue(e.target.value)
                                actions.setUserAgenda(e.target.value)
                            }} />
                        </div>
                        <div className='button-group gap-2 mt-3 d-flex justify-content-end'>
                            <button className='btn btn-success' onClick={handleInputValue}> Save </button>
                            <Link to="/">
                                <button className='btn btn-danger'> Cancel </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CreateAgenda