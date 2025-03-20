const restaurants = [
	{
		id: 1,
		nombre: "ABaC",
		localidad: "Barcelona",
		cocina: "Innovadora",
		precio: 200,
		url: "https://www.abacrestaurant.com/",
		estrellas: 3,
		imagen: "/media/abac-restaurant.jpg",
		favorito: false,
	},
	{
		id: 2,
		nombre: "Akelarre",
		localidad: "San Sebastian",
		cocina: "Vasca",
		precio: 220,
		url: "https://www.akelarre.net/",
		estrellas: 3,
		imagen: "/media/akelare-restaurant.jpg",
		favorito: false,
	},
	{
		id: 3,
		nombre: "Amelia by Paulo Airaudo",
		localidad: "San Sebastian",
		cocina: "Contemporanea",
		precio: 180,
		url: "https://www.restaurantamelia.com/",
		estrellas: 2,
		imagen: "/media/amelia-by-paulo-restaurant.jpg",
		favorito: false,
	},
	{
		id: 4,
		nombre: "Aponiente",
		localidad: "El Puerto de Santa Maria",
		cocina: "Marinera",
		precio: 215,
		url: "https://www.aponiente.com/",
		estrellas: 3,
		imagen: "/media/aponiente-restaurant.webp",
		favorito: false,
	},
	{
		id: 5,
		nombre: "Arzak",
		localidad: "San Sebastian",
		cocina: "Vasca",
		precio: 210,
		url: "https://www.arzak.es/",
		estrellas: 3,
		imagen: "/media/arzak-restaurant.jpg",
		favorito: false,
	},
	{
		id: 6,
		nombre: "Atrio",
		localidad: "Caceres",
		cocina: "Extremeña",
		precio: 190,
		url: "https://www.restauranteatrio.com/",
		estrellas: 3,
		imagen: "/media/atrio-restaurant.avif",
		favorito: false,
	},
	{
		id: 7,
		nombre: "Azurmendi",
		localidad: "Larrabetzu",
		cocina: "Vasca",
		precio: 220,
		url: "https://www.azurmendi.restaurant/",
		estrellas: 3,
		imagen: "/media/azurmendi-restaurant.jpg",
		favorito: false,
	},
	{
		id: 8,
		nombre: "Bardal",
		localidad: "Ronda",
		cocina: "Andaluza",
		precio: 165,
		url: "https://www.bardalrestaurant.com/",
		estrellas: 2,
		imagen: "/media/bordal-restaurant.jpg",
		favorito: false,
	},
	{
		id: 9,
		nombre: "BonAmb",
		localidad: "Jávea",
		cocina: "Mediterránea",
		precio: 150,
		url: "https://www.bonamb.com/",
		estrellas: 2,
		imagen: "/media/bonamb-restaurant.jpg",
		favorito: false,
	},
	{
		id: 10,
		nombre: "Cabaña Buenavista",
		localidad: "El Palmar",
		cocina: "Murciana",
		precio: 130,
		url: "https://www.cabanyabuenavista.com/",
		estrellas: 2,
		imagen: "/media/cabana-buenavista-restaurant.jpg",
		favorito: false,
	},
	{
		id: 11,
		nombre: "Casa Marcial",
		localidad: "Arriondas",
		cocina: "Asturiana",
		precio: 180,
		url: "https://www.casamarcial.com/",
		estrellas: 3,
		imagen: "/media/casa-marcial-restaurant.jpg",
		favorito: false,
	},
	{
		id: 12,
		nombre: "Cenador de Amós",
		localidad: "Villaverde de Pontones",
		cocina: "Cantabra",
		precio: 195,
		url: "https://www.cenadordeamos.com/",
		estrellas: 3,
		imagen: "/media/cenador-de-amos-restaurant.jpg",
		favorito: false,
	},
	{
		id: 13,
		nombre: "Cinc Sentits",
		localidad: "Barcelona",
		cocina: "Catalana",
		precio: 150,
		url: "https://www.cincsentits.com/",
		estrellas: 2,
		imagen: "/media/cinc-sentitis-restaurant.jpg",
		favorito: false,
	},
	{
		id: 14,
		nombre: "Coque",
		localidad: "Madrid",
		cocina: "Contemporánea",
		precio: 195,
		url: "https://www.coque.com/",
		estrellas: 2,
		imagen: "/media/coque-restaurant.jpg",
		favorito: false,
	},
	{
		id: 15,
		nombre: "DSTAgE",
		localidad: "Madrid",
		cocina: "Innovadora",
		precio: 175,
		url: "https://www.dstageconcept.com/",
		estrellas: 2,
		imagen: "/media/dstage-restaurant.webp",
		favorito: false,
	},
	{
		id: 16,
		nombre: "Disfrutar",
		localidad: "Barcelona",
		cocina: "Creativa",
		precio: 190,
		url: "https://www.disfrutarbarcelona.com/",
		estrellas: 3,
		imagen: "/media/disfrutar-restaurant.jpg",
		favorito: false,
	},
	{
		id: 17,
		nombre: "DiverXO",
		localidad: "Madrid",
		cocina: "Fusión",
		precio: 250,
		url: "https://www.diverxo.com/",
		estrellas: 3,
		imagen: "/media/diverxo-restaurant.webp",
		favorito: false,
	},
	{
		id: 18,
		nombre: "El Celler de Can Roca",
		localidad: "Girona",
		cocina: "Catalana",
		precio: 210,
		url: "https://www.cellercanroca.com/",
		estrellas: 3,
		imagen: "/media/celler-de-can-roca-restaurant.jpg",
		favorito: false,
	},
	{
		id: 19,
		nombre: "El Portal de Echaurren",
		localidad: "Ezcaray",
		cocina: "Riojana",
		precio: 160,
		url: "https://www.echaurren.com/",
		estrellas: 2,
		imagen: "/media/portal-de-echaurren-restaurant.jpg",
		favorito: false,
	},
	{
		id: 20,
		nombre: "Enoteca",
		localidad: "Barcelona",
		cocina: "Mediterránea",
		precio: 180,
		url: "https://www.enotecapacoperez.com/",
		estrellas: 2,
		imagen: "/media/enoteca-restaurant.jpg",
		favorito: false,
	},
	{
		id: 21,
		nombre: "L'Escaleta",
		localidad: "Cocentaina",
		cocina: "Valenciana",
		precio: 140,
		url: "https://www.lescaleta.com/",
		estrellas: 2,
		imagen: "/media/lescaleta-restaurant.jpeg",
		favorito: false,
	},
	{
		id: 22,
		nombre: "Lasarte",
		localidad: "Barcelona",
		cocina: "Vasca",
		precio: 230,
		url: "https://www.restaurantlasarte.com/",
		estrellas: 3,
		imagen: "/media/lasarte-restaurant.jpg",
		favorito: false,
	},
	{
		id: 23,
		nombre: "Maralba",
		localidad: "Almansa",
		cocina: "Manchega",
		precio: 120,
		url: "https://www.maralbarestaurante.com/",
		estrellas: 2,
		imagen: "/media/maralba-restaurant.jpg",
		favorito: false,
	},
	{
		id: 24,
		nombre: "Martín Berasategui",
		localidad: "Lasarte-Oria",
		cocina: "Vasca",
		precio: 250,
		url: "https://www.martinberasategui.com/",
		estrellas: 3,
		imagen: "/media/martin-berasategui-restaurant.jpg",
		favorito: false,
	},
	{
		id: 25,
		nombre: "Mugaritz",
		localidad: "Errenteria",
		cocina: "Innovadora",
		precio: 220,
		url: "https://www.mugaritz.com/",
		estrellas: 2,
		imagen: "/media/mugaritz-restaurant.webp",
		favorito: false,
	},
	{
		id: 26,
		nombre: "Noor",
		localidad: "Cordoba",
		cocina: "Andalusi",
		precio: 185,
		url: "https://www.noorrestaurant.es/",
		estrellas: 3,
		imagen: "/media/noor-restaurant.jpg",
		favorito: false,
	},
	{
		id: 27,
		nombre: "Paco Roncero Restaurante",
		localidad: "Madrid",
		cocina: "Contemporánea",
		precio: 180,
		url: "https://www.pacoroncero.com/",
		estrellas: 2,
		imagen: "/media/paco-roncero-restaurant.jpg",
		favorito: false,
	},
	{
		id: 28,
		nombre: "Quique Dacosta",
		localidad: "Denia",
		cocina: "Innovadora",
		precio: 210,
		url: "https://www.quiquedacosta.com/",
		estrellas: 3,
		imagen: "/media/quique-dacosta-restaurant.jpg",
		favorito: false,
	},
	{
		id: 29,
		nombre: "Ramón Freixa",
		localidad: "Madrid",
		cocina: "Creativa",
		precio: 185,
		url: "https://www.ramonfreixa.com/",
		estrellas: 2,
		imagen: "/media/ramon-freixa-restaurant.jpg",
		favorito: false,
	},
	{
		id: 30,
		nombre: "Ricard Camarena Restaurant",
		localidad: "Valencia",
		cocina: "Mediterranea",
		precio: 175,
		url: "https://www.ricardcamarena.com/",
		estrellas: 2,
		imagen: "/media/ricard-camarena-restaurant.jpg",
		favorito: false,
	},
	{
		id: 31,
		nombre: "Skina",
		localidad: "Marbella",
		cocina: "Andaluza",
		precio: 180,
		url: "https://www.restauranteskina.com/",
		estrellas: 2,
		imagen: "/media/skina-restaurant.jpg",
		favorito: false,
	},
	{
		id: 32,
		nombre: "Smoked Room",
		localidad: "Madrid",
		cocina: "Fusion",
		precio: 200,
		url: "https://www.smokedroom.es/",
		estrellas: 2,
		imagen: "/media/smoked-room-restaurant.jpg",
		favorito: false,
	},
	{
		id: 33,
		nombre: "Voro",
		localidad: "Canyamel",
		cocina: "Balear",
		precio: 160,
		url: "https://www.vororestaurant.com/",
		estrellas: 2,
		imagen: "/media/voro-restaurant.jpg",
		favorito: false,
	},
];
//he quitado las comas ya que lo que me salia no lo entendia y no lo hemos dado y prefiero que juan me lo explique

//funcion para crear la barra de búsqueda del inicio
// const createSearchBar = (restaurants) => {
// 	const btnSearch = document.getElementById("nav-search-btn");
// 	const inputSearch = document.getElementById("search");

// 	btnSearch.addEventListener("click", () => {
// 		const search = inputSearch.value.toLowerCase().trim();
// 		if (search) {
// 			const searchRestaurants = restaurants.filter((restaurant) => {
// 				return (
// 					restaurant.nombre.toLowerCase().includes(search) ||
// 					restaurant.localidad.toLowerCase().includes(search) ||
// 					restaurant.cocina.toLowerCase().includes(search)
// 				);
// 			});

// 			displayFilteredRestaurants(searchRestaurants);
// 		}
// 	});
// };

//funcion para crear la imagen de la tarjeta
const createRestaurantImage = (image, title) => {
	const restaurantImage = document.createElement("img");
	restaurantImage.src = image;
	restaurantImage.alt = title;

	return restaurantImage;
};

//funcion para crear la info (nombre,localidad...) de la tarjeta
const createRestaurantInfo = (restaurant) => {
	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");

	const divInfo = document.createElement("div");

	const titleCard = document.createElement("h3");
	titleCard.textContent = restaurant.nombre;
	divInfo.appendChild(titleCard);

	const localityCard = document.createElement("p");
	localityCard.textContent = `Localidad: ${restaurant.localidad}`;
	divInfo.appendChild(localityCard);

	const cousineCard = document.createElement("p");
	cousineCard.textContent = `Cocina: ${restaurant.cocina}`;
	divInfo.appendChild(cousineCard);

	const priceCard = document.createElement("p");
	priceCard.textContent = `Precio: ${restaurant.precio}`;
	divInfo.appendChild(priceCard);

	const containerButton = createContainerButton(restaurant);

	cardInfo.appendChild(divInfo);
	cardInfo.appendChild(containerButton);

	return cardInfo;
};

//funcion para crear el botn que redireccione a la pagina web
const createContainerButton = (restaurant) => {
	const container = document.createElement("div");
	container.classList.add("container-button");

	const favoriteButton = document.createElement("button");
	favoriteButton.classList.add("favorite-btn");
	favoriteButton.textContent = restaurant.favorito ? "🌟" : "⭐";

	favoriteButton.addEventListener("click", () => {
		restaurant.favorito = !restaurant.favorito;

		favoriteButton.textContent = restaurant.favorito ? "🌟" : "⭐";

		// favoriteButton.classList.toggle("favorito-activo", restaurant.favorito);

		recalcularFavoritos();
	});

	const aLinkWebsite = document.createElement("a");
	aLinkWebsite.classList.add("website-button");
	aLinkWebsite.href = restaurant.url;
	aLinkWebsite.target = "_blank";
	aLinkWebsite.rel = "noopener noreferrer";
	aLinkWebsite.textContent = "Ver mas";
	container.append(favoriteButton, aLinkWebsite);

	return container;
};

//esta sera la funcion principal de la tarjeta, donde uniremos las demas funciones de cada elemento mas pequeño
const createRestaurantCard = (restaurant) => {
	const restaurantCard = document.createElement("div");
	restaurantCard.classList.add("card-restaurant");

	const { imagen, nombre } = restaurant;
	const imageCard = createRestaurantImage(imagen, nombre);
	restaurantCard.appendChild(imageCard);

	const restaurantCardInfo = createRestaurantInfo(restaurant);
	restaurantCard.appendChild(restaurantCardInfo);

	return restaurantCard;
};

//funcion para recalcular favoritos y guardarlos en un boton que los muestre si los pulsamos
const recalcularFavoritos = () => {
	const saveFavorites = restaurants.filter((restaurant) => restaurant.favorito);

	const favoriteButton = document.getElementById("favorite-button");
	if (favoriteButton) {
		favoriteButton.textContent = `Favoritos: ${saveFavorites.length}`;
	}

	favoriteButton.addEventListener("click", () => {
		const favoriteRestaurants = restaurants.filter(
			(restaurant) => restaurant.favorito
		);
		displayFilteredRestaurants(favoriteRestaurants);
	});
};

//para cada boton creamos el filtro necesario
//por estrellas
const filterByStars = (stars) => {
	const filteredRestaurats = restaurants.filter(
		(restaurant) => restaurant.estrellas === stars
	);
	displayFilteredRestaurants(filteredRestaurats);
};

//por localidad
const filterByLocality = (locality) => {
	const parsedLocality = locality.toLowerCase().trim();
	const filteredRestaurats = restaurants.filter((restaurant) =>
		restaurant.localidad.toLowerCase().includes(parsedLocality)
	);
	// const filteredRestaurats = restaurants.filter(
	// 	(restaurant) =>
	// 		restaurant.localidad.toLowerCase() === locality.toLowerCase()
	// );
	displayFilteredRestaurants(filteredRestaurats);
};

//por cocina
const filterByCousine = (cousine) => {
	const parsedCousine = cousine.toLowerCase().trim();
	const filteredRestaurants = restaurants.filter((restaurant) =>
		restaurant.cocina.toLowerCase().includes(parsedCousine)
	);
	displayFilteredRestaurants(filteredRestaurants);
};

// //por cocina
// const filterByCousine = (cousine) => {
// 	const filteredRestaurats = restaurants.filter(
// 		(restaurant) => restaurant.cocina.toLowerCase() === cousine.toLowerCase()
// 	);
// 	displayFilteredRestaurants(filteredRestaurats);
// };


//por precio
const filterByPrice = (minPrice, maxPrice) => {

	minPrice = Number(minPrice);
	maxPrice = Number(maxPrice);

	const filteredRestaurants = restaurants.filter((restaurant) =>
		restaurant.precio >= minPrice && restaurant.precio <= maxPrice
	);
	displayFilteredRestaurants(filteredRestaurants);
};

// //por precio
// const filterByPrice = (minPrice, maxPrice) => {
// 	const filteredRestaurats = restaurants.filter(
// 		(restaurant) =>
// 			restaurant.precio >= minPrice && restaurant.precio <= maxPrice
// 	);
// 	displayFilteredRestaurants(filteredRestaurats);
// };


//funcion para filtar los restaurantes
const displayFilteredRestaurants = (filteredRestaurants = []) => {
	//estoy inicializando con un array vacio para que no muestre nada pero no se si esta bien
	if (!filteredRestaurants?.length) {
		return;
	}

	const containerFilters = document.querySelector(".container-cards");
	containerFilters.innerHTML = "";

	//crear  tarjetas de los restaurantes filtrados
	filteredRestaurants.forEach((restaurant) => {
		const restaurantCard = createRestaurantCard(restaurant);
		containerFilters.appendChild(restaurantCard);
	});
};

displayFilteredRestaurants();

//formulario
let users = JSON.parse(localStorage.getItem("users")) || [];

const saveUsers = () => localStorage.setItem("users", JSON.stringify(users));

const deleteUser = (index) => {
	users.splice(index, 1);
	saveUsers();
	renderUsers();
};

const form = document.getElementById("form");
const userListDiv = document.getElementById("user-list");

const renderUsers = () => {
	userListDiv.innerHTML = '';

	if (users.length > 0) {
		const ul = document.createElement('ul');

		users.forEach((user, index) => {
			const li = document.createElement('li');
			li.textContent = `${index + 1}:
            Name: ${user.name},
            Email: ${user.email}`;

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "X";
			deleteButton.style.backgroundColor = "red";
			deleteButton.style.borderRadius = "100%";

            deleteButton.addEventListener("click", () => {
                deleteUser(index);
            });

			li.appendChild(deleteButton);
			ul.appendChild(li);
		});

		userListDiv.appendChild(ul);
	} else {
		userListDiv.textContent = "No users registered.";
	}
};


// Llamamos a renderUsers al cargar la página para mostrar los usuarios guardados
renderUsers();

if (form) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const nameValue = document.getElementById("name").value;
		const emailValue = document.getElementById("email").value;
		const policyChecked = document.getElementById("policy").checked;

		if (!policyChecked) {
			alert("Debes aceptar la política de Privacidad.");
			return;
		}

		const user = {
			id: Date.now(),
			name: nameValue,
			email: emailValue,
			policy: policyChecked,
		};

		users.push(user);
		saveUsers();

		// resetear el formulario después de enviarlo
		form.reset();

		//Volver a mostrar usuarios despues de agregar uno nuevo
		renderUsers()
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const searchButton = document.querySelector(".nav-search-btn");
	const searchInput = document.getElementById("search");

	//creamos la funcion para filtrar y mostrar los restaurantes
	const searchRestaurants = () => {
		const searchTerm = searchInput.value.toLowerCase().trim();

		if (searchTerm === "") {
			const containerFilters = document.querySelector(".container-cards");
			containerFilters.innerHTML = "";
			return
		}
		//Quiero hacer que haya que escribir los nombres en orden. No se como
		const filteredRestaurants = restaurants.filter(
			(restaurant) =>
				restaurant.nombre.toLocaleLowerCase().includes(searchTerm) ||
				restaurant.localidad.toLowerCase().includes(searchTerm) ||
				restaurant.cocina.toLowerCase().includes(searchTerm)
		);

		displayFilteredRestaurants(filteredRestaurants);
	};

	searchInput.addEventListener("input", searchRestaurants);

	searchButton.addEventListener("click", searchRestaurants);

	searchInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			searchRestaurants();
		}
	});

	//ahora seleccionamos todos los botones y le damos un evento click
	document
		.getElementById("two-stars")
		.addEventListener("click", () => filterByStars(2));

	document
		.getElementById("three-stars")
		.addEventListener("click", () => filterByStars(3));

	// document.getElementById("cousine").addEventListener("click", () => {
	// 	const cousine = prompt("Introduce el tipo de cocina que estas buscando:");
	// 	if (cousine) {
	// 		filterByCousine(cousine);
	// 	} else {
	// 		console.log(
	// 			"El tipo de cocina que estas buscando no tiene estrellas Michelin"
	// 		);
	// 	}
	// });

	// document.getElementById("price").addEventListener("click", () => {
	// 	const minPrice = parseFloat(
	// 		prompt("Ingresa el precio minimo que estas buscando:")
	// 	);
	// 	const maxPrice = parseFloat(
	// 		prompt("Ingresa el precio maximo que estas buscando")
	// 	);
	// 	if (!isNaN(minPrice) && !isNaN(maxPrice)) {
	// 		filterByPrice(minPrice, maxPrice);
	// 	} else {
	// 		console.log("Introduzca precios válidos");
	// 	}
	// });

	const selectLocality = document.getElementById("locality-selector");

	const localityRestaurants = restaurants.reduce((acc, { localidad }) => {
		if (!acc.includes(localidad)) {
			acc.push(localidad);
		}
		return acc;
	}, []);

	selectLocality.addEventListener("change", (event) => {
		filterByLocality(event.target.value);
	});

	localityRestaurants.forEach((restaurant) => {
		const optionSelect = document.createElement("option");
		optionSelect.textContent = restaurant;
		optionSelect.value = restaurant.toLowerCase();

		selectLocality.append(optionSelect);
	});

	//selector por cocina
	const selectCousine = document.getElementById("cousine-selector");

	const cousineRestaurants = restaurants.reduce((acc, { cocina }) => {
		if (!acc.includes(cocina)) {
			acc.push(cocina);
		}
		return acc;
	}, []);

	selectCousine.addEventListener("change", (event) => {
		filterByCousine(event.target.value);
	});

	cousineRestaurants.forEach((cousine) => {
		const optionSelectCousine = document.createElement("option");
		optionSelectCousine.textContent = cousine;
		optionSelectCousine.value = cousine.toLowerCase();

		selectCousine.append(optionSelectCousine);
	});


	//selector por precio
	const selectPrice = document.getElementById("price-selector");

	const priceRestaurants = restaurants.reduce((acc, { precio }) => {
		if (!acc.includes(precio)) {
			acc.push(precio);
		}
		return acc;
	}, []);

	selectPrice.addEventListener("change", (event) => {
		const selectedPrice = Number(event.target.value);
		filterByPrice(0, selectedPrice);
	});

	priceRestaurants.forEach((price) => {
		const optionSelectPrice = document.createElement("option");
		optionSelectPrice.textContent = `Máximo de ${price}€`;
		optionSelectPrice.value = price;

		selectPrice.append(optionSelectPrice);
	});
});
