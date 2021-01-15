
/* Objetivo 1: Datos del Hotel

var hotel={
   name:"Mencey",
   location:"Tenerife",
img:
"https://media-cdn.tripadvisor.com/media/photo-o/1b/a6/24/b6/iberostar-grand-mencey.jpg",
};

document.getElementById ("name-hotel").innerHTML="Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML="Ubicado en "+ hotel.location;
document.getElementById("img-hotel").src=hotel.img;

//Puntuación Hotel
var rating =prompt ("Puntuación del 1 al 5");
document.getElementById("rating").innerHTML=rating + " estrellas";

//Usuario anónimo
var anonymous=confirm ("¿Quiere que su reseña sea anónima?");
document.getElementById("anonymous").checked=anonymous;
*/

// Seleccionar uno de los hoteles 
var hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        img: "https://media-cdn.tripadvisor.com/media/photo-o/1b/a6/24/b6/iberostar-grand-mencey.jpg"
         },

    Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img:"https://media-cdn.tripadvisor.com/media/photo-w/08/3f/4e/8c/lani-s-suites-de-luxe.jpg",
        },
    
    Lopesan: {
        name: "Lopesan Baobab Resort",
        location: "Gran Canaria",
        img:"https://media-cdn.tripadvisor.com/media/photo-o/0e/5e/48/da/lopesan-baobab-resort.jpg",
        },
};

    // Selección del hotel
    var selectedhotel = prompt (
        "Indique el hotel en el que quiere hacer la reseña: Mencey, Lani o Lopesan",
        );
    document.getElementById("name-hotel").innerHTML= 
        "Hotel " + hoteles[selectedhotel].name;
    document.getElementById("location-hotel").innerHTML=
        "Ubicado en "+ hoteles[selectedhotel].location;
    document.getElementById("img-hotel").src=hoteles[selectedhotel].img;


// Puntuación del Hotel seleccionado
// La puntuación del hotel he seleccionado introducirla con números en vez de letras porque lo veo más lógico

var stars = {
    "1":
    "<span>&#9733;</span> <span> &#9734;</span> <span>&#9734;</span> <span>&#9734;</span> <span> &#9734;</span>",
    "2":
    "<span>&#9733;</span> <span>&#9733;</span> <span>&#9734;</span> <span>&#9734;</span> <span>&#9734;</span>",
    "3":
    "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9734;</span> <span>&#9734;</span>",
    "4":
    "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9734;</span>",
    "5":
    "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
};

var rating = prompt("Puntuación: Seleccione del 1 al 5");
document.getElementById("rating").innerHTML=stars[rating];

//Usuario anónimo
var anonymous=confirm ("¿Quiere que su reseña sea anónima?");
document.getElementById("anonymous").checked=anonymous;