class perro{
    constructor(nombre, raza, sexo, tamanio, edad, estadoAdopcion){
        this.nombre = nombre;
        this.raza = raza;
        this.sexo = sexo;
        this.tamanio = tamanio;
        this.edad = edad;
        this.estadoAdopcion = estadoAdopcion;
    }

    set_estadoAdopcion(estado){
        this.estadoAdopcion = estado;
    }

    get_estadoAdopcion(){
        if(this.estadoAdopcion == "En adopción"){
            console.log(this.nombre + " se encuentra disponible para adoptar.");
        } else if(this.estadoAdopcion == "Adoptado"){
            console.log(this.nombre + " ya fue adoptado por otra familia.");
        } else{
            console.log(this.nombre + " se encuentra en proceso de adopción.");
        }
    }
}

let mascotas = [];

datos();

function datos(){
    let n = mascotas.length;
    mascotas[n] = new perro(prompt("Ingrese nombre del perro:"),prompt("Ingrese raza del perro:"),prompt("Ingrese sexo del perro:"),prompt("Ingrese tamaño del perro:"),prompt("Ingrese edad del perro:"),prompt("Ingrese el estado de adopción del perro: 1- En adopción. 2- Adoptado. 3- En proceso."));
    if(window.confirm("¿Desea continuar ingresando datos?") == true){
        datos();
    } else{
        console.log("1- Todas las mascotas:");
        for(let i = 0; i < mascotas.length; i++){
            imprimir(i);
        }
        console.log("2- Mascotas en adopción:");
        for(let i = 0; i < mascotas.length; i++){
            if(mascotas[i].estadoAdopcion == "En adopción" || mascotas[i].estadoAdopcion == 1) imprimir(i);
        }
        console.log("3- Mascotas adoptadas:");
        for (let i = 0; i < mascotas.length; i++) {
            if (mascotas[i].estadoAdopcion == "Adoptado" || mascotas[i].estadoAdopcion == 2) imprimir(i);
        }
        console.log("4- Mascotas en proceso de adopción:");
        for (let i = 0; i < mascotas.length; i++) {
            if (mascotas[i].estadoAdopcion == "En proceso" || mascotas[i].estadoAdopcion == 3) imprimir(i);
        }
    }
}

function imprimir(i){
    console.log("Nombre: " + mascotas[i].nombre + ". Raza: " + mascotas[i].raza + ". Sexo: " + mascotas[i].sexo + ". Tamaño: " + mascotas[i].tamanio + ". Edad: " + mascotas[i].edad + ". Estado: " + mascotas[i].estadoAdopcion + ".");
}

/*mascota[1].set_estadoAdopcion("En adopción");
mascota[2].set_estadoAdopcion("Adoptado");
mascota[3].set_estadoAdopcion("En proceso");

console.log(mascota[1].nombre + mascota[1].get_estadoAdopcion());
console.log(mascota[2].nombre + mascota[2].get_estadoAdopcion());
console.log(mascota[3].nombre + mascota[3].get_estadoAdopcion());*/