var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorActual;

colorPersonalizado.addEventListener('change',
 (function() {
   // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
      // Completar para que cambie el indicador-de-color al colorActual
  indicadorColor.style.backgroundColor=colorActual;
   })
);
//Variables de Paleta de Colores, Grilla e Indicador de Color
var paleta=document.getElementById('paleta');
var grilla=document.getElementById('grilla-pixeles');
var indicadorColor=document.getElementById('indicador-de-color')

//Función para crear la Paleta de Colores
function crearPaleta(){
  for(var i=0; i<nombreColores.length;i++){
    var nuevoColor= document.createElement('div');
    nuevoColor.className="color-paleta";
    nuevoColor.style.backgroundColor=nombreColores[i];
    paleta.appendChild(nuevoColor);
  //Elección y Cambio de color del Indicador de Color
    nuevoColor.addEventListener('click',cambiarColor);
  
    function cambiarColor(e){
      colorActual= e.target.style.backgroundColor;
      indicadorColor.style.backgroundColor=colorActual;
    }
  }
}


//Función para crear la Grilla de Dibujo
  function crearGrilla(){
    var i=0;
    while(i<1749){
    var pixel=document.createElement('div');
    grilla.appendChild(pixel);
    i++;

   //Pintar un pixel 
    pixel.addEventListener('click',pintarPixel);

    function pintarPixel(e){
    e.target.style.backgroundColor=colorActual;
    
    }
  }
}

//Eventos del mouse sobre la Grilla
  var mouseStatus;
  grilla.addEventListener('mousedown',mouseDown);
  grilla.addEventListener('mouseup',mouseUp);
  
  function mouseDown(){
    mouseStatus=true;
  }

  function mouseUp(){
    mouseStatus=false;
    }

  //Para pintar en forma continua
  grilla.addEventListener('mouseover',pintarContinuo);

  function pintarContinuo(e){
    if(mouseStatus){
      e.target.style.backgroundColor=colorActual
    }
  }

  //Dejar la grilla en blanco con Boton Borrar
  var btnBorrar=document.getElementById('borrar');
  btnBorrar.addEventListener('click',grillaWhite);
  function grillaWhite(e){
    $('#grilla-pixeles div').animate({'background-color':'white'},1000);
  }

  //Variables de cada imagen de Superhéroe
  var batman=document.getElementById('batman');
  var wonder=document.getElementById('wonder');
  var flash=document.getElementById('flash');
  var invisible=document.getElementById('invisible');

var superheroe=[batman,wonder,flash,invisible];

//Cargar la imagen de cada superhéroe al hacer click
batman.addEventListener('click',cargarSuperheroe);
wonder.addEventListener('click',cargarSuperheroe);
flash.addEventListener('click',cargarSuperheroe);
invisible.addEventListener('click',cargarSuperheroe);



  crearPaleta();
  crearGrilla();
  

