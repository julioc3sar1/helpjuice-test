import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { BlocksFieldComponent } from './components/blocks-field/blocks-field.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFieldComponent,
    BlocksFieldComponent,
    BlocksComponent,
    BlockComponent
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
