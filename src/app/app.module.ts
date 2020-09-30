import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/share-components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { GeneralSearchComponent } from './pages/general-search/general-search.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';
import { MenuSearchComponent } from './pages/menu-search/menu-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GeneralSearchComponent,
    ResultSearchComponent,
    MenuSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
