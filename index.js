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

let CURRENT_VIEW = "mainPage";
let currentTwoStarState = 0;
let users = JSON.parse(localStorage.getItem("users")) || [];

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
	divInfo.classList.add("card-div-info");

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

	if (restaurant.favorito) {
		favoriteButton.classList.add("favorited-btn");
		favoriteButton.textContent = "🌟";
	} else {
		favoriteButton.textContent = "⭐";
	}

	favoriteButton.addEventListener("click", () => {
		restaurant.favorito = !restaurant.favorito;

		favoriteButton.textContent = restaurant.favorito ? "🌟" : "⭐";
		favoriteButton.classList.toggle("favorited-btn", restaurant.favorito);

		updateFavoritos();
		displayInitialRestaurants();
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

	// Forzar la actualización del estado de favoritos
	const currentFavorites = JSON.parse(localStorage.getItem("favoritos")) || [];
	restaurant.favorito = currentFavorites.some(
		(fav) => fav.id === restaurant.id
	);

	const restaurantCardInfo = createRestaurantInfo(restaurant);
	restaurantCard.appendChild(restaurantCardInfo);

	return restaurantCard;
};

//cargar favoritos al iniciar
const loadFavorites = () => {
	const saveFavorites = JSON.parse(localStorage.getItem("favoritos")) || [];

	saveFavorites.forEach((fav) => {
		const restaurant = restaurants.find(
			(restaurant) => restaurant.id === fav.id
		);
		if (restaurant) restaurant.favorito = true;
	});
};

//funcion para recalcular favoritos y guardarlos en un boton que los muestre si los pulsamos
const updateFavoritos = () => {
	const favorites = restaurants.filter((restaurant) => restaurant.favorito);

	localStorage.setItem("favoritos", JSON.stringify(favorites));

	document.getElementById(
		"favorite-button"
	).textContent = `Favoritos: ${favorites.length}`;
	if (CURRENT_VIEW === "favoritePage") displayFilteredRestaurants(favorites);
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

//por precio
const filterByPrice = (minPrice, maxPrice) => {
	minPrice = Number(minPrice);
	maxPrice = Number(maxPrice);

	const filteredRestaurants = restaurants.filter(
		(restaurant) =>
			restaurant.precio >= minPrice && restaurant.precio <= maxPrice
	);
	displayFilteredRestaurants(filteredRestaurants);
};

//funcion para filtar los restaurantes
const displayFilteredRestaurants = (filteredRestaurants = []) => {
	//estoy inicializando con un array vacio para que no muestre nada pero no se si esta bien
	const containerFilters = document.querySelector(".container-cards");
	containerFilters.innerHTML = "";

	if (!filteredRestaurants?.length) {
		return;
	}

	//crear  tarjetas de los restaurantes filtrados
	filteredRestaurants.forEach((restaurant) => {
		const restaurantCard = createRestaurantCard(restaurant);
		containerFilters.appendChild(restaurantCard);
	});
};

//formulario
const saveUsers = () => localStorage.setItem("users", JSON.stringify(users));

const deleteUser = (index) => {
	users.splice(index, 1);
	saveUsers();
	renderUsers();
};

const renderUsers = () => {
	const userListDiv = document.getElementById("user-list");
	userListDiv.innerHTML = "";

	if (users.length > 0) {
		const ul = document.createElement("ul");
		ul.classList.add("users-box");

		users.forEach((user, index) => {
			const li = document.createElement("li");
			li.classList.add("user-card");
			li.textContent = `Name: ${user.name}, \nEmail: ${user.email}`;

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

const displayInitialRestaurants = () => {
	const twoStarsContainer = document.querySelector(".restaurants-two-stars");
	const threeStarsContainer = document.querySelector(
		".restaurants-three-stars"
	);

	twoStarsContainer.innerHTML = "";
	threeStarsContainer.innerHTML = "";

	// Obtener siempre los últimos datos de favoritos
	const favorites = JSON.parse(localStorage.getItem("favoritos")) || [];
	const favoriteIds = favorites.map((fav) => fav.id);

	// Actualizar el estado en el array restaurants
	restaurants.forEach((restaurant) => {
		restaurant.favorito = favoriteIds.includes(restaurant.id);
	});

	const twoStarRestaurants = restaurants
		.filter((restaurant) => restaurant.estrellas === 2)
		.slice(0, 6);

	twoStarRestaurants.forEach((restaurant) => {
		twoStarsContainer.appendChild(createRestaurantCard(restaurant));
	});

	const threeStarRestaurants = restaurants
		.filter((restaurant) => restaurant.estrellas === 3)
		.slice(0, 6);

	threeStarRestaurants.forEach((restaurant) => {
		threeStarsContainer.appendChild(createRestaurantCard(restaurant));
	});
};

const displayAllTwoRestaurants = () => {
	const twoStarsContainer = document.querySelector(".restaurants-two-stars");

	twoStarsContainer.innerHTML = "";

	const twoStarRestaurants = restaurants.filter(
		(restaurant) => restaurant.estrellas === 2
	);

	twoStarRestaurants.forEach((restaurant) => {
		twoStarsContainer.appendChild(createRestaurantCard(restaurant));
	});
};

const displayAllThreeRestaurants = () => {
	const threeStarsContainer = document.querySelector(
		".restaurants-three-stars"
	);

	threeStarsContainer.innerHTML = "";

	const threeStarRestaurants = restaurants.filter(
		(restaurant) => restaurant.estrellas === 3
	);

	threeStarRestaurants.forEach((restaurant) => {
		threeStarsContainer.appendChild(createRestaurantCard(restaurant));
	});
};

const initializeSelectors = () => {
	const selectLocality = document.getElementById("locality-selector");

	const localityRestaurants = restaurants.reduce((acc, { localidad }) => {
		if (!acc.includes(localidad)) {
			acc.push(localidad);
		}
		return acc;
	}, []);

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

	cousineRestaurants.forEach((cousine) => {
		const optionSelectCousine = document.createElement("option");
		optionSelectCousine.textContent = cousine;
		optionSelectCousine.title = cousine;
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

	priceRestaurants.forEach((price) => {
		const optionSelectPrice = document.createElement("option");
		optionSelectPrice.textContent = `${price}€`;
		optionSelectPrice.value = price;

		selectPrice.append(optionSelectPrice);
	});
};

const setupEventListeners = () => {
	//Busqueda
	const searchButton = document.querySelector(".nav-search-btn");
	const searchInput = document.getElementById("search");

	const searchRestaurants = () => {
		const searchTerm = searchInput.value.toLowerCase().trim();

		if (searchTerm === "") {
			const containerFilters = document.querySelector(".container-cards");
			containerFilters.innerHTML = "";
			return;
		}
		//Quiero hacer que haya que escribir los nombres en orden. No se como
		const filteredRestaurants = restaurants.filter(
			(restaurant) =>
				restaurant.nombre.toLocaleLowerCase().startsWith(searchTerm) ||
				restaurant.localidad.toLowerCase().startsWith(searchTerm) ||
				restaurant.cocina.toLowerCase().startsWith(searchTerm)
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

	//Botones de filtros por estrellas
	document.getElementById("two-stars").addEventListener("click", () => {
		const container = document.querySelector(".container-cards");

		if (container.innerHTML.trim() !== "") {
			container.innerHTML = "";
			return;
		}
		filterByStars(2);
	});

	document.getElementById("three-stars").addEventListener("click", () => {
		const container = document.querySelector(".container-cards");

		if (container.innerHTML.trim() !== "") {
			container.innerHTML = "";
			return;
		}
		filterByStars(3);
	});

	//Favorito
	document.getElementById("favorite-button").addEventListener("click", () => {
		if (CURRENT_VIEW === "favoritePage") {
			CURRENT_VIEW = "mainPage";
			displayFilteredRestaurants();
		} else {
			CURRENT_VIEW = "favoritePage";

			const favoriteRestaurants = restaurants.filter(
				(restaurant) => restaurant.favorito
			);
			displayFilteredRestaurants(favoriteRestaurants);
		}
		displayInitialRestaurants();
	});

	//selectores
	document
		.getElementById("locality-selector")
		.addEventListener("change", (event) => {
			filterByLocality(event.target.value);
		});

	document
		.getElementById("cousine-selector")
		.addEventListener("change", (event) => {
			filterByCousine(event.target.value);
		});

	document
		.getElementById("price-selector")
		.addEventListener("change", (event) => {
			const selectedPrice = Number(event.target.value);
			filterByPrice(0, selectedPrice);
		});

	//Login
	document.getElementById("btn-login").addEventListener("click", () => {
		const email = prompt("Enter your email:");
		if (email) {
			const password = prompt("Enter your password");

			if (password) {
				console.log("Email", email);
				console.log("Password", password);
			} else {
				console.log("The password was not entered");
			}
		} else {
			console.log("The email was not entered");
		}
	});

	//Formulario
	const form = document.getElementById("form");
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
			form.reset();
			renderUsers();
		});
	}

	//Modo oscuro
	const toggleModeButton = document.getElementById("dark-mode-btn");
	const body = document.body;

	// Función para cambiar entre modo claro y oscuro
	toggleModeButton.addEventListener("click", () => {
		if (body.classList.contains("light-mode")) {
			body.classList.remove("light-mode");
			body.classList.add("dark-mode");
			toggleModeButton.textContent = "🌞"; // Cambiar ícono a sol
		} else {
			body.classList.remove("dark-mode");
			body.classList.add("light-mode");
			toggleModeButton.textContent = "🌙"; // Cambiar ícono a luna
		}
	});

	//Boton reset
	const containerFilters = document.querySelector(".btn-filters");

	const containerCards = document.querySelector(".container-cards");

	const buttonReset = document.createElement("button");
	buttonReset.textContent = "Reset";

	containerFilters.appendChild(buttonReset);

	buttonReset.addEventListener("click", () => {
		if (containerCards.innerHTML !== "") {
			containerCards.innerHTML = "";
		}
	});

	//Ver mas restaurantes
	document
		.querySelector(".link-plus-two-restaurants")
		.addEventListener("click", (event) => {
			event.preventDefault();
			displayAllTwoRestaurants();
		});

	document
		.querySelector(".link-plus-three-restaurants")
		.addEventListener("click", (event) => {
			event.preventDefault();
			displayAllThreeRestaurants();
		});
};

document.addEventListener("DOMContentLoaded", () => {
	loadFavorites();
	updateFavoritos();
	displayInitialRestaurants();
	initializeSelectors();
	renderUsers();
	setupEventListeners();
	displayFilteredRestaurants();
});
