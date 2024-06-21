import { products, findProduct } from "./products.js";

export let cart;

loadFromStorage();


function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')); 

  if(!cart){
    cart = [];
  }
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(p_id) {
  let isThere = false;

  cart.map(item => {
    if(item.id === p_id){
      isThere = true;
      item.quantity++;
    }
  })

  if(!isThere){
    cart.push(
      {
        id: p_id.toString(),
        quantity: 1
      }
    )
  }
  
  saveToStorage();
}

export function removeFromCart(prd_id){
  cart.forEach((item,index) => {
    if(item.id === prd_id){
      cart.splice(index,1);
    }
  });

  saveToStorage();
}

export function addToQuantity(prd_id){
  let show_quantity;

  cart.forEach(item => {
    if(item.id === prd_id){
      item.quantity++;
      show_quantity = item.quantity;
    }
  });

  saveToStorage();
  return show_quantity;
}

export function decreaseQuantity(prd_id){
  let show_quantity;

  cart.forEach(item => {
    if(item.id === prd_id){
      item.quantity--;
      show_quantity = item.quantity;
    }
  });

  saveToStorage();
  return show_quantity;
}

export function cartPrice(){
  let price = 0;

  cart.map(item => {
    const product = findProduct(item.id);
    const prd_price = product.price;

    price += item.quantity * prd_price;
  });

  return price;
}