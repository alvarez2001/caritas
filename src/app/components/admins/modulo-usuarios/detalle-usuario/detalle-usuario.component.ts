import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DetalleUsuarioComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
  }

}
