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
	},
];
//he quitado las comas ya que lo que me salia no lo entendia y no lo hemos dado y prefiero que juan me lo explique

//funcion para crear el botn que redireccione a la pagina web
const createContainerButton = (link) => {
	const container = document.createElement("div");
	container.classList.add("container-button");

	const aLinkWebsite = document.createElement("a");
	aLinkWebsite.classList.add("website-button");
	aLinkWebsite.href = link;
	aLinkWebsite.target = "_blank";
	aLinkWebsite.rel = "noopener noreferrer";
	aLinkWebsite.textContent = "Ver mas";
	container.append(aLinkWebsite);

	return container;
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
	localityCard.textContent = restaurant.localidad;
	divInfo.appendChild(localityCard);

	const cousineCard = document.createElement("p");
	cousineCard.textContent = restaurant.cocina;
	divInfo.appendChild(cousineCard);

	const priceCard = document.createElement("p");
	priceCard.textContent = restaurant.precio;
	divInfo.appendChild(priceCard);

	const containerButton = createContainerButton(restaurant.url);

	cardInfo.appendChild(divInfo);
	cardInfo.appendChild(containerButton);

	return cardInfo;
};

//funcion para crear la imagen de la tarjeta
const createRestaurantImage = (image, title) => {
	const restaurantImage = document.createElement("img");
	restaurantImage.src = image;
	restaurantImage.alt = title;

	return restaurantImage;
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

//funcion para filtar los restaurantes
const displayFilteredRestaurants = (filteredRestaurats) => {
	const containerFilters = document.querySelector(".container-filters");
	containerFilters.innerHTML = "";

	//crear  tarjetas de los restaurantes filtrados
	filteredRestaurats.forEach((restaurant) => {
		const restaurantCard = createRestaurantCard(restaurant);
		containerFilters.appendChild(restaurantCard);
	});
};
//para cada boton creamos el filtro necesario
//por estrellas
const fileterByStars = (stars) => {
	const filteredRestaurats = restaurants.filter(
		(restaurant) => restaurant.estrellas === stars
	);
	displayFilteredRestaurants(filteredRestaurats);
};

//por localidad
const filterByLocality = (locality) => {
	const filteredRestaurats = restaurants.filter(
		(restaurant) =>
			restaurant.localidad.toLowerCase() === locality.toLowerCase()
	);
	displayFilteredRestaurants(filteredRestaurats);
};

//por cocina
const filterByCousine = (cousine) => {
	const filteredRestaurats = restaurants.filter(
		(restaurant) => restaurant.cocina.toLowerCase() === cousine.toLowerCase()
	);
	displayFilteredRestaurants(filteredRestaurats);
};

//por precio
const filterByPrice = (minPrice, maxPrice) => {
	const filteredRestaurats = restaurants.filter(
		(restaurant) =>
			restaurant.precio >= minPrice && restaurant.precio <= maxPrice
	);
	displayFilteredRestaurants(filteredRestaurats);
};

//ahora seleccionamos todos los botones y le damos un evento click
document
	.getElementById("two-stars")
	.addEventListener("click", () => fileterByStars(2));
document
	.getElementById("three-stars")
	.addEventListener("click", () => fileterByStars(3));
document.getElementById("locality").addEventListener("click", () => {
	const locality = prompt("Introduce la localidad que estas buscando:");
	if (locality) {
		filterByLocality(locality);
	} else {
		console.log(
			"La localidad ingresada no tiene restaurantes estrella Michelin"
		);
	}
});
document.getElementById("cousine").addEventListener("click", () => {
	const cousine = prompt("Introduce el tipo de cocina que estas buscando:");
	if (cousine) {
		filterByCousine(cousine);
	} else {
		console.log(
			"El tipo de cocina que estas buscando no tiene estrellas Michelin"
		);
	}
});
document.getElementById("price").addEventListener("click", () => {
	const minPrice = parseFloat(
		prompt("Ingresa el precio minimo que estas buscando:")
	);
	const maxPrice = parseFloat(
		prompt("Ingresa el precio maximo que estas buscando")
	);
	if (!isNaN(minPrice) && !isNaN(maxPrice)) {
		filterByPrice(minPrice, maxPrice);
	} else {
		console.log("Introduzca precios válidos");
	}
});

displayFilteredRestaurants();
