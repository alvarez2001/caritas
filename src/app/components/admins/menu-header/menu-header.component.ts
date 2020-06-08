import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css'],
  providers:[LoginService]
})
export class MenuHeaderComponent implements OnInit {

  @Input('menu') menu;
  public usuario:any;
  constructor(
    private logSV:LoginService
  ) { 
    this.usuario = this.logSV.getIdentity();
  }

  ngOnInit(): void {
  }

}
