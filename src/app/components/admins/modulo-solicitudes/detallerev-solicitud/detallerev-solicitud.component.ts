import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConceptoService } from 'src/app/services/concepto.service';
import { Banco } from 'src/app/models/banco.model';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';

@Component({
  selector: 'app-detallerev-solicitud',
  templateUrl: './detallerev-solicitud.component.html',
  styleUrls: ['./detallerev-solicitud.component.css'],
  providers:[ConceptoService,LoginService,SolicitudService]
})
export class DetallerevSolicitudComponent implements OnInit {

 
  public solicitud;
  public numeroSolicitud:number;
  public bancos;
  public idAdmin:number;
  public rol:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private SolSV:SolicitudService,
    private generales:FuncionesCompartidas,
    private conceptoSV:ConceptoService,
    private logSV:LoginService,
    private funciones:FuncionesCompartidas
  ) { }

  ngOnInit(): void {
    this.rol = this.logSV.getIdentity().rol.toLowerCase()
    this.idAdmin = this.logSV.getIdentity().id;
    this.buscarBancos()
    this.buscarInformacion();
  }
 
  private buscarBancos(){
    this.numeroSolicitud = +this.route.snapshot.paramMap.get('id');
    
    this.conceptoSV.getAllBanco().subscribe(res => {
      
      this.bancos = res
    }, err => {
    if(err.status !== 0){
      this.buscarBancos();
    }
    else{
      FuncionesCompartidas.funcionesCompartidas(null,'error','No hay conexion con el servidor',false)
    }
    })
  }
  
  private buscarInformacion(){
    

    this.SolSV.getOneSolicitud(this.numeroSolicitud).subscribe(res => {
      console.log(res)
      this.solicitud = res;
    },
    err => {
      this.generales.AlertConfirmPublic('error encontrado', err.error,'error',false,null,'Regresar')
                    .then((result)=>{
                      this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])
                    })    
    })
    }

    
  rechazar(id){
    
    const datos = {usuario: this.idAdmin}
    this.funciones.AlertConfirmPublic('Estas seguro?', `Anular la solicitud #${id}`,'warning',true,'Cancelar','Anular').then((result) => {
      if(result.value){
        this.SolSV.anularSolicitud(datos,id).subscribe(res=>{
          this.generales.AlertConfirmPublic(res,null,'success',false,null,'Regresar').then((result)=>{
            this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])  
          })
        }, err => {
          console.log(err);
          this.generales.AlertConfirmPublic('ha ocurrido un error inesperado',null,'error',false,null,'Regresar').then((result) => {
            this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])
          })
        })
      }
    })
    
  }

  autorizar(id){
    const datos = {usuario: this.idAdmin}
    this.funciones.AlertConfirmPublic('Estas seguro?', `Autorizar la solicitud #${id}`,'warning',true,'Cancelar','Autorizar').then((result) => {
      if(result.value){
        this.SolSV.autorizarSolicitud(datos,id).subscribe(res=>{
          this.generales.AlertConfirmPublic(res,null,'success',false,null,'Regresar').then((result)=>{
            this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])  
          })
        }, err => {
          console.log(err);
          this.generales.AlertConfirmPublic('ha ocurrido un error inesperado',null,'error',false,null,'Regresar').then((result) => {
            this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])
          })
        })
      }
    })
  }
}
