import { addOrRemoveFromFav, fav, favProductsNr } from "../data/fav.js";
import { cartBubbleNotif } from "./cart-page.js";
import { findProduct, avgStar, usersReviewNr } from "../data/products.js";
import { addToCart } from "../data/cart.js";
import { addToCartButtonAnimation } from "./fav-animations.js";
import { showToast } from "./toast.js";

initializeFavPage();

function initializeFavPage(){
  if (document.querySelector('.notification-cart')) {
    cartBubbleNotif();
  }

  if(document.querySelector('.notification-fav')){
    favBubbleNotif();
  }

  if(document.querySelector('.js-grid-fav-products')){
    renderFavPage();
  }
  
  if(document.querySelector('.js-new-account-fav-btn')){
    /*------ indisponible functions pf page -------*/
    document.querySelector('.js-new-account-fav-btn').addEventListener('click',() => {
      showToast('indisponible')
    } );

    document.querySelector('.js-log-in-btn-container').addEventListener('click',() => {
      showToast('indisponible')
    } );
  }

}


export function favBubbleNotif(){
  const notif = document.querySelector('.notification-fav');

  let fav_quantity = 0;

  fav.map(() => {
    fav_quantity++;
  });

  if(fav_quantity){
    notif.style.display = 'flex';
    notif.innerHTML = fav_quantity;
  }else{
    notif.style.display = 'none';
  }
}

function renderFavPage(){
  let page = document.querySelector('.js-grid-fav-products');
  let html = ``;
  let product;

  const title = `
    <div style="       
      background-color: white;  
      padding: 10px;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);
      max-width: 870px;
      margin-bottom:10px;
    ">
      <p style="
        display: inline-block;
        font-size: 1.5rem;
        margin-right: 10px;
      ">Favorite</p>
      <p style="
        display: inline-block;
        font-size: 1.2rem;
        margin-right: 7px;
      " class = "js-fav-products-nr"></p>
      <p style="
        display: inline-block;
        font-size: 1.2rem;
      ">produse</p>
    </div>
  `;
  page.innerHTML = title;

  fav.map(id => {
    product = findProduct(id);

    html += `
    <div class="product-container js-product-container" data-product-id=${id}>
      <div class="image-container">
        <img src="images/products/${product.image}">
      </div>
      <div class="product-details-container">
        <div class="left-side">
          <div class="remove-from-fav js-remove-from-fav">
            <img src="images/icons/close (1).png">
          </div>
          <div style="
              display: flex;
              margin-top: 10px;
              margin-bottom: 10px;
            ">
            <div class="genius">
              genius
            </div>
            <div class="super-pret">
              Super Pret
            </div> 
          </div>
          
          <div class="title">
            <p>${product.title}</p>
          </div>
          <div class="rating">
            <div class="star-outer">
              <div class="star-inner"></div>
            </div>
            <p class="avg-star">${avgStar(product)}</p>
            <p class="nr-stars">(${usersReviewNr(product)})</p>
          </div>
          
        </div>
        <div class="right-side">
          
          <p >in stoc</p>
          <p >Livrat de eMAG</p>
          <p style="
            color: rgb(206, 4, 4);
          " >Extra</p>
          <p style="
            color: #4070fa;
          ">pana la 24 de rate</p>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px; 
          ">
            <div class="price">${product.price} Lei</div>
            <button class="add-to-cart-btn js-add-to-cart-btn">
              <img src="images/icons/shopping-cart_white.png">
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  });
  

  page.innerHTML += html;

  document.querySelectorAll('.js-product-container').forEach(product => {
    let productId = product.dataset.productId;

    /*---- eliminate form fav -----*/
    product.querySelector('.js-remove-from-fav').addEventListener('click',() => {
      addOrRemoveFromFav(productId);
      renderFavPage();
      favBubbleNotif();
    });

    /*---- add to cart from fav -----*/
    product.querySelector('.js-add-to-cart-btn').addEventListener('click',() => {
      addToCart(productId);
      cartBubbleNotif();
      addToCartButtonAnimation(product.querySelector('.js-add-to-cart-btn'));
    });

    product.querySelector('.star-inner').style.width = avgStar(findProduct(productId)) * 10 * 2 + '%';
  });

    
  /*---- title with nr of fav products -----*/
  let nrProd = favProductsNr()
  document.querySelector('.js-fav-products-nr').innerHTML = nrProd;

  if(nrProd === '0'){
    page.innerHTML += `
    <div class="empty-fav-container">
      <div class="img-container" style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
      ">
        <img src="images/icons/empty_state_favorite.webp">
      </div>
      
      <h2>Hmm, niciun produs in lista ta.</h2>
      <h2>Uite niste recomandari care te-ar putea inspira.</h2>
      <p>Adauga acum la Favorite si fa-ti liste dupa preferinte.</p>
      <p>Le poti share-ui oricand cu prietenii si poti salva la Favorite produsele din cos ca sa le cumperi mai tarziu. &#128153;</p>
      <button onclick="window.location.href ='index.html'" class="see-products-btn" >Vezi produse</button>
        
      </div>
    `;
  }

  
    
}


