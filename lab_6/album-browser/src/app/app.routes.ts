import { Routes } from '@angular/router';
import { HomeComponent } from './faetures/home-component/home-component';
import { AboutComponent } from './faetures/about-component/about-component';
import { AlbumsComponent } from './faetures/albums-component/albums-component';
import { AlbumDetailsComponent } from './faetures/album-details-component/album-details-component';
import { AlbumPhotosComponent } from './faetures/album-photos-component/album-photos-component';
import { NameComponent } from './faetures/name-component/name-component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'name', component: NameComponent },
    { path: 'albums/:id', component: AlbumDetailsComponent },
    { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];