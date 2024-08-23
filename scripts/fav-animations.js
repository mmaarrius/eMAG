export function addToCartButtonAnimation(item){
  item.style.transform = 'scale(0.9)';
  item.style.opacity = '0.8';

  setTimeout(() => {
    item.style.transform = 'scale(1)';
    item.style.opacity = '1';
  },200);
}