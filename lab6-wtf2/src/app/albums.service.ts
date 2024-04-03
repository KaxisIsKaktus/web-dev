import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Images } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}/`)
  }

  getImages(id: number): Observable<Images[]>{
    return this.http.get<Images[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  addAlbum(newAlbum : Album) : Observable<Album>{
    return this.http.post<Album>(`https://jsonplaceholder.typicode.com/albums/`, newAlbum);
  }
}
