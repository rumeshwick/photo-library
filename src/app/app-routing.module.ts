import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/photos/photos.module').then((m) => m.PhotosModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
