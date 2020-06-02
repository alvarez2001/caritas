export class ProyectosModel{
    constructor(
        public id:number,
        public nombre:string,
        public codigo:string,
        public aprobado:number,
        public disponible:number,
        public comision:number,
        public status:string,
        public usuario_id:number,
        public admin_id:number,
        public created_at:string,
        public updated_at:string
    ){}
}