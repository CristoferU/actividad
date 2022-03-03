
	// 2. Ingresar  numeros  por teclado, hasta que el usuario ingrese el 0.
	// Al final imprimir la  sumatoria de todos los numeros ingresados.
	let suma = new Number();
	let n = new Number();
	n = 1;
	suma = 0;
	while (n!=0) {
		alert("Ingrese el numero",'<BR/>');
		n = Number(prompt());
		suma = suma+n;
	}
	alert("La suma de los numeros es",'<BR/>');
	alert(suma,'<BR/>');

