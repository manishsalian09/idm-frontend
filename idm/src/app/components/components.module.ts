import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { 
  MatListModule, 
  MatButtonModule, 
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatTableModule,
  MatExpansionModule,
  MatSortModule,
  MatPaginatorModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [
    DataTableComponent
  ],
  declarations: [DataTableComponent]
})
export class ComponentsModule { }
