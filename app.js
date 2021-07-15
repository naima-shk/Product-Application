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
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    const displayItems = this.getAttribute("data-filter");
    for (let k = 0; k < list.length; k++) {
      main[k].style.transform = "scale(0)";
      setTimeout(() => {
        main[k].style.display = "none";
      }, 500);
      if (
        main[k].getAttribute("data-category") == displayItems ||
        displayItems == "all"
      ) {
        main[k].style.transform = "scale(1)";
        setTimeout(() => {
          main[k].style.display = "block";
        }, 500);
      }
    }
  };
}
