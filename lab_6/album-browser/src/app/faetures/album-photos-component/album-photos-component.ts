import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;
  photos: Photo[] = [];
  isLoading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid album id';
      return;
    }

    this.albumId = id;
    this.isLoading = true;

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load photos';
        this.isLoading = false;
      }
    });
  }
}
