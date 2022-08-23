
// JS CONNECTS TO HTML ELEMENTS
var sneakerProduct = document.getElementById('sneakerProducts')


// VARIABLES
var productsArray = [{
    no: 1,
    rates: 4,
    money: '1800',
    image: "https://sneakernews.com/wp-content/uploads/2020/03/new-balance-1500-animal-pack-brown-2.jpg?w=1140",

}];

//PRODUCTS SHOW FUNCTION
function productsOnscreen() {
    sneakerProduct.innerHTML = ''

    for (let i = 0; i < productsArray.length; i++) {
        sneakerProduct.innerHTML = `
        <div class="product">
          <div class="product__img">
            <img
              src="${productsArray[i].image}"
              alt=""
            />
          </div>

          <div class="product__name">New Balance 1500</div>
          <div class="product__rate">
            <span>*</span><span>*</span><span>*</span><span>*</span>
          </div>
          <div class="product__price">R <span>${productsArray[i].money}</span></div>
          <button onclick="addCart()">+ ADD TO CART</button>
        </div>
        `
        
    }
}
productsOnscreen();