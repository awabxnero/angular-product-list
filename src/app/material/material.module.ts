import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, 
         MatSortModule, MatTableModule, MatSelectModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
