import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public projectInfo
    ) {}

  ngOnInit(): void {
  }

}
