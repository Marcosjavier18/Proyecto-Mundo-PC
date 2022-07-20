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
        ${this_raton}
        ${this._teclado}`
    }
}

let computadora1 = new Computadora("hp",monitor1,raton1,teclado1);
console.log(computadora1)