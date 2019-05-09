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
		auxTeclaOperador: false
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


//la funcion ingresodecimal tambien es de tipo condicional if else. Esta funcion define la siguiente condicion: si el valor de pantalla es igual a 0 considerando el metodo indexOF, el cual  busca en la cadena la presencia de un punto y devuelve el índice dentro del objeto a la primera ocurrencia del valor en pantalla, y si el valor de pantalla es vacio, entonces el valor de pantalla es igual al mismo valor de pantalla + el punto.


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

	Numero: function(valor){
		if (this.auxTeclaOperador){
			this.valorpantalla = "0";
			this.auxTeclaOperador = true;
		}
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


	Operacion: function(oper){
		if(this.operacion == ""){
			this.primerValor = parseFloat(this.valorpantalla);
			this.valorpantalla = "0";
		} else {
			this.segundoValor = parseFloat(this.valorpantalla);
			this.auxTeclaOperador = true;
			this.Resultado();
		}
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updatepantalla();
	},

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

		if (this.resultado.toString().length < 9){
			this.valorpantalla = this.resultado.toString();
		} else {
			this.valorpantalla = this.resultado.toString().slice(0,8) + "...";
		}

		this.auxTeclaIgual = true;
		this.updatepantalla();
	},

	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-":
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*":
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/":
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},

	updatepantalla: function(){
		this.pantalla.innerHTML = this.valorpantalla;
	}

};

calculadora.init();
