import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import { useState, useEffect } from "react";

export const Home = () => {
	const contactURL = "https://playground.4geeks.com/contact/"
	const [userName, setUserName] = useState('');
	const [contactData, setContactData] = useState([]);


	const getAgenda = () => {
		fetch(contactURL + 'agendas/yoelwithy')
			.then(response => {
				if (response.status === 404) {
					createAgenda()
				}
				return response.json()
			})
			.then(data => {
				setContactData(data.contacts);
				console.log(contactData)
			})
			.catch((error) => { console.error(error) })
	}

	const createAgenda = () => {
		fetch(contactURL + 'agendas/yoelwithy', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => {
				console.log(response)
				if (!response.ok) {
					throw new Error('No se pudo crear la agenda')
				}
				return response.json()
			})
			.then(data => {
				getAgenda()
				console.log('tu data es:', data)
			})
			.catch((error) => { console.log(error) })
	}

	useEffect(() => {
		getAgenda();
	}, [])


	return (
		<div className="container">
			<div className="container mt-5">
				<div className="navOptions d-flex align-items-center justify-content-center gap-5 ps-4 pe-4 mb-3">
					<h2 className="fs-1 fw-bolder">Contact list</h2>
					<Link to="/addcontact">
						<button className="btn btn-success">
							New contact
						</button>
					</Link>
				</div>
				{
					contactData.map((singleContact) => (
						<ContactCard
							name={singleContact.name}
							phone={singleContact.phone}
							email={singleContact.email}
							address={singleContact.address}
							id={singleContact.id}
							key={singleContact.id}
							funcion={getAgenda} />
					))
				}
			</div>
		</div>
	)
};
