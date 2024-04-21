import React from 'react'

const ContactCard = ({ name, email, phone, address, id }) => {
    return (
        <React.Fragment>
            <div className='row'>
                <div className='container ps-4 pe-4 col-12' key={id}>
                    <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://placehold.co/500x500" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{name}</h5>
                                    <p className="card-text">{address}</p>
                                    <p className="card-text">{phone}</p>
                                    <p className="card-text">{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default ContactCard