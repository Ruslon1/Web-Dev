import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "../models/album.model";
import { Photo } from "../models/photo.model";

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

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.BASE_URL}/albums/${id}`);
    }
}
