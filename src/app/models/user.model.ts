export class UserModel{
    constructor(
        public nombres:string,
        public apellidos:string,
        public email:string,
        public password:string,
        public rol:string,
        public sello:string,
        public id:number,
        public status:string,
        public created_at:string,
        public updated_at:string
    ){}
}