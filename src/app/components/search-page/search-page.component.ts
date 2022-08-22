import { Component, OnInit } from '@angular/core';
import {SpotifyAuthService } from 'src/app/spotify-auth.service'
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
    public artists=[];
    token:string='';
    searchQ: string =null;
  constructor(private authService: SpotifyAuthService) { }

  ngOnInit() {
    var url = window.location;
    var access_token =  url.hash;
    var mySubString = access_token.substring(
      access_token.indexOf("n=") + 2, 
      access_token.lastIndexOf("&t")
  );
  this.token=mySubString;
  this.authService.key=mySubString;
  }
  searchArtists(){
    this.authService.getArtists(this.searchQ).subscribe((data) =>{
    this.artists=data.artists.items;
    });
  }
}
