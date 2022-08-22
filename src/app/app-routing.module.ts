import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AlbumspageComponent } from './components/albumspage/albumspage.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'artists/:id', component: AlbumspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
