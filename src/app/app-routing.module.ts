import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';
import { FuneralComponent } from './pages/funeral/funeral.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-result/:search', component: ResultSearchComponent },
  { path: 'funeral-service', component: FuneralComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
