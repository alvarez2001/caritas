import { Component, OnInit } from '@angular/core';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { ConceptoService } from 'src/app/services/concepto.service';
import { LoginService } from 'src/app/services/login.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProyectoNuevoModel, productosProyecto } from 'src/app/models/modelos/proyectoNuevo.model';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.css'],
  providers:[ConceptoService,LoginService,ProjectService,SolicitudService]
})
export class NuevaSolicitudComponent implements OnInit {

  public bancos;
  public proyectos;
  public solicitud:ProyectoNuevoModel;
  public productos:productosProyecto;
  public arrayProductos:productosProyecto[] = [];
  public conceptos:[];

  public cantidad:number = null;
  public descripcion:string = null;
  public banco:number = null;
  public precio:number = null;

  public precioCambiado;
  

  constructor(
    private conceptoSV:ConceptoService,
    private logSV:LoginService,
    private proSV:ProjectService,
    private solSV:SolicitudService,
    private generales:FuncionesCompartidas,
    private route:Router
  ) { 
    this.solicitud = new ProyectoNuevoModel(null,this.logSV.getIdentity().id,null,null,null,this.arrayProductos);
    
  }

  ngOnInit(): void {
    this.proyectosAdmin();
    this.buscarBancos();
    this.buscarConceptos();
  }

  guardarInformacion(form){
    FuncionesCompartidas.funcionesCompartidas(null,'info','Procesando Solicitud')
    this.solSV.solicitudAdmin(this.solicitud).subscribe(res => {
      this.generales.AlertConfirmPublic(`Solicitud #${res.informacion.id}`,res.mensaje,'success',true,'Regresar','Otra solicitud').then((result)=>{
        if(result.value){
          this.arrayProductos = [];
          form.reset();
        }
        if(result.dismiss){
          this.route.navigate(['panel-administrativo','modulo-solicitudes'])
        }
      })
    },err => {
      console.log(err)
    })
  }

  private buscarConceptos(){
    this.conceptoSV.getAll().subscribe(res => {
      this.conceptos = res
    },err => {
      console.log(err)
    })
  }


  private buscarBancos(){

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

  private proyectosAdmin(){
    const idAdmin = this.logSV.getIdentity().id;
    const data = {admin:idAdmin};
    this.proSV.proyectosAdmin(data,idAdmin).subscribe(res => {
      this.proyectos = res
      console.log(this.proyectos)
    },err => {
      console.log(err);
    })
  }


  agregarOperacion(){
    if(this.cantidad !== null && this.descripcion !== '' && this.precio !== null && this.banco !== null){
      const productos:productosProyecto = {
        cantidad:this.cantidad, 
        descripcion:this.descripcion,
        precio:this.precio,
        banco:this.banco
      }
      console.log(productos)
      
      this.arrayProductos.push(productos);
  
      this.cantidad = null;
      this.descripcion = null;
      this.precio = null;
      this.banco = null;
    }
  }

  borrarOperacion(index){
    this.arrayProductos.splice(index,1);
  }

  public comprobar(form){
    let statusArray = false;
    if(form.form.status == 'VALID'){
      if(this.arrayProductos.length < 1){
        statusArray = false;
      }
      else{
        statusArray = true;
      }
    }
    

    return statusArray;
  }









}
