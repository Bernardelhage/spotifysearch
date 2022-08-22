import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './components/landing/landing-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SpotifyAuthService } from './spotify-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumspageComponent } from './components/albumspage/albumspage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SearchPageComponent,
    AlbumspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyAuthService],
  bootstrap: [AppComponent,SearchPageComponent ]
})
export class AppModule { }
