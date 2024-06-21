import { products, avgStar, usersReviewNr,findProduct } from "../data/products.js";
import { addToCart, cart} from "../data/cart.js";

let nrPrdctRender;
let searchCondition = '';
export let categoryCondition = '';

renderProductsGrid();
showCategory();
cartBubbleNotif();

/*---- swap variables in sidebar.js -----*/
export function setCatCond(category){
  categoryCondition = category;
}

export function Conditions(item){
  if( item.title.toLowerCase().includes(searchCondition.toLowerCase()) && item.category.includes(categoryCondition)){
    return true;
  }

  return false;
}

function cartBubbleNotif(){
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
     
export function renderProductsGrid(){
  let page = document.querySelector('.js-products-grid');
  page.innerHTML =``;
  nrPrdctRender = 0;

  products.map(item => {
    if(Conditions(item))
      {
        page.innerHTML +=`
          <div class="product-container" data-product-id="${item.id}">
        <div class="genius">genius</div>
        <div class="promotie">Super Pret</div>
        <div class="fav-button">
          <img src="images/icons/heart.png">
        </div>
        <div class="image-container">
          <img src="images/products/${item.image}">
        </div>
        <div class="product-details">
          <div class="title">
            ${item.title}
          </div>
          <div class="rating">
            <div class="star-outer">
              <div class="star-inner"></div>
            </div>
            <p>${avgStar(item)}</p>
            <p>(${usersReviewNr(item)})</p>
          </div>
          <div class="price">${item.price} Lei</div>
          
          </div>
            <div class="button-container">
              <button class="add-to-cart-button" data-product-id ="${item.id}">Adauga in cos</button>
              <div class="cart-container">
                <img src="images/icons/shopping-cart_white.png">
              </div>
            </div>
          </div>
     `;

      nrPrdctRender++;
    }
  });

  document.querySelectorAll('.product-container').forEach(product => {
    const productId = product.dataset.productId;

    product.querySelector('.add-to-cart-button').addEventListener('click',() => {
      addToCart(productId);
      cartBubbleNotif();
    });

    /*---- star rating -----*/
    product.querySelector('.star-inner').style.width = avgStar(findProduct(productId)) * 10 * 2 + '%';
  });

  /*
  document.querySelectorAll('.add-to-cart-button').forEach(button => {
    let productId = button.dataset.productId;

    button.addEventListener('click', () => {
      addToCart(productId);
    });
  });
  */

  if(page.innerHTML === ''){
    page.innerHTML = 'No results';
  }
}



/*---- search box ----*/

let search_box = document.querySelector('.js-search-box');
search_box.addEventListener('keyup', () => {
  searchCondition = search_box.value;
  renderProductsGrid()
});


/*---- showing category selected -----*/

export function showCategory(){
  let elem = document.querySelector('.js-category-details p');
  elem.innerHTML = categoryCondition + ` <span>(${nrPrdctRender})</span>` ;

  if(categoryCondition === ''){
    elem.innerHTML = `Toate produsele<span>(${nrPrdctRender})</span>`;
  }
}








