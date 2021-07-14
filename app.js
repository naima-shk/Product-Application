/*let products = ["footwear", "electronics", "clothes"];

function myItems() {
  //let products = ['footwear','electronics', 'clothes'];

  document.getElementById("main").innerHTML = "footwear";

  let result = products.filter((products) => products.length);
  console.log(result);
  /*let Products= [{
        productName :'Nike shoes',
        image:'./shoeimage.png',
        tag: 'footwear'
    },
    {
        productName :' Head phones',
        image:,
        tag: 'Electronics'
    },
    {
    productName :' Shirt',
        image:,
        tag: 'clothes'
    }

]*/
let list = document.querySelector(".list").children;

let main = document.querySelector(".items").children;
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    for (let x = 0; x < list.length; x++) {
      list[x].classList.remove("active");
    }
    this.classList.add("active");
    const displayItems = this.getAttribute("data-filter");
    for (let z = 0; z < list.length; z++) {
      main[z].style.transform = "scale(0)";
      setTimeout(() => {
        main[z].style.display = "none";
      }, 500);
      if (
        main[z].getAttribute("data-category") == displayItems ||
        displayItems == "all"
      ) {
        main[z].style.transform = "scale(1)";
        setTimeout(() => {
          main[z].style.display = "block";
        }, 500);
      }
    }
  };
}
