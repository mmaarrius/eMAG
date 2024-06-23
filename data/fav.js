
export let fav = [];

loadFavFromStorage();

function loadFavFromStorage(){
  fav = JSON.parse(localStorage.getItem('fav')); 

  if(!fav){
    fav = [];
  }
}

function saveFavToStorage(){
  localStorage.setItem('fav',JSON.stringify(fav));
}

export function addedToFav(item_id){
  let added = false;

  fav.map(id => {
    if(item_id === id)
      added = true;
  });

  return added;
}

export function addOrRemoveFromFav(p_id) {
  let isThere = false;
  let matchingIndex;

  fav.map((item,index) => {
    if(item === p_id){
      isThere = true;
      matchingIndex = index;
    }
  })

  if(!isThere){
    fav.push(p_id.toString());
  }else{
    fav.splice(matchingIndex,1);
  }
  
  saveFavToStorage();
}

export function favProductsNr(){
  let nr = 0;
  fav.map(() => {
    nr++;
  });

  return nr.toString();
}

