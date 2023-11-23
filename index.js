let cars = [
  {
    id: 1,
    name: "ferari",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
  },
  {
    id: 2,
    name: "lambo",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
  },
  {
    id: 3,
    name: "ferari",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
  },
  {
    id: 4,
    name: "lambo",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
  },
  {
    id: 3,
    name: "ferari",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
  },
  {
    id: 4,
    name: "lambo",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
  },
  {
    id: 3,
    name: "ferari",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
  },
  {
    id: 4,
    name: "lambo",
    stock: 10,
    harga: 200000000,
    img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
  },
];
console.log("test");

function render(array){
    let wadah=document.getElementById('wadah')
    wadah.innerHTML='';
    
    for (let car of cars) {
        console.log(car)
      wadah.innerHTML+=`<div id="${car.id}" class="box-product">
      <img src="${car.img}" alt="${car.name}">
      <h3> Stock : ${car.stock}</h3>
      <h3> harga : ${car.harga}</h3>
    </div>` 
    
    }
}
render(cars)