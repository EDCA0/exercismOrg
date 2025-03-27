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

function showNumber (color1: COLORS, color2: COLORS) {
	console.log(`El numero de los colores que escogiste es: ${color1 * 10 + color2}` ) //> Se multiplica por 10 para que quede del lado izquierdo y sea solo sumar el segundo numero
}

showNumber(COLORS.BROWN, COLORS.BROWN)
