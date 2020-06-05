import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[LoginService]
})
export class MenuComponent implements OnInit {

  @Input('menu') drawer;

  public rol;

  constructor(private logService:LoginService) {
    this.rol = this.logService.getIdentity().rol;
   }

  ngOnInit(): void {
  }

}
