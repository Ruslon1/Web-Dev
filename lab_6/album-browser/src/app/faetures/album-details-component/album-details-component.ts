import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-details-component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-details-component.html',
  styleUrl: './album-details-component.css',
})
export class AlbumDetailsComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  isLoading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid album id';
      return;
    }

    this.isLoading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.isLoading = false;
      }
    });
  }

  onSave(): void {
    if (!this.album) return;

    const updated: Album = {
      ...this.album,
      title: this.editedTitle.trim() || this.album.title
    };

    this.albumService.updateAlbum(updated).subscribe({
      next: (saved) => {
        this.album = saved;
        this.editedTitle = saved.title;
        alert('Album updated successfully');
      },
      error: () => {
        alert('Failed to save album');
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/albums']);
  }
}
