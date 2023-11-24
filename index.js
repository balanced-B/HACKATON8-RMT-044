let cars = [
    {
      id: 1,
      name: "ferari",
      stock: 10,
      harga: 200000000,
      img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
      tahun: 2016,
      Cc: "3000cc",
      type: "Super Car",
    },
    {
      id: 2,
      name: "lambo",
      stock: 10,
      harga: 200000000,
      img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
      tahun: 2016,
      Cc: "3000cc",
      type: "Super Car",
    },
    {
      id: 3,
      name: "ferari",
      stock: 10,
      harga: 200000000,
      img: "https://cdn.ferrari.com/cms/network/media/img/resize/5db98e9b8c92940b3a3de720-ferrari-458-italia-design-focus-1?",
      tahun: 2016,
      Cc: "3000cc",
      type: "Super Car",
    },
    {
      id: 4,
      name: "lambo",
      stock: 10,
      harga: 200000000,
      img: "https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.jpg",
      tahun: 2016,
      Cc: "3000cc",
      type: "Super Car",
    },
  ];
  // console.log("test");
  let keranjang = [];
  
  let AM9HkKnPurTNXc4PP = document.getElementById("cart");
  AM9HkKnPurTNXc4PP.innerHTML = "";
  
  function render(array) {
    let wadah = document.getElementById("wadah");
    wadah.innerHTML = "";
  
    for (let car of cars) {
      // console.log(car)
      wadah.innerHTML += `<div id="${car.id}" class="box-product">
        <img src="${car.img}" alt="${car.name}">
        <h3> Stock : ${car.stock}</h3>
        <h3> harga : ${car.harga}</h3>
        <button onclick="buyCar(${car.id})">Buy now</button>
      </div>`;
    }
  }
  render(cars);
  
  function renderCart(array) {
    let cart = document.getElementById("cart");
    cart.innerHTML = "";
  
    for (const item of keranjang) {
      cart.innerHTML += ` <div>
          <div class="groupNameandImage" id="groupNameandImage">
              <h3 class="namaProduct" id="namaProduct">
                  ${item.name}
              </h3>
              <h4>type:"${item.type}"</h4>
              <img src="${item.img}" alt="${
        item.name
      }" class="imageProduct" id="imageProduct">
              <p>"${item.tahun}"</p>
              <p>"${item.Cc}"</p>
          </div>
          <div class="groupTambahKurang" id="groupTambahKurang">
              <div class="count" id="count">
                  ${item.stock}
              </div>
          </div>
          <div class="jumlah" id="jumlah">
              ${item.stock * item.harga}
          </div>
          <div class="delete" id="delete">
              <a onclick="deleteProduct(${item.id})" href="#">Delete</a>
          </div>
      </div>`;
    }
  }
  
  function buyCar(id) {
    // console.log(id)
    for (const car of cars) {
      if (car.stock > 0) {
        if (id === car.id) {
          let productFound = false;
          for (const cartItem of keranjang) {
            if (cartItem.id === id) {
              productFound = true;
              cartItem.stock++;
              car.stock--;
            }
          }
          if (productFound === false) {
            let newCar = { ...car };
            newCar.stock = 1;
            car.stock--;
            keranjang.push(newCar);
          }
        }
      } else {
        alert("Lariiis~");
      }
    }
    render(cars);
    renderCart(keranjang);
    // console.log(cart)
  }
  
  function plusMinus() {}
  
  function showCart() {
    let cart = document.getElementById("cart");
  
    if (cart.style.display === "none") {
      cart.style.display = "block";
    } else {
      cart.style.display = "none";
    }
  }
  
  function deleteProduct(id) {
    // console.log(id)
    let deletedKeranjang = [];
    for (const item of keranjang) {
      if (item.id === id) {
        for (const car of cars) {
          if (car.id === item.id) {
            car.stock += item.stock;
          }
        }
      } else {
        deletedKeranjang.push(item);
      }
    }
    keranjang = deletedKeranjang;
    render(cars);
    renderCart(keranjang);
  }
  
  let slideIndex = 1;
              showSlide(slideIndex);
  
          function nextslide(n){
              showSlide(slideIndex += n);
          }
  
          function dotslide(n){
              showSlide(slideIndex = n);
          }
  
          function showSlide(n) {
              var i;
              var slides = document.getElementsByClassName("imgslide");
              var dot = document.getElementsByClassName("dot");
              
              if (n > slides.length) {
                  slideIndex = 1
              }
              if (n < 1) {
                  slideIndex = slides.length;
              }
              for (i = 0; i < slides.length; i++) {
                  
                  slides[i].style.display = "none";
              }
  
              for (i = 0; i < slides.length; i++) {
                  
                  dot[i].className = dot[i].className.replace(" active", "");
              }
  
              slides[slideIndex - 1].style.display = "block";
  
              dot[slideIndex - 1].className += " active";
          }
