import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  termino:string="";
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {


  }
  buscarArtistas(){
    this._spotifyService.getArtistas(this.termino).subscribe();
  }

}
