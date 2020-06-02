import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.css']
})
export class PanelAdministrativoComponent implements OnInit {

  constructor(private _route:Router, private _router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  prueba(){
    this._route.navigate(['admin'], {relativeTo:this._router});
  }

}
