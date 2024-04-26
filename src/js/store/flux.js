
import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},

			],
			ServerData: [],
			agendaFlag: null,
			userAgenda: 'null',
			url: "https://playground.4geeks.com/contact/",
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadServerData: (URL) => {
				const store = getStore(); //Invoke the store, this way I'll be able to use store variables
				fetch(URL + `agendas/${store.userAgenda}`)
					.then(response => {
						if (response.status == 404) {
							if (store.agendaFlag == null) {
								setStore({ agendaFlag: true })
							}
							if (store.agendaFlag == false) {
								setStore({ agendaFlag: false })
							}
							throw new Error('No hay usuario para crear la agenda')
						}
						return response.json()
					})
					.then(data => {
						setStore({ ServerData: data.contacts })
						console.log(store.ServerData)
					}).catch(error => console.log(error))
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			setUserAgenda: (user) => {
				const store = getStore();
				setStore({ userAgenda: user })
				console.log(store.userAgenda)
				setStore({ agendaFlag: false })
				console.log(store.agendaFlag)
				getActions().createAgenda()
			},
			createAgenda: () => {
				const store = getStore();
				fetch(store.url + `agendas/${store.userAgenda}`, {
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
						getActions().loadServerData(store.url)
						console.log('tu data es:', data)
					})
					.catch((error) => { console.log(error) })
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
