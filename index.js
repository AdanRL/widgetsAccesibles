console.log("works");

var M, options;

// Acordeón

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instance = M.Collapsible.init(elems, options);
    instance.open(1);
  });

function toggleAriaExpanded(Elemento) {
  var d1 = document.querySelector("#desple1");
  var d2 = document.querySelector("#desple2");
  var d3 = document.querySelector("#desple3");
  
  switch (Elemento) {
    case d1:
      d2.setAttribute("aria-expanded", "false");
      d3.setAttribute("aria-expanded", "false");
      break;
    case d2:
      d1.setAttribute("aria-expanded", "false");
      d3.setAttribute("aria-expanded", "false");
      break;
    case d3:
      d1.setAttribute("aria-expanded", "false");
      d2.setAttribute("aria-expanded", "false");
      break;
  };
  
  console.log(Elemento);
  var x = Elemento.getAttribute("aria-expanded");
  console.log(x);
  if (x == "true") {
    x = "false"
  } else {
    x = "true"
  }
  Elemento.setAttribute("aria-expanded", x);
};

// Breadcrumbs


//Carrusel
document.addEventListener('DOMContentLoaded', function(){
  var elems = document.querySelectorAll('.carousel');
  console.log(elems);
  var instances = M.Carousel.init(elems, {
    indicators: true,
    duration: 200,
    //numVisible: 1,
    fullWidth: true,
  });
  console.log(instances);
  
  /*var elem = document.querySelector("#im0");
  var instance = M.Carousel.getInstance(elem);
  console.log(instance);
  instances.set(0);*/
  
  //instances.next();
  
});

function cambiarDeImagen(Imagen) {
  console.log(Imagen);
  var elem = document.querySelector("#im0");
  console.log(elem);
  var instances =  M.Carousel.getInstance(elem);
  console.log(instances);
  instances.set(0);
  //instances.set(Imagen.getId());
};