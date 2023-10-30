import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Variable que guarda la lista de gif obtenidos
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'lSekN7UXwIHfk3Ps1NoXVvaqoDnMIeOr';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // Método que verifica si el tag buscado ya se encuentra en el historial, se limita a 10 el historial
  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag: string):boolean => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }

  searchTag(tag: string):void {

    // validando que la búsqueda no este vacía
    if (tag.length === 0) return;

    // Usando método para organizar los tag y limitarlos a 10
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    //Usando http para realizar la petición al api
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp =>{
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
      })

  }
}
