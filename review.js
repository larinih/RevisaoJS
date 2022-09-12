/*
Agora temos um grande desafio!

Você agora é uma pessoa desenvolvedora e gostaria de aplicar seus conhecimentos
 em programação para resolver problemas do cotidiano.

O primeiro problema que surge é sobre o consumo de combustível de seu carro,
 vamos olhar com mais atenção os detalhes? 
 Portanto, confira as informações abaixo:

Seu carro tem um tanque de 40 litros e pode utilizar álcool ou gasolina.

Com gasolina e usando todo o tanque 
você percorre um caminho com gasolina de 480 quilômetros. 
Qual é o consumo de gasolina`?

Com álcool, um tanque de 40 litros fez um caminho 
com Álcool de 300 quilômetros. Qual é o consumo de Álcool?
*/
var tanque = 40;

var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina / tanque;

var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool / tanque;

document.write("O consumo de Gasolina é " + consumoDeGasolina + " km/L");

document.write("<br>");

document.write("O consumo de Álcool é " + consumoDeAlcool + " km/L");
