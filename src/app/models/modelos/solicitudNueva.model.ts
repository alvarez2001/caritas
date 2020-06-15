export class SolicitudNuevaModel{
    constructor(
        public proyecto:number,
        public usuario: number,
        public concepto:number,
        public responsable:string,
        public descripcion:string,
        public productos:ProductosNuevos[]
    ){}
}

export class ProductosNuevos{
    constructor(
        public cantidad:number,
        public descripcion:string
    ){}
}