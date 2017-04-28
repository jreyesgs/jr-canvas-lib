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

/* Redondea un número incluidos sus cecimales si se especifica*/
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

/* Devuelve un número aleatoria entres las dos cifras dadas, se puede especificas el número de decimales */
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

var toRadians = function(degrees){
  let radians = (Math.PI/180)*degrees
  return radians;
}

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
