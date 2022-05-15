var numero = document.getElementById("num");
var boton = document.getElementById("boton");

var es = document.getElementById("espacioResultado");
var espacio = es.getContext("2d");


for(var i = 1; i < 101; i++)
{   
    // En JS el and se escribe &&
    if(i %3 == 0 && i %5 ==0)
    {
        document.write(i + " FizzBuzz<br>");
    }
    else if(i %3 == 0)
    {
        document.write(i + " Fizz<br>");
    }
    else if(i %5 == 0)
    {
        document.write(i + " Buzz<br>");
    }
    else
    {
        document.write(i + " No es divisible dentro de 3 ni 5<br>");
    }
}


boton.addEventListener("click", divisible);


function divisible()
{
    num = parseInt(numero.value);
    if(num %3 == 0 && num %5 ==0)
    {
        alert("FizzBuzz");
    }
    else if(num %3 == 0)
    {
        alert("Fizz");
    }
    else if(num %5 == 0)
    {
        alert("Buzz");
    }
    else
    {
        alert("No es divisible dentro de 3 ni 5");
    }
}