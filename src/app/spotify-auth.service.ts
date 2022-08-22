import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  key:string='';


  URL: string =" ";
  constructor( private httpC: HttpClient, ) { }
generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

Authenticate(){
var client_id = '84974b9bc8b74ff3ab72602d6017e32a';
var redirect_uri = 'http://localhost:4200/search';

var state = this.generateRandomString(16);

localStorage.setItem('511d0950fc384948ba39b7f9471c0ae2', state);
var scope = 'user-read-private user-read-email';

this.URL = 'https://accounts.spotify.com/authorize';
this.URL += '?response_type=token';
this.URL += '&client_id=' + encodeURIComponent(client_id);
this.URL += '&scope=' + encodeURIComponent(scope);
this.URL += '&redirect_uri=' + encodeURIComponent(redirect_uri);
this.URL += '&state=' + encodeURIComponent(state);
window.location.href=this.URL;
  }
  getArtists(aName): Observable <any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + this.key
      })
    };
     let artistsUrl= 'https://api.spotify.com/v1/search?q='+ aName +'&type=artist';
     return this.httpC.get <any>(artistsUrl,httpOptions);
     
  }

  getSingleArtist(artistId): Observable <any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + this.key
      })
    };
    let artistUrl= 'https://api.spotify.com/v1/artists/'+ artistId;
    return this.httpC.get <any>(artistUrl,httpOptions);
  }
  getAlbums(artistId): Observable <any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + this.key
      })
    };
    let artistAlbumUrl= 'https://api.spotify.com/v1/artists/'+ artistId + '/albums';
    console.log(artistAlbumUrl);
    return this.httpC.get <any>(artistAlbumUrl,httpOptions);
  }

}

