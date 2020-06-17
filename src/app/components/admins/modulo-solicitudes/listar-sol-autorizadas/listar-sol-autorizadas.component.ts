import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-sol-autorizadas',
  templateUrl: './../listar-recha-autori/listar-recha-autori.component.html',
  styleUrls: ['./../listar-recha-autori/listar-recha-autori.component.css'],
  providers:[LoginService,SolicitudService]
})
export class ListarSolAutorizadasComponent implements OnInit {

  
  
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
    
    this.titulo = 'Finalizadas';
    
    this.rolAdmin = this.logSV.getIdentity().rol.toLocaleLowerCase();
    this.idAdmin = this.logSV.getIdentity().id;

    this.solicitudesfinalizadas();
    this.dataSource.paginator = this.paginator;
  }

  solicitudesfinalizadas(valor = false){
    if(!valor){
      FuncionesCompartidas.funcionesCompartidas(null,'warning','espere un momento')
    }
    this.solSV.getFinalizadas().subscribe(res => {
      if(!valor){
        FuncionesCompartidas.funcionesCompartidas(5000,'success','Informacion cargada')
      }
      if(res <= 0){
        this.noHay = true;
      }     
      else{
        this.noHay = false;
      }
      console.log(res)
      this.dataSource.data = res
    },
    err => {
      FuncionesCompartidas.funcionesCompartidas(7000,'error','Hubo un error inesperado');
      console.log(err)
    })
  }

}
