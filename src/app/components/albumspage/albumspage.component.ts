import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyAuthService } from 'src/app/spotify-auth.service';

@Component({
  selector: 'app-albumspage',
  templateUrl: './albumspage.component.html',
  styleUrls: ['./albumspage.component.css']
})
export class AlbumspageComponent implements OnInit {
  artistId :string ='';
  artist: any;
  albums:any;
  constructor(private activatedroute: ActivatedRoute, private spoti:SpotifyAuthService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.artistId=paramMap.get('id');
    });
    this.spoti.getSingleArtist(this.artistId).subscribe((data) =>{
      this.artist=data;
      });
      this.spoti.getAlbums(this.artistId).subscribe((data) =>{
        this.albums=data.items;
        });
  }

}
