// la variable calculadora es el patron modulo del bloque de codigo para el funcionamiento de la misma

var calculadora = {


// Aqui se  establecen las  propiedades de la variable calculadora.
//las propiedades de una variable objeto asi como sus eventos se define con :


	pantalla: document.getElementById("display"),
	valorpantalla: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false,
	auxTeclaOperador: false,


// esta funcion init, indica la iniciacion del modelo. se establecen dos eventos. EventoPresiona Boton y asignarfuncionBoton. Para ello se utilizara el className ."tecla".


	init: (function(){
		this.EventoPresionaBoton(".tecla");
		this.asignarFuncionBoton();
	}),


// Esta funcion presionaBoton utiliza un selector del DOM para el ClassName "Tecla" y  la asigna a una variable de nombre botones.  Seguidamente se crea un ciclo de tipo determinado  "for" indicando un valor inicial del indice de 0, la condicion es que el indice debe ser menor que todas las posiciones que reoccore el array de la variable botones.  la propiedad length se utiliza para poder recorrer un array por todas sus posiciones y finalmente en la tercera sentencia despues de la iterracion es aumentar el valor del indice en una unidad.


	EventoPresionaBoton: function(){
		var botones = document.getElementsByClassName("tecla");
		for (let i = 0; i < botones.length; i++){

// la variable botones considerando toda sus posiciones mediante recorridos mediante la iteracion y agrega un evento de tipo listener de tipo mousedown  que se crea al presionar clic sobre la tecla y la transforma en escala scala x, y de 0.85. Por otro lado, con el evento mouseup se regresa la escala a la normal.

		botones[i].addEventListener("mousedown",function(){
		botones[i].style.transform = "scale(0.85,0.85)";
		});
		botones[i].addEventListener("mouseup",function(){
		botones[i].setAttribute("style","transform:scale(1,1)");
	});
}},

// esta funcion utiliza un selector del DOM mediante ID para cada tecla  y asigna un evento listener de tipo clic, el cual estara definido con una funcion diferenciada por Numero, Borrar, cambiarSigno, Ingreso Decimal, Resultado y Operacion, las cuales tienen definido un parametro y dependiendo de su definicion en otro bloque de codigo, esta ejecutara una accion. Todo lo anterio, estara al interior del patron modulo  calculadora.


	asignarFuncionBoton: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.Numero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.Numero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.Numero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.Numero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.Numero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.Numero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.Numero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.Numero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.Numero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.Numero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrar();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.Resultado();});
		document.getElementById("raiz").addEventListener("click", function() {calculadora.Operacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.Operacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.Operacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.Operacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.Operacion("+");});
	},


//la funcion borrar define el valor 0 o vacio a las propiedades establecidas para la calculadora y lo que este en pantalla al presiona el evento clic en la tecla ON se borrara.

	borrar: function(){

	  this.valorpantalla = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		this.ultimoValor = 0;
		this.updatepantalla();
	},


// la funcion cambiar signo es de tipo condicional if else. si el valorpantalla es diferente a "0" y tambien si el valor pantalla es igual a "-" , considerando la variable aux definida por el valor de pantalla sin modificarse mediante el metodo silce(1), entonces aux es igual a el signo negativo "-" + el valor de pantalla original.


	cambiarSigno: function(){
		if (this.valorpantalla !="0") {
			var aux;
			if (this.valorpantalla.charAt(0)=="-") {
				aux = this.valorpantalla.slice(1);
			}	else {
				aux = "-" + this.valorpantalla;
			}
		this.valorpantalla = "";
		this.valorpantalla = aux;
		this.updatepantalla();
		}
	},


//la funcion ingresodecimal tambien es de tipo condicional if else. Esta funcion define la siguiente condicion: si el valor de pantalla buscando el punto en la cadena con el metodo indeof (".") es igual a vacio, entonces el valor de pantalla es igual al valor de pantalla + "0.""  entonces el valor de pantalla tomaria el valor del valor de pantalla + .

	ingresoDecimal: function(){
		if (this.valorpantalla.indexOf(".")== -1) {
			if (this.valorpantalla == ""){
				this.valorpantalla = this.valorpantalla + "0.";
			} else {
				this.valorpantalla = this.valorpantalla + ".";
			}
			this.updatepantalla();
		}
	},

	//la funcion numero se le conoce como una estructura con cuerpo debido a que tiene un parametro valor, las condiciones son el valor de pantalla definido por el valor 0

	Numero: function(valor){
		if (this.auxTeclaOperador){
			this.valorpantalla = "0";
		}

		// si en la pantalla hay menos de 8 caracteres se va a imprimir el número presionado, teniendo en cuenta que si en la pantalla solo hay un 0 y lo quitamos para colocar nuestro número, si no, solo colocamos el número sin borrar lo demás.


		if (this.valorpantalla.length < 8) {
			if (this.valorpantalla=="0"){
				this.valorpantalla = "";
				this.valorpantalla = this.valorpantalla + valor;
			} else {
				this.valorpantalla = this.valorpantalla + valor;
			}
		this.updatepantalla();
		}
	},


// si el parametro operacion esta vacio se realiza la siguiente condicion: la variable valor pantalla es igual a 0 y el primer valor es igual al valor pantalla pero tranforma el argumento a numeroflotante mediante parseFloat.  Entonces si no se cumple esa condicion, segundo valor es igual al valor de pantalla y se ejecuta el evento de la funcion resultado.



	Operacion: function(oper){
		if(this.operacion == ""){
			this.primerValor = parseFloat(this.valorpantalla);
			this.valorpantalla = "0";
		} else {
			this.segundoValor = parseFloat(this.valorpantalla);
			this.Resultado();
		}
		this.operacion = oper;
		this.updatepantalla();
	},

//La funcion operacion es de tipo if else, si el parametro auxTeclaIgual es falsa el segundo valor es igual al valor de pantalla convirtiendo el numero en un valor flotante y la asigna a la variable ultimovalor.  Por otor lado, el evento realizarOperacion utilizara los parametros primer valor, segundo valor y operacion  que estan definidos anteriomente.

	Resultado: function(){

		if(!this.auxTeclaIgual){
			this.segundoValor = parseFloat(this.valorpantalla);
			this.ultimoValor = this.segundoValor;
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);
		} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}

		this.primerValor = this.resultado;
		this.valorpantalla = "";


 // la segunda condicion if else, define si el resultado numero es menor a 9 caracteres, el valor pantalla es igual al resultado pero en cadena. si no se cumple la condicion, entonces el valor pantalla es igual al resultado con 8 coracteres y despues le agrega ...

		if (this.resultado.toString().length < 9){
			this.valorpantalla = this.resultado.toString();
		} else {
			this.valorpantalla = this.resultado.toString().slice(0,8) + "...";
		}
		this.updatepantalla();
	},

//esta funcion realizarOperacion tiene 3 parametros : primer valor segundo valor y operacion.  es de tipo switch que contiene las operaciones.  caso +, caso -,  caso *.  El resultado es igual al valor de pantalla capturado en el primer momento justo con la operacion y el segundo valor es el resultado de la operacion y para la operacion raiz, se utiliza la clase math calculando la raiz cuadrada del valor en pantalla.

	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+":
				this.resultado = (primerValor + segundoValor);
			break;
			case "-":
				this.resultado = (primerValor - segundoValor);
			break;
			case "*":
				this.resultado = (primerValor * segundoValor);
			break;
			case "/":
				this.resultado = (primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = (Math.sqrt(primerValor));
		}
	},


 //updatepantalla es el evento que utilizamos  para actualizar el display con el valorpantalla.

 	updatepantalla: function(){
		this.pantalla.innerHTML = this.valorpantalla;
	}

};

calculadora.init();
