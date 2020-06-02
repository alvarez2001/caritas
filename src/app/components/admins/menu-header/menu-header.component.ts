import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  @Input('menu') menu;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
