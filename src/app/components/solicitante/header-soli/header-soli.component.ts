import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-soli',
  templateUrl: './header-soli.component.html',
  styleUrls: ['./header-soli.component.css'],
  providers:[LoginService]
})
export class HeaderSoliComponent implements OnInit {

  public nombreApellido:string;
  
  constructor(
    public _lgService:LoginService
  ) {
  
   }

  ngOnInit(): void {

  }

}
