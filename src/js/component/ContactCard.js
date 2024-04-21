import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const ContactCard = ({ name, email, phone, address, id }) => {
    const navigate = useNavigate();
    const params = useParams();

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
                                    <i className="fa-solid fa-pen-to-square contact-options fs-5" onClick={(e) => { navigate(`editcontact/${params.id}`) }}></i>
                                    <h5 className="card-title"><strong>{name}</strong></h5>
                                    <i className="fa-solid fa-trash contact-options fs-5" id='trashOption'></i>
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