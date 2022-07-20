//Vamos a crear primero DispositivosEntradas y despues Raton y Teclado,
// ya que abstraemos cierta informacion, tambien nos sirve para practicar herencias.

class DispoitivoEntrada{ //Clase Padre
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
//Recordemos que no siempre utilizamos todos estos metodos, pero si por alguna razon necesitamos solamente
// recuperar un atributo o modificar el valor de un atributo del objeto.
    get marca(){
       return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispoitivoEntrada{
    static contadorRatones = 0;
    //ahora inicializamos el constructor de la clase Padre
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){ //Este es un atributo de solo lectura, asique solo agregamos Get
        return this._idRaton
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

let raton1 = new Raton("USB","HP");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth","Noganet");
console.log(raton2.toString());


class Teclado extends DispoitivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado:[idTeclado: ${this.idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}
let teclado1 = new Teclado ("cable", "hyperx");
console.log(teclado1.toString());
let teclado2 = new Teclado("infrarrojo","CougarControl");
console.log(teclado2.toString());