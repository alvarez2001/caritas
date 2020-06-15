import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-banco',
  templateUrl: './detalle-banco.component.html',
  styleUrls: ['./detalle-banco.component.css']
})
export class DetalleBancoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleBancoComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
