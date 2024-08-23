import { cart,removeFromCart, addToQuantity, decreaseQuantity, cartPrice } from "../data/cart.js";
import { findProduct, calcRate } from "../data/products.js";
import { favBubbleNotif } from "./fav-page.js";
import { addOrRemoveFromFav, addedToFav} from "../data/fav.js";
import { showToast } from "./toast.js";

const notif = document.querySelector('.notification-cart');

initializeCartPage();
//favBubbleNotif();

function initializeCartPage() {
  if (document.querySelector('.grid-cart-products')) {
    renderCartProductsGrid();
  }

  if (document.querySelector('.notification-cart')) {
    cartBubbleNotif();
  }

  if(document.querySelector('.notification-fav')){
    favBubbleNotif();
  }
}

export function cartBubbleNotif(){
  const notif = document.querySelector('.notification-cart');

  let cart_quantity = 0;

  cart.map(() => {
    cart_quantity++; 
  });

  if(cart_quantity){
    notif.style.display = 'flex';
    notif.innerHTML = cart_quantity;
  }else{
    notif.style.display = 'none';
  }
}



function renderCartProductsGrid(){
  let page = document.querySelector('.grid-cart-products');
  page.innerHTML = ``;

  let matchingItem;

  
  cart.map(item => {
    matchingItem = findProduct(item.id);
    
    page.innerHTML += `
    <div class="cart-product-container" data-product-id="${matchingItem.id}">
        <div class="cp-left-container">
          <div class="cp-image-container">
            <img src="images/products/${matchingItem.image}">
          </div>
          <div class="cp-details">
            <div class="cp-title">
              <p>${matchingItem.title}</p>
            </div>
            <div class="cp-delivery">
              <p>Disponibilitate: <span>in stoc</span></p>
              <p>Livrare in: <span>2 zile</span>
              </p>
            </div>
          </div>
        </div>
        <div class="cp-right-container">
          <div class="cp-quantity-container">
            <button class="minus-button">-</button>
            <div class="cp-quantity">${item.quantity}</div>
            <button class="plus-button">+</button>
          </div>
          <div class="cp-price-btns-container">
            <div class="cp-price-details">
              <h2>${matchingItem.price} Lei</h2>
              <p>sau ${calcRate(matchingItem.price)} Lei / luna</p>
            </div>
            <div class="cp-btns-container">
              <p class="js-add-to-fav">Muta in favorite</p>
              <p class="remove-button">Sterge</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
  });

  document.querySelectorAll('.cart-product-container').forEach(product => {
    const productId = product.dataset.productId;

    /*--- remove product from cart ----*/
    product.querySelector('.remove-button').addEventListener('click',() => {
      removeFromCart(productId);
      renderCartProductsGrid();
      cartBubbleNotif();
    });

    /*---- add to cart product quantity ---*/
    product.querySelector('.plus-button').addEventListener('click',() => {
      product.querySelector('.cp-quantity').innerHTML =  addToQuantity(productId);
      renderPayment();
    });

    /*---- reduce quantity ----*/
    product.querySelector('.minus-button').addEventListener('click',() => {
      const quantity = decreaseQuantity(productId);
      if(quantity === 0){
        removeFromCart(productId);
        renderCartProductsGrid();
        cartBubbleNotif();
      }else{
        product.querySelector('.cp-quantity').innerHTML = quantity;
        renderPayment();
      }
    });

    /*---- add to fav -----*/
    product.querySelector('.js-add-to-fav').addEventListener('click',() => {
      if(!addedToFav(productId)){
        addOrRemoveFromFav(productId);
        favBubbleNotif();
      }else{
        showToast('yetInFav');
      }

        
    });
  });

  

  /*----- if cart is empty or not  -----*/
  const main = document.querySelector('main');
  const i = document.querySelector('.empty-cart-notification');

  if(page.innerHTML === ``){
    main.style.display = 'none';
    i.style.display = 'flex';
  }else{
    main.style.display = 'flex';
    i.style.display = 'none';
    renderPayment();
  }
  
  
}

function renderPayment(){
  let html = `
    <div class="payment-summary">
      <h2>Sumar comanda</h2>
      <div class="summary-container">
        <div class="price">
          <div>
            <p>Cost produse: </p>
            <p class="js-product"><span></span> Lei</p>
          </div>
          <div>
            <p>Cost livrare: </p>
            <p class="js-delivery"><span></span> Lei</p>
          </div>
        </div>
        <div class="total js-total">
          <h2>Total:</h2>
          <p></p>
        </div>
      </div>
      <div class="cont-btn-container js-cont-btn-container">
        <div class="indicator">
          <img src="images/icons/forward.png">
        </div>
        <p>Continua</p>
      </div>
  </div>
  `;

  document.querySelector('.payment-container').innerHTML = html;

  const price = cartPrice();
  const delivery_price = 12
  document.querySelector('.price .js-product span').innerHTML = price;
  document.querySelector('.price .js-delivery span').innerHTML = delivery_price;

  document.querySelector('.js-total p').innerHTML = price + delivery_price;

  /*---- indisponible functions -----*/
  document.querySelector('.js-cont-btn-container').addEventListener('click',() => {
    showToast('indisponible');
  })

  
}

