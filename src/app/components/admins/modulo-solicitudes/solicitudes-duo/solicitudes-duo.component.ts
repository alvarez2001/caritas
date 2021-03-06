import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConceptoService } from 'src/app/services/concepto.service';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';

@Component({
  selector: 'app-solicitudes-duo',
  templateUrl: './solicitudes-duo.component.html',
  styleUrls: ['./solicitudes-duo.component.css'],
  providers:[ConceptoService,LoginService,SolicitudService]
})
export class SolicitudesDuoComponent implements OnInit {
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
                      this.router.navigate(['panel-administrativo','modulo-solicitudes','ejecucion'])
                    })    
    })
    }

}
