import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
