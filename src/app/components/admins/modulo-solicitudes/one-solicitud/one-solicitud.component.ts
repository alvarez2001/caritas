import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { ConceptoService } from 'src/app/services/concepto.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-one-solicitud',
  templateUrl: './one-solicitud.component.html',
  styleUrls: ['./one-solicitud.component.css']
})
export class OneSolicitudComponent implements OnInit {

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
      
      this.solicitud = res;
    },
    err => {
      this.generales.AlertConfirmPublic('error encontrado', err.error,'error',false,null,'Regresar')
                    .then((result)=>{
                      this.router.navigate(['panel-administrativo','modulo-solicitudes','revision-solicitud'])
                    })    
    })
    }
}
