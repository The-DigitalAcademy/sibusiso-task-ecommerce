
// JS CONNECTS TO HTML ELEMENTS
var sneakerProducts = document.getElementById('sneakerProducts');
var displayAmount = document.getElementById('displayAmount');
var counter = document.getElementById('counter');
  

// VARIABLES
var productsArray = [
  {
    name: 'New Balance 1500',
    rates: 4,
    money: 1800,
    image: 'https://th.bing.com/th/id/R.1672c175e9555c2af86d52ccda4bf9c3?rik=ja6Jxnz1QKYucw&riu=http%3a%2f%2fassets.pys.com%2fmedia%2fcatalog%2fproduct%2fcache%2f6%2fimage%2f1100x%2f040ec09b1e35df139433887a97daa66f%2fn%2fb%2fnbms327pg_2.jpg&ehk=0fbDYAKfxMUq91utiPU5twmbtyKRMS8oG8p9LhYO%2bXY%3d&risl=&pid=ImgRaw&r=0',

},

{
  name: 'New Balance 997',
  rates: 3,
  money: 1300,
  image: 'https://i0.wp.com/flawlesscrowns.com/wp-content/uploads/2020/03/New-Balance-997-Multi-Color-Sneaker.jpg',

},

{
  name: 'New Balance 57',
  rates: 4,
  money: 1500,
  image: 'https://www.freshnessmag.com/.image/t_share/MTM1OTgxMzkzNzc2MzU1OTcx/new-balance-m1400dj-distinct-usa-00.jpg',

},

{
  name: 'New Balance 15',
  rates: 5,
  money: 2100,
  image: 'https://th.bing.com/th/id/R.7cf17352195a1de863bc7ca364723da0?rik=JoaH8hlwC%2buCrQ&riu=http%3a%2f%2fwww.jumpmankicks.com%2fshoegallery%2fnew_balance%2f572%2f2014%2fm572bg_elite_edition_blue_grey%2fnew_balance_m572bg_elite_edition_blue_grey-1.jpg&ehk=m9GlN28ay09WWrl7K5sj%2bwxsHGYmP2emYDOfvScrcNc%3d&risl=&pid=ImgRaw&r=0',

},

{
  name: 'New Balance Blue',
  rates: 3,
  money: 2500,
  image: 'https://blog.klekt.com/wp-content/uploads/2020/05/New-Balance-Tokyo-Design-Studio-Blue-Marble-1-min.jpg',

},

{
  name: 'New Balance Fire',
  rates: 4,
  money: 1100,
  image: 'https://th.bing.com/th/id/OIP.DSuzP9FSUAEKDwt84zECEQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',

},

{
  name: 'New Balance VS',
  rates: 5,
  money: 1000,
  image: 'https://thesource.com/wp-content/uploads/2014/04/1300-11.jpg',

},

{
  name: 'New Balance 44',
  rates: 4,
  money: 1200,
  image: 'https://www.freshnessmag.com/.image/t_share/MTM2NjMxODc5MTg4MzU4NzUx/new-balance-m990hl-13.jpg',

},
]


productMoney = 0;
var productName;
var productRates;
var productImage;

var cartArray = [];


function allAddcart() {

  cartArray.push({name: productName,rates: productRates,money: productMoney,image: '',})

  productsOnscreen();
  cartOnScreen();
}

// function calculate() {
//    productMoney = 0;
   
//    for (let i = 0; i < productsArray.length; i++) {
//     if (productsArray[i].money == productMoney) {
//       productMoney += productsArray[i].money
//     }
    
//    }

//  productMoney = productMoney + productMoney;
 
// }

// remove the cart into cartArray
function removeCart() {

  cartItems = document.getElementById('cartItems');
   cartArray.shift();
    cartOnScreen();
}

//PRODUCTS SHOW 
function productsOnscreen() {

    sneakerProducts.innerHTML = ""

    // productsArray into loop to show
    for (let i = 0; i < productsArray.length; i++) {
        sneakerProducts.innerHTML += 
        
        `<div class="product">
        <div class="product__img">
          <img
            src=${productsArray[i].image}
            alt=""
          />
        </div>

        <div class="product__name">${productsArray[i].name}</div>
        <div class="product__rate">
        ${'<span>*</span>'.repeat(productsArray[i].rates)}
        </div>
        <div class="product__price">R <span>${productsArray[i].money}</span></div>
        <button onclick="allAddcart()">+ ADD TO CART</button>
      </div>`
        
    }
}

function cartOnScreen() {

  displayAmount.innerHTML = "";
  
    cartItems.innerHTML = "";

    // cart items into loop to show below
    for (let x = 0; x < cartArray.length; x++) {

      cartItems.innerHTML += `
      <ul class="productC">
          <div class="product__img">
            <img
              src='${productsArray[x].image}'
              alt=""
            />
          </div>

          <div class="product__name">${productsArray[x].name}</div>
          <div class="product__rate">
          ${'<span>*</span>'.repeat(productsArray[x].rates)}
          </div>
          <div class="product__price">R <span>${productsArray[x].money}</span></div>
          <button class="cartbtn" onclick="removeCart()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg></button>
        <ul/>
      `
    }

    displayAmount.innerHTML = `R${productMoney}`;

    counter.innerHTML = cartArray.length;
}
productsOnscreen();
cartOnScreen();
