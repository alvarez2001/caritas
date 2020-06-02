import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  public chart = [];

  constructor() { }

  ngOnInit(): void {
    this.grafico()
  }


  grafico(){
    this.chart = new Chart('canvas',{
      type: 'bar',
      data: {
          labels: ['1er proyecto', '2do proyecto', '3er proyecto', '4to proyecto', '5to proyecto', '6to proyecto'],
          datasets: [
            {
              label: 'gasto proyectos',
              data: [16000.32, 20020.12, 15000.12, 15221.12, 15331.12, 12341.12],
              backgroundColor: [
                  'rgba(173, 0, 0, .8)',
                  'rgba(173, 0, 0, .8)',
                  'rgba(173, 0, 0, .8)',
                  'rgba(173, 0, 0, .8)',
                  'rgba(173, 0, 0, .8)',
                  'rgba(173, 0, 0, .8)'
              ],
              borderColor: [
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
            }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display:false,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gasto de proyectos'
        }
      }
  });
  }
  



}
