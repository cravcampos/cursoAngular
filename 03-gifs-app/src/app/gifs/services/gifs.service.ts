import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'lSekN7UXwIHfk3Ps1NoXVvaqoDnMIeOr';

  constructor() {
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

  async searchTag(tag: string):Promise<void> {

    // validando que la búsqueda no este vacía
    if (tag.length === 0) return;

    // Usando método para organizar los tag y limitarlos a 10
    this.organizeHistory(tag);

    //Usando fetch para realizar la petición al api
    fetch('https://api.giphy.com/v1/gifs/search?api_key=lSekN7UXwIHfk3Ps1NoXVvaqoDnMIeOr&q=perros&limit=10')
      .then(resp=> resp.json())
      .then(data => console.log(data));
  }
}
