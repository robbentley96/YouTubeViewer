import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YouTubeResponse } from './models/youtube-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'X';
  
  constructor(private http: HttpClient) { }

  getSearchResults(searchTerm: string): Observable<YouTubeResponse> {
    return this.http.get<YouTubeResponse>(this.apiUrl + '/search?type=video&part=snippet&maxResult=6&key=' + this.apiKey + '&q=' + searchTerm);
  }
}
