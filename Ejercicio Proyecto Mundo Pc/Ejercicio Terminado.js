//Vamos a crear primero DispositivosEntradas y despues Raton y Teclado,
// ya que abstraemos cierta informacion, tambien nos sirve para practicar herencias.


//  ---------------- creacion clase Dispositivosentrada


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

//  ---------------- creacion clase Raton


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

//  ---------------- creacion clase Teclado


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


//  ---------------- creacion clase monitor
class Monitor {
    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor:[idMonitor: ${this._idMonitor}, Marca: ${this._marca} , Tamaño: ${this._tamaño}px]`
    }
}

let monitor1 = new Monitor("Samsung","32");
console.log(monitor1.toString());
let monitor2 = new Monitor("LG","42");
console.log(monitor2.toString());

//  ---------------- creacion clase computadora
class Computadora{
    static contadoraComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadoraComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} 
        ${this._monitor}
        ${this._raton}
        ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){ //en caso que necesitemos recuperar este valor por separado
        return this._idOrden;
    }
    agregarComputadora(computadora){//podemos agregar un numero maximo de elementos
        this._computadoras.push(computadora);//usamos push para agregar un nuevo elemento a nuestro arreglo de computadoras
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`; 
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }

}

let computadora1 = new Computadora("hp",monitor1,raton1,teclado1);
console.log(computadora1.toString());

let computadora2 = new Computadora("Notebook ACER", monitor2,raton2,teclado2);
console.log(`${computadora2}`)



let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);//se pueden volver agregar porque son objetos independientes
orden1.mostrarOrden();


let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();