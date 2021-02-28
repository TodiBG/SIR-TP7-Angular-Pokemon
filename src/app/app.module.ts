import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeService } from './services/poke.service';
import {HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { PokedetailComponent } from './pokedetail/pokedetail.component';
import { PokeShareInfoService } from './services/poke-share-info.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    FilterPipe,
    PokedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    PokeService,
    PokeShareInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
