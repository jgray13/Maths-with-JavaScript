function Addition(){
  var number1 = parseInt(document.getElementById('number1').options[document.getElementById('number1').selectedIndex].value);
  var number2 = parseInt(document.getElementById('number2').options[document.getElementById('number2').selectedIndex].value);
  var output = number1 + number2;   
  document.getElementById('playingWithMaths').innerHTML = 'Result: '+ output;
}
function Subtract(){
  var number1 = parseInt(document.getElementById('number1').options[document.getElementById('number1').selectedIndex].value);
  var number2 = parseInt(document.getElementById('number2').options[document.getElementById('number2').selectedIndex].value);
  var output = number1 - number2;
  document.getElementById('playingWithMaths').innerHTML = 'Result: '+ output;
}
function Multiply(){
  var number1 = parseInt(document.getElementById('number1').options[document.getElementById('number1').selectedIndex].value);
  var number2 = parseInt(document.getElementById('number2').options[document.getElementById('number2').selectedIndex].value);
  var output = number1 * number2;
  document.getElementById('playingWithMaths').innerHTML = 'Result: ' + output;
}
function Divide(){
  var number1 = parseInt(document.getElementById('number1').options[document.getElementById('number1').selectedIndex].value);
  var number2 = parseInt(document.getElementById('number2').options[document.getElementById('number2').selectedIndex].value);
  var output = number1 / number2;
  output = output.toFixed(2);
  document.getElementById('playingWithMaths').innerHTML = 'Result: ' + output;
}
function Difference(){
  var number1 = parseInt(document.getElementById('number1').options[document.getElementById('number1').selectedIndex].value);              
  var number2 = parseInt(document.getElementById('number2').options[document.getElementById('number2').selectedIndex].value);
  var division_result = Math.floor(number1/number2);
  var difference = number1 % number2;
  document.getElementById('playingWithMaths').innerHTML = 'Result: '+division_result+ ' (Remainder '+ difference + ')';
}