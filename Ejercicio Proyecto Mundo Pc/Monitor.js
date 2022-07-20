class Monitor {
    static contadorMonitores = 0;
    constructor(marca,tamaño){
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