import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: AlbumDetailsComponent },
    { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];