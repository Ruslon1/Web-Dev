import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = false;
  error = ''

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.isLoading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load albums'
        this.isLoading = false;
      }
    });
  }

  onDelete(id: number, event: MouseEvent): void {
    event.stopPropagation();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: () => {
        alert('Failed to delete album');
      }
    });
  }
}
