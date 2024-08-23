
document.addEventListener("DOMContentLoaded", function() {
  
  let paragraph = document.querySelectorAll('.cp-title p');
  let button = document.querySelectorAll('.cp-quantity-container button');


  paragraph.forEach(paragraph => {
    paragraph.addEventListener("mouseover", function() {
      paragraph.classList.add("title-hover");
     });

    paragraph.addEventListener("mouseout", function() {
      paragraph.classList.remove("title-hover");
    });
  });
  // Evenimente pentru desktop (mouse)
 

  button.forEach(button => {
    button.addEventListener("mouseover", function() {
      button.classList.add("quantity-button-hover");
    });
  
    button.addEventListener("mouseout", function() {
      setTimeout(() => {
        button.classList.remove("quantity-button-hover");
      },100);
    });
  });
  

  // Evenimente pentru mobile (touchscreen)
  paragraph.forEach(paragraph => {
    paragraph.addEventListener("touchstart", function() {
      paragraph.classList.add("title-hover");
    });
  
    paragraph.addEventListener("touchend", function() {
      setTimeout(() => {
        paragraph.classList.remove("title-hover");
      },100);
    });
  });

  button.forEach(button => {
    button.addEventListener("touchstart", function() {
      button.classList.add("quantity-button-hover");
    });
  
    button.addEventListener("touchend", function() {
      setTimeout(() => {
        button.classList.remove("quantity-button-hover");
      },100);
    });
  });
});



