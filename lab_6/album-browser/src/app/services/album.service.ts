import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Album } from "../models/album.model";

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    constructor(private http: HttpClient) {}

    private readonly BASE_URL = 'https://jsonplaceholder.typicode.com';

    getAlbums(): Observable<Album[]>{
        return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
    }

    getAlbumPhotos(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.BASE_URL}/albums/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.BASE_URL}/albums/${id}`);
    }
}