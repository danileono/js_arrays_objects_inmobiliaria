
//Data
const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      foto: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      foto: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      foto: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      foto: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      foto: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      foto: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  

//Elementos
const containerPropiedades = document.querySelector("#containerPropiedades");
const cuartos = document.querySelector("#cuartos").value;
const desde = document.querySelector("#desde").value;
const hasta = document.querySelector("#hasta").value;
const btn = document.querySelector("#btn");
const totalCounter = document.querySelector("#totalCounter");
let total = 0;



//Funcion para crear card
const createCard = (propiedad)=> {
	const card = document.createElement('div')
	card.classList.add('propiedades') //a card le agregue la class de propiedades para el css

    const template = `
    <div class="propiedades">
        <div class="propiedad">
        <img class="img" src="${propiedad.foto}">
        <section>
            <h5>${propiedad.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad.rooms}</p>
                <p>Metros: ${propiedad.m}m²</p>
            </div>
            <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
      </div>
    `
//contenido de la card es el html de template    
card.innerHTML = template 

//se inyectara el contenido de las card en id containerPropiedades
containerPropiedades.appendChild(card)
  }

// Recorrer data -- ciclo -- por cada propiedad se crea una card
for(let propiedad of propiedades) {
	createCard(propiedad)

  total++;
	totalCounter.textContent = total;

}



// // Filtro aplicado a btn para inputs
btn.addEventListener("click", () => {
containerPropiedades.innerHTML = "";

    const cuartos= Number(document.querySelector("#cuartos").value);
    const desde = Number(document.querySelector("#desde").value);
    const hasta = Number(document.querySelector("#hasta").value);
    total= 0;

    for (let propiedad of propiedades) {

      if (
        propiedad.rooms >= cuartos &&
        propiedad.m >= desde &&
        propiedad.m <= hasta
      ) {
        createCard(propiedad);
        total++;
        totalCounter.textContent = total;
      }
  }

  
  if (total == "" || rooms == "" || desde == "" || hasta == "") {
		alert("Faltan campos por llenar");
		containerPropiedades.innerHTML = "";
		total = "no hay coincidencias con la busqueda";}
    totalCounter.textContent = total;


  });











