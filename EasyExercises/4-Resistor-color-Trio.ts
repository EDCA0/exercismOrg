export enum COLORS { //> Lista de los colores de las resistencias
	BLACK = 0,
	BROWN = 1,
	RED = 2,
	ORANGE = 3,
	YELLOW = 4,
	GREEN = 5,
	BLUE = 6,
	VIOLET = 7,
	GREY = 8,
	WHITE = 9,
}

export enum COLORSMULTIPLY { //> Lista de los colores de las resistencias
	BLACK ,
	BROWN = 10,
	RED = 100,
	ORANGE = 1000,
	YELLOW = 10000,
	GREEN = 100000,
	BLUE = 1000000,
	VIOLET = 10000000,
	GREY = 100000000,
	WHITE = 1000000000,
}

export enum TERMINO {
	KILO = "KiloOhmios",
	MEGA = "MegaOhmios",
	GIGA = "GigaOhmios",
}


function showNumber (color1: COLORS, color2: COLORS, color3 : COLORSMULTIPLY) {
	const firstTwoColors = color1 * 10 + color2;  //> Se multiplica por 10 para que quede del lado izquierdo y sea solo sumar el segundo numero
	let finalResult = firstTwoColors * color3; //> Con el resultado de los dos primeros colores al multiplicarlo por el tercer color nos da el resultado final
	let termino : TERMINO;

	function printNumber (finalNumber : number, term : string) {
		console.log(`El numero de los colores que escogiste es: ${finalNumber} ${term}`);
	}

	if(finalResult >= 1000 && finalResult < 1000000) { //> KiloOhmios
		finalResult /= 1000;
		termino = TERMINO.KILO;
		printNumber(finalResult, termino);
	}
	if(finalResult >= 1000000 && finalResult < 1000000000) { //> MegaOhmios
		finalResult /= 1000000;
		termino = TERMINO.MEGA;
		printNumber(finalResult, termino);
	}
	if(finalResult >= 1000000000) { //> GigaOhmios
		finalResult /= 1000000000;
		termino = TERMINO.GIGA;
		printNumber(finalResult, termino);
	}
}

showNumber(COLORS.ORANGE, COLORS.ORANGE, COLORSMULTIPLY.ORANGE);
