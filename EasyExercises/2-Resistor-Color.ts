enum COLORS { //> Lista de los colores de las resistencias
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

function showNumber (color: COLORS) {
	console.log("El numero de resistencia del color que escogiste es: ", color)
}

showNumber(COLORS.BLACK)
