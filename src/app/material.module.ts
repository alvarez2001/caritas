import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
    imports:[
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatTooltipModule,
        MatDialogModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports:[
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatTooltipModule,
        MatDialogModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class MaterialModule{}