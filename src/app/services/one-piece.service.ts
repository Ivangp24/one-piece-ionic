import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  http = inject(HttpClient);

  getSeasons() {
    return this.http.get(environment.baseUrl + environment.seasons)
  }

  getEpisodesBySeason(id: string) {
    return this.http.get(environment.baseUrl + environment.episodes_by_season + id)
  }

  getEpisodesByNumber(number: string) {
    return this.http.get(environment.baseUrl + environment.episode + number)
  }
}
