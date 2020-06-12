import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.css']
})
export class PanelAdministrativoComponent implements OnInit {

  
  constructor(private _route:Router, private _router:ActivatedRoute, private breadcrumbService: BreadcrumbService, private titleService:Title) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs  => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }
  private createTitle(routesCollection:Breadcrumb[]){
    const title = 'Sistema Caritas';
    const titles = routesCollection.filter( (route) => route.displayName);

    if(!titles.length){ return title; }
    const routeTitles = this.titlesToString(titles);

    return `${routeTitles} - ${title}`
  }

  private titlesToString(titles){
    return titles.reduce((prev, curr ) => {
      return `${curr.displayName}`;
    }, '');
  }

  prueba(){
    this._route.navigate(['admin'], {relativeTo:this._router});
  }

}
