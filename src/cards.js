const card = document.getElementById("cards");

let productos = [
  {
    id: 1,
    nombre: "Tomate",
    precio: 100,
    img: "img/Tomato-Vegetable-PNG.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 2,
    nombre: "Lechuga",
    precio: 50,
    img: "img/Green-Lettuce-PNG-Transparent-Image.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 3,
    nombre: "Zanahoria",
    precio: 150,
    img: "img/Carrot-Cutting-Pieces-PNG.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 4,
    nombre: "Uvas",
    precio: 200,
    img: "img/Transparent-Grapes-PNG.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 5,
    nombre: "Kiwi",
    precio: 250,
    img: "img/Kiwi-Fruit-PNG.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 6,
    nombre: "Espinaca",
    precio: 70,
    img: "img/Green-Spinach-PNG-Transparent-Image.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    id: 7,
    nombre: "Queso",
    precio: 300,
    img: "img/Cheese-PNG-Image.png",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
];

productos.forEach((x) => {
  card.innerHTML += `
    <div class="col">
      <div class="container">
        <div class="card">
          <img src="${x.img}" class="card-img-top" alt="${x.nombre}" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">${x.nombre}</h5>
              <h5 class="card-text">$${x.precio}</h5>
            </div>
              <p class="card-title">${x.descripcion}</p>
          </div>
          <button onclick="agregarProducto(${x.id})" type="button" class="btn btn-info">Agregar</button>
        </div>
      </div>
    </div>
  `;
});

function agregarProducto(id) {
  const result = productos.find((x) => x.id == id);
  Swal.fire({
    icon: "success",
    title: `${result.nombre}` + " agregado al carrito",
    showConfirmButton: false,
    timer: 1500,
  });
}
