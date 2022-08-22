import { Component, OnInit } from '@angular/core';
import {SpotifyAuthService } from 'src/app/spotify-auth.service'
@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: SpotifyAuthService) { }

  ngOnInit() {
  }
login(){
  this.authService.Authenticate();

}
}
