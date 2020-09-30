import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search-result', component: ResultSearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
