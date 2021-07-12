let products = ["footwear", "electronics", "clothes"];

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
}
