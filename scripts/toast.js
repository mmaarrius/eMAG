/*----- toast notification ------*/
const addedToFavMsg = `<img src="images/icons/red_heart.png"> Produsul a fost adaugat la Favorite.`;
const removedFromFavMsg = `<img src="images/icons/heart.png"> Produsul a fost eliminat de la Favorite`;
const addedToCartMsg = `<img src="images/icons/shopping-cart.png"> Produsul a fost adaugat la Cosul meu.`;
const yetInFavMsg = `<img src="images/icons/red_heart.png"> Produsul este deja in Favorite.`;
const indisponibleMsg = `Momentan functia nu este disponibila.`;

export function showToast(msg){
  let toastBox = document.querySelector('#toastBox');
  let toast = document.createElement('div');
  toast.classList.add('toast');

  if(msg === 'addedToFav')
    toast.innerHTML = addedToFavMsg;
  else if(msg === 'removedFromFav')
    toast.innerHTML = removedFromFavMsg;
  else if(msg === 'addedToCart')
    toast.innerHTML = addedToCartMsg;
  else if(msg ==='yetInFav')
    toast.innerHTML = yetInFavMsg;
  else if (msg === 'indisponible')
    toast.innerHTML = indisponibleMsg;

  toastBox.insertBefore(toast, toastBox.firstChild);

  setTimeout(() => {
    toastBox.removeChild(toast);
  },2000);
  
}
