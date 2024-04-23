import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'



const ContactCard = ({ name, email, phone, address, id, funcion }) => {
    const navigate = useNavigate();
    const putURL = 'https://playground.4geeks.com/contact/agendas/yoelwithy/contacts/'


    const deleteContact = () => {
        fetch(putURL + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).
            then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw Error(response.statusText);

                }
                else {
                    console.log(response)
                    funcion();
                    return response.json()
                }
            })
            .then(response => {
                return response
            })
            .catch(error => error)
    }

    return (
        <React.Fragment>
            <div className='container ps-4 pe-4 d-flex justify-content-center mt-3' key={id} id={id}>
                <div className="card mb-3" style={{ maxWidth: "550px" }}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img src="https://placehold.co/500x500" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center">
                                <div className='cardTitleAndOptions d-flex flex-row justify-content-around gap-3 mb-3'>
                                    <i className="fa-solid fa-pen-to-square contact-options fs-5" onClick={() => { navigate(`editcontact/${id}`) }}></i>
                                    <h5 className="card-title"><strong>{name}</strong></h5>
                                    <i className="fa-solid fa-trash contact-options fs-5" id='trashOption' data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar este contacto</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ¿Estas seguro que deseas eliminar a {name}?
                                                </div>
                                                <div className="modal-footer d-flex flex-row justify-content-center gap-3">
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><i className="fa-solid fa-x"></i> Cancelar </button>
                                                    <button type="button" className="btn btn-success" onClick={deleteContact} data-bs-dismiss="modal"><i className="fa-solid fa-check"></i> Continuar  </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush align-items-start">
                                    <li className="list-group-item"><i className="fa-solid fa-location-dot pe-4"></i>{address}</li>
                                    <li className="list-group-item"><i className="fa-solid fa-phone pe-4"></i> {phone}</li>
                                    <li className="list-group-item"><i className="fa-solid fa-envelope pe-4"></i> {email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment >
    )
}

export default ContactCard