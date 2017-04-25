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

var circlePoint = function(ra, angle, left, top){
  y = ra * Math.sin(angle) + top;
  x = ra * Math.cos(angle) + left;
  return {"_x": x, "_y": y};
}

var toRadians = function(degrees){
  let radians = (Math.PI/180)*degrees
  return radians;
}
//arc(x, y, radius, startAngle, endAngle, anticlockwise)
//radians = (Math.PI/180)*degrees
// 
// initialPoint = top, left
//
// radius
//
// numVertex
