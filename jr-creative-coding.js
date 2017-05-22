var drawRect = function(ctx, x, y, w, h, strokeColor, fillColor){
  x = x - (w/2);
  y = y - (h/2);
  ctx.beginPath();
  ctx.strokeStyle = (typeof strokeColor !== 'undefined') ?  strokeColor : "#d16";
  ctx.fillStyle = (typeof fillColor !== 'undefined') ?  fillColor : "rgba(255,255,255,.1)";
  ctx.fillRect(x, y, w, h);
}

var drawLine = function(ctx, x1, y1, x2, y2, strokeColor){
  ctx.beginPath();
  ctx.strokeStyle = (typeof strokeColor !== 'undefined') ?  strokeColor : "#d16";
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

var drawCicle = function(ctx, x, y, radius, start, end, strokeColor, fillColor){
  ctx.beginPath();
  ctx.strokeStyle = (typeof strokeColor !== 'undefined') ?  strokeColor : "#d16";
  ctx.fillStyle = (typeof fillColor !== 'undefined') ?  fillColor : "rgba(255,255,255,.1)";
  start = (start != null)? start : 0;
  end = (end != null)? end : Math.PI*2;
  ctx.arc(x, y, radius, start, end, true);
  ctx.fill();
  ctx.stroke();
}

/* Devuelve las cordenadas x,y del punto de la circunferencia que corresponde con el angulo especificado */
var circlePoint = function(ra, angle, left, top){
  x = ra * Math.cos(angle) + left;
  y = ra * Math.sin(angle) + top;
  return {"_x": x, "_y": y};
}

/* Redondea un número incluidos sus cecimales si se especifican*/
var round = function(num, decimals){
  if(typeof num === 'number'){
    if(typeof decimals === 'number' && decimals > 0){
        var multi = Math.pow(10,parseInt(decimals));
    }else{
      var multi = 1;
    }
    return Math.round(num*multi)/multi;
  }else{
    console.log("Error: Se esperaba un número");
    return null;
  }
}

/* Devuelve un número aleatoria entre las dos cifras dadas, se puede especificas el número de decimales */
var random = function(num1, num2, decimals){
  if((typeof num1 === 'number') && typeof num2 === 'number'){
    if(typeof decimals === 'number' && decimals > 0){
      var multi = Math.pow(10,parseInt(decimals));
    }else{
      var multi = 1;
    }
    if(num1 >=num2){
      console.log("Error: El numero inicial es mayor que el final");
      return null;
    }else{
      return round(Math.random()*(num2 - num1) + num1, decimals);
    }
  }else{
    console.log("Error: Esta función espera dos parámetros");
    return null;
  }
}

/* Para pasar grados a radianes*/
var toRadians = function(degrees){
  let radians = (Math.PI/180)*degrees
  return radians;
}


/*
  genera colores de forma infinita avanzando el la gama RGB hasta 255 y vuelta al cero,
  la gama de colores que devuelve depende del color inicla definido en las varieblaes r,g,b.
*/

var rUp = 0;
var gUp = 0;
var bUp = 0;
var r = 0;
var g = 0;
var b = 0;

var infiniteColor = function(){
  rUp = (r == 255 || r == 0)? !rUp : rUp;
  gUp = (g == 255 || g == 0)? !gUp : gUp;
  bUp = (b == 255 || b == 0)? !bUp : bUp;
  r+=(rUp)?1*(-1):(1);
  g+=(gUp)?1*(-1):(1);
  b+=(bUp)?1*(-1):(1);
  return "rgb("+r+","+g+","+b+")";
}

//arc(x, y, radius, startAngle, endAngle, anticlockwise)
//radians = (Math.PI/180)*degrees
//
// initialPoint = top, left
//
// radius
//
// numVertex

/* Pasa un color Hexadecimal a RGB */
var hexa2RGB = function(color){
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  var longColor = color.length;
  if (longColor > 6 || longColor < 3) {
    console.log("El número no tiene el formato correcto");
    return null;
  }else{
    var r = parseInt(color.substring(0,2), 16);
    var g = parseInt(color.substring(2,4), 16);
    var b = parseInt(color.substring(4,6), 16);
    console.log("rgb("+r+","+g+","+b+")");
    return [r,g,b];
  }
}

/* Suma el porcentaje indicado a un color (RR, GG o BB) hexadecimal para aclararlo */
var addLight = function addLight(color, amount) {
  var cc = parseInt(color, 16) + amount;
  var c = cc > 255 ? 255 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : "0" + c.toString(16);
  return c;
};

/* Aclara un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
var lighten = function lighten(color, amount) {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = parseInt(255 * amount / 100);
  var rgbColor = hexa2RGB(color)
  return color = "#" + addLight(color.substring(0, 2), amount) + addLight(color.substring(2, 4), amount) + addLight(color.substring(4, 6), amount);
};

/* Resta el porcentaje indicado a un color (RR, GG o BB) hexadecimal para oscurecerlo */
var subtractLight = function subtractLight(color, amount) {
  var cc = parseInt(color, 16) - amount;
  var c = cc < 0 ? 0 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : "0" + c.toString(16);
  return c;
};

/* Oscurece un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
var darken = function darken(color, amount) {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = parseInt(255 * amount / 100);
  return color = "#" + subtractLight(color.substring(0, 2), amount) + subtractLight(color.substring(2, 4), amount) + subtractLight(color.substring(4, 6), amount);
};

/* Pasa una cadena de texto a binario */
var cadena ="Hola me llamo Jose";
cadena = cadena.split(" ")
nuevac = cadena.map(function(w){
  p = parseInt(w, 32)
  return p.toString(2)
})
nuevac.join("");
