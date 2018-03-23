import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[]=[];
  urlBusqueda:string="https://api.spotify.com/v1/search";
  urlArtista:string="https://api.spotify.com/v1/artists";
  toke:string="Bearer BQDd3HM9W7JPbw1pjxJKEwS2dnKasVLu1ov-6cx0EHm0eeBFj5-XXIeK6o9EKjhvLMTjkR1loVeyKqpcENQ";
  constructor(private http:Http) { }

getArtistas(termino:string){

  let query = "?q=" + termino + "&type=artist";//variables de la consulta
  let url = this.urlBusqueda+query;//juntamos la url con la consulta que generamos
  //instanciamos header
  let headers:Headers=new Headers();
//añadimos a la cabecera datos
  headers.append('Content-Type', 'application/json');
  //añadimos a la cabecera los datos necesarios para la autrizacion
  headers.append('Authorization', this.toke);
// instanciamos RequestOptions con el header que que creamos antes.
  const options = new RequestOptions({headers: headers});
//generamos peticion GET y le enviamos la cabecera en las RequestOptions
  return this.http.get(url,options).map(data => {
      this.artistas=data.json().artists.items;
    });
  }

  getArtista(id:string){
    let query = "/"+id ;
    let url = this.urlArtista+query;
    let headers:Headers=new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.toke);
    const options = new RequestOptions({headers: headers});
    return this.http.get(url,options).map(data => {
        return data.json();
      });
    }

    getTop(id:string,country:string="US"){
      let query = "/"+id+"/top-tracks?country="+country ;
      let url = this.urlArtista+query;
      let headers:Headers=new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.toke);
      const options = new RequestOptions({headers: headers});
      return this.http.get(url,options).map(data => {
          return data.json().tracks;
        });
      }


}
