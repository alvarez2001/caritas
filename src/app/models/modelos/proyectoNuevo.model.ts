export class ProyectoNuevoModel{
    constructor(
        public proyecto:number,
        public usuario:number,
        public concepto:number,
        public responsable:string,
        public descripcion:string,
        public productos:productosProyecto[]
    ){}
}

export class productosProyecto{
    constructor (
        public cantidad:number,
        public descripcion:string,
        public precio:number,
        public banco:number
    ){}
}