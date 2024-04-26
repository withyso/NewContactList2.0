
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
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadServerData: (URL) => {
				const store = getStore(); //Invoque the store, this way I'll be able to use store variables
				fetch(URL + 'agendas/yoelwithy')
					.then(response => {
						if (response === 404) {
							console.log(response.status)
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
