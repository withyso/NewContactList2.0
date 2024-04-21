import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import { useState } from "react";

export const Home = () => {
	const contactURL = "https://playground.4geeks.com/contact/"
	const [userName, setUserName] = useState('');
	const [contactData, setContactData] = useState([]);
	const arrData = [{
		name: 'yoel',
		phone: '584140684080',
		email: 'ven.yoel5@gmail.com',
		address: 'coro,edo falcon',
		id: 1
	},
	{
		name: 'victor',
		phone: '684223123',
		email: 'test@email.com',
		address: 'avt 25 killer avenue',
		id: 2
	}]

	return (
		<div className="container">
			<div className="container mt-5">
				<div className="navOptions d-flex align-items-center justify-content-center gap-5 ps-4 pe-4 mb-5">
					<h2 className="fs-1 fw-bolder">Contact list</h2>
					<Link to="/addcontact">
						<button className="btn btn-success">
							Add contact
						</button>
					</Link>
				</div>
				{
					arrData.map((singleContact) => (
						<ContactCard 
							name={singleContact.name}
							phone={singleContact.phone}
							email={singleContact.email}
							address={singleContact.address} 
							key={singleContact.id}/>
					))
				}

			</div>
		</div>
	)
};
