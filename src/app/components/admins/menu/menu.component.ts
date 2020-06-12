import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[LoginService]
})
export class MenuComponent implements OnInit {

 // @Input('menu') drawer;
 public icono:boolean = true;

  public rol;

  constructor(private logService:LoginService, private renderer:Renderer2) {
    this.rol = this.logService.getIdentity().rol;
    
   }

  ngOnInit(): void {
    
  }


  prueba(barra){
    const barraIconos = barra.getAttribute('aria-expanded');
    if(barraIconos == 'true'){
      this.icono = true
    }else{
      this.icono = false
    }
    
  }

}
