import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YouTubeResponse } from './models/youtube-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = environment.YOUTUBE_API_KEY;
  
  constructor(private http: HttpClient) { }

  getSearchResults(searchTerm: string): Observable<YouTubeResponse> {
    return this.http.get<YouTubeResponse>(this.apiUrl + '/search?type=video&part=snippet&maxResult=6&videoDuration=medium&key=' + this.apiKey + '&q=' + searchTerm);
  }
}
