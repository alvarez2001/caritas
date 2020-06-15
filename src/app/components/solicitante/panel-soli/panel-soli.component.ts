import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-panel-soli',
  templateUrl: './panel-soli.component.html',
  styleUrls: ['./panel-soli.component.css'],
  providers:[LoginService]
})
export class PanelSoliComponent implements OnInit {

  public nombre:string;
  public apellido:string;
  constructor(private logSV:LoginService) { }

  ngOnInit(): void {
    this.nombreApellido()
  }

  private nombreApellido(){
    this.nombre = this.logSV.getIdentity().name;
    this.apellido = this.logSV.getIdentity().surname;
  }

}
