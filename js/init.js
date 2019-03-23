(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function validate(valor, event){
  valor = Number(valor);
var id=event.target.id;

var idnota="";
  if(id=="valor1")
      idnota="nota1";
if(id=="valor2")
      idnota="nota2";
if(id=="valor3")
      idnota="nota3";
if(id=="valor4")
      idnota="nota4";

if(valor>100 || valor<0){
    alert("Las Notas tienen que estar entre 0 y 100");
    document.getElementById(id).value=0;
    document.getElementById(idnota).innerHTML="";
   

}
else{
  calcularnota(valor, idnota);
  
}
calcularpromedio();


}

function calcularnota(valor, idnota){
  if(valor<=100 && valor>=90)
     document.getElementById(idnota).innerHTML="A";
  if(valor<=89 && valor>=80)
    document.getElementById(idnota).innerHTML="B";
  if(valor<=79 && valor>=70)
    document.getElementById(idnota).innerHTML="C";
  if(valor<=69 && valor>=60)
    document.getElementById(idnota).innerHTML="D";
  if(valor<=59 && valor>=0)
    document.getElementById(idnota).innerHTML="E";

    

}

function calcularpromedio(){
  var notas=[];

    notas.push(document.getElementById("valor1").value);
    notas.push(document.getElementById("valor2").value);
    notas.push(document.getElementById("valor3").value);
    notas.push(document.getElementById("valor4").value);
    var promedio= (Number(notas[0])+Number(notas[1])+Number(notas[2])+Number(notas[3]))/4;    
    document.getElementById("promedio").innerHTML=promedio;
    calcularnota(promedio, "notatotal")

}


function calcularG(){
  var g1= document.getElementById("masa1").value;
  var g2= document.getElementById("masa2").value;
  var d1= document.getElementById("distancia").value;

  var g= ((6.673 * Math.pow(10, -8))*Number(g1)*Number(g2))/d1*d1; 
  document.getElementById("fgravedad").innerHTML= "F = "+ g;


}

function pasaradinas(fuerza){


}

function calcularenergia(masa){

  var energia=masa*(2.997925 *Math.pow(10, 10)*(2.997925 *Math.pow(10, 10)));
  document.getElementById("energia").innerHTML="la energia es = " +energia;
}


function calcularhipotenusa(){

   var cateto1 =document.getElementById("cateto1").value;
   var cateto2 =document.getElementById("cateto2").value;
   cateto1cuadrado=Math.pow(Number(cateto1), 2);
   cateto2cuadrado=Math.pow(Number(cateto2), 2); 
   var hipotenusa=Math.pow((cateto1cuadrado+cateto2cuadrado), 0.5);
   document.getElementById("hipotenusa").innerHTML="La hipotenusa es =  " + hipotenusa;

}

function calculararea(){
  var lado1 =document.getElementById("lado1").value;
  var lado2 =document.getElementById("lado2").value;
  var lado3 =document.getElementById("lado3").value;
  lado1=Number(lado1);
  lado2=Number(lado2);
  lado3=Number(lado3);
  p=(lado1+lado2+lado3)/2;
  var area=p*(p-lado1)*(p-lado2)*(p-lado3);

  area =Math.pow(area, 0.5);
  document.getElementById("area").innerHTML="El area es =  " + area + "   U"+"&#178;";

}

function setformattime(){
var hora=document.getElementById("hora").value;
var minuto= document.getElementById("minutos").value;
var meridiano="";
hora=Number(hora);
minuto=Number(minuto);
console.log(hora, "   ", minuto)

if(hora>=0 && hora<=24 && minuto>=0 && minuto<=59){
if(hora==12 && minuto>=0 ){
  meridiano="PM";
 
}
if(hora<12){
  meridiano="AM";
}

if(hora > 12){
  meridiano="PM";
  hora=hora-12;
  console.log(hora);
}



}
if(hora>23 || hora<0 || minutos>59 || minutos<0){
  alert("inserte una hora correcta")
  document.getElementById("hora").value="00";
  document.getElementById("minutos").value="00";
  hora=0;
  minuto=0;
 meridiano="";
}


document.getElementById("horaconformato").innerHTML= hora+ ":"+minuto + meridiano;

}

function setfecha(){

var fecha = document.getElementById("fecha").value;
var customdate=fecha.split(" ");
console.log(customdate[0]);
console.log(customdate[1]);
console.log(customdate[2]);

if(customdate[1].toUpperCase()=="ENERO")
    mes=1;
if(customdate[1].toUpperCase()=="FEBRERO")
    mes=2;
if(customdate[1].toUpperCase()=="MARZO")
    mes=3;
if(customdate[1].toUpperCase()=="ABRIL")
    mes=4;
if(customdate[1].toUpperCase()=="MAYO")
    mes=5;
if(customdate[1].toUpperCase()=="JUNIO")
    mes=6;
if(customdate[1].toUpperCase()=="JULIO")
    mes=7;
if(customdate[1].toUpperCase()=="AGOSTO")
    mes=8;
if(customdate[1].toUpperCase()=="SEPTIEMBRE")
    mes=9;
if(customdate[1].toUpperCase()=="OCTUBRE")
    mes=10;
if(customdate[1].toUpperCase()=="NOVIEMBRE")
    mes=11;
if(customdate[1].toUpperCase()=="DICIEMBRE")
    mes=12;

document.getElementById("date").innerHTML = "<h5>"+customdate[0]+"/"+mes+"/"+ customdate[2]  +"</h5>"   
}

function stringtonumber(){
  var numero = document.getElementById("string").value;
  var a=numero.split(" ");
  if(a.length>2){
    alert("inserte un numero valido para la convercion")
    document.getElementById("string").value="";
  }
  
}

function circulo(radio){

  var circunferencia= 2*Math.PI*radio;
  var area=Math.PI*radio*radio;
  console.log(circunferencia);
  document.getElementById("datoscirculo").innerHTML="<h6>El area es : </h6> "+
   area +" <h6>La circunferencia es : </h6>"+ circunferencia;

}
