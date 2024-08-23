import { categoryCondition, setCatCond, renderProductsGrid, showCategory } from "./emag.js";

/*---- sidebar animation ------*/
let sidebar = document.querySelector('.js-sidebar');


export function moveSidebar(){
  if(sidebar.style.transform === "translateX(0%)"){
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.opacity = "0";
    document.querySelector('body').classList.remove('noscroll');
  }else{
    sidebar.style.transform = "translateX(0%)";
    sidebar.style.opacity = "1";
    document.querySelector('body').classList.add('noscroll');
  }
}

sidebar.addEventListener('mouseleave', () => {
  sidebar.style.transform = "translateX(-100%)";
  sidebar.style.opacity = "0";
});

document.querySelector('.js-menu').addEventListener('click', moveSidebar);

/* ---- render category products  --- */
document.querySelectorAll('.js-sidebar button').forEach(button => {
  let category = button.dataset.category;

  button.addEventListener('click', () => {
    setCatCond(category);
    renderProductsGrid();
    showCategory();
    moveSidebar();
  });
});


