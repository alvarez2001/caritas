import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { ConceptoService } from 'src/app/services/concepto.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-campos-detalle',
  templateUrl: './campos-detalle.component.html',
  styleUrls: ['./campos-detalle.component.css'],
  providers:[SolicitudService, LoginService]
})
export class CamposDetalleComponent implements OnInit {

  public solicitud;
  public numeroSolicitud:number;
  public bancos;
  public idAdmin:number;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private SolSV:SolicitudService,
    private generales:FuncionesCompartidas,
    private conceptoSV:ConceptoService,
    private logSV:LoginService
  ) { }

  ngOnInit(): void {
    this.idAdmin = this.logSV.getIdentity().id;
    this.buscarInformacion();
  }


  buscarInformacion(){
  this.numeroSolicitud = +this.route.snapshot.paramMap.get('id');

    this.conceptoSV.getAllBanco().subscribe(res => {
      
      this.bancos = res
    })


  this.SolSV.getOneSolicitud(this.numeroSolicitud).subscribe(res => {
    console.log(res)
    this.solicitud = res;
  },
  err => {
    this.generales.AlertConfirmPublic('error encontrado', err.error,'error',false,null,'Regresar')
                  .then((result)=>{
                    this.router.navigate(['panel-administrativo','modulo-solicitudes','asignar-monto'])
                  })    
  })
  }



  formulario(){
    
    const data = {
      admin:this.idAdmin,
      productos:this.solicitud.productos
    }
    
    this.SolSV.registerMontoBanco(data, this.solicitud.id).subscribe(res => {
      this.generales.AlertConfirmPublic(`Solicitud #${res.informacion.id}`, res.mensaje,'success',false,null,'Regresar').then((result) => {
        this.router.navigate(['panel-administrativo','modulo-solicitudes','asignar-monto'])
      })
    }, err => {
      console.log(err)
    })
  }
}

