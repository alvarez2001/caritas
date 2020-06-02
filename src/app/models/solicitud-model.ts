export class SolicitudModel {
    constructor(
        public proyecto_id:number,
        public usuario_id:number,
        public responsable:string,
        public concepto_id:number,
        public cantidad1:number,
        public descripcion1:string,
        public cantidad2:number,
        public descripcion2:string,
        public cantidad3:number,
        public descripcion3:string,
        public cantidad4:number,
        public descripcion4:string,
        public cantidad5:number,
        public descripcion5:string
    ){}
}
