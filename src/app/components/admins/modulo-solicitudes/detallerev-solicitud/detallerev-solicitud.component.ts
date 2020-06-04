import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConceptoService } from 'src/app/services/concepto.service';
import { Banco } from 'src/app/models/banco.model';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detallerev-solicitud',
  templateUrl: './detallerev-solicitud.component.html',
  styleUrls: ['./detallerev-solicitud.component.css'],
  providers:[ConceptoService,LoginService,SolicitudService]
})
export class DetallerevSolicitudComponent implements OnInit {

  public bancosArr:Banco[];

  constructor(
    public dialogRef: MatDialogRef<DetallerevSolicitudComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private conSV:ConceptoService,
    private logSV:LoginService,
    private solSV:SolicitudService
  ) { }

  ngOnInit(): void {
    this.bancos()
  }
  rechazar(id){
    Swal.fire({
      title: 'Estas seguro?',
      text: `Desea rechazar la solicitud #${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Rechazar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        
      }
    })    
  }

  autorizar(id){
    const usuario = { usuario: this.logSV.getIdentity().sub }


    Swal.fire({
      title: 'Estas seguro?',
      text: `Desea autorizar la solicitud #${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Autorizar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.solSV.postSolicitudRevisada(usuario, id).subscribe(res => {
          Swal.fire({
            toast:true,
            timer:5000,
            timerProgressBar:true,
            title:`Solicitud #${id} Autorizada`,
            icon:'success',
            position:'bottom-end'
          })
          this.dialogRef.close(true);
        })
      }
    })    
  }

  bancos(){
    this.conSV.getAllBanco().subscribe(res => {
      this.bancosArr = res;
      
    })
  }
  

}
