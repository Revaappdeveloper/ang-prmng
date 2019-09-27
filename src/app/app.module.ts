import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CheckboxModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import { AppComponent } from './app.component';
import { InputPrimengComponent } from './components/input-primeng/input-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPrimengComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    FormsModule,
    RadioButtonModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
