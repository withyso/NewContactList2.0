import React from 'react'

const CreateAgenda = () => {
    return (
        <React.Fragment>
            <div className='container mt-5 p-3 pt-2'>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Oh no! :( </strong> Parece que no encontramos un usuario registrado. Por favor introduce un nombre de usuario para crear una agenda!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-md-6 col-sm-12 p-5 bg-light border rounded'>
                        <label htmlFor="inputFirstName" className="form-label h5"> Usuario de agenda </label>
                        <input type="text" className="form-control mt-1" id="inputFirstName" aria-describedby="nameHelp" placeholder='yoels2024' name='agenda_name' required />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateAgenda