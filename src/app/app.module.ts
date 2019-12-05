import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatTableModule,MatInputModule,MatDialogModule,MatSelectModule } from  '@angular/material';
import { HomeComponent } from './home/home.component';
import { AddDetailsComponent } from './add-details/add-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
