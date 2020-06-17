import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { LoginService } from 'src/app/services/login.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-recha-autori',
  templateUrl: './listar-recha-autori.component.html',
  styleUrls: ['./listar-recha-autori.component.css'],
  providers:[LoginService,SolicitudService]
})
export class ListarRechaAutoriComponent implements OnInit {

  
 
  
  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'total', 'acciones'];
  dataSource = new MatTableDataSource();

  public noHay:boolean;
  public idAdmin:number;
  public rolAdmin:string;
  public titulo:string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private solSV:SolicitudService, private logSV:LoginService, private funciones:FuncionesCompartidas,
    private route:Router, private router:ActivatedRoute) { }

  ngOnInit() {
    
    this.titulo = 'Rechazadas';
    
    this.rolAdmin = this.logSV.getIdentity().rol.toLocaleLowerCase();
    this.idAdmin = this.logSV.getIdentity().id;

    this.solicitudesRechazadas();
    this.dataSource.paginator = this.paginator;
  }

  solicitudesRechazadas(valor = false){
    if(!valor){
      FuncionesCompartidas.funcionesCompartidas(null,'warning','espere un momento')
    }
    this.solSV.getSolicitudRechazadas().subscribe(res => {
      if(!valor){
        FuncionesCompartidas.funcionesCompartidas(5000,'success','Informacion cargada')
      }
      if(res <= 0){
        this.noHay = true;
      }     
      else{
        this.noHay = false;
      }
      
      this.dataSource.data = res
    },
    err => {
      FuncionesCompartidas.funcionesCompartidas(7000,'error','Hubo un error inesperado');
      console.log(err)
    })
  }


}
