import { Injectable } from '@angular/core';
import { Image } from 'src/app/shared/models/Image';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getLoadedImages(): Image[] {
    const favoriteImages = this.getFavoriteImages();

    const images = JSON.parse(
      sessionStorage.getItem('loaded-images') || '[]'
    ).map((id: string) => ({
      url: `https://picsum.photos/id/${id}/300/300`,
      id,
      isFavorite: favoriteImages.includes(id),
    }));

    return images;
  }

  saveLoadedImages(images: Image[]) {
    sessionStorage.setItem(
      'loaded-images',
      JSON.stringify(images.map((row) => row.id))
    );
  }

  getFavoriteImages(): string[] {
    return JSON.parse(sessionStorage.getItem('favorite-images') || '[]');
  }

  saveFavoriteImages(images: string[]) {
    sessionStorage.setItem('favorite-images', JSON.stringify(images));
  }

  removeFromFavorite(id: string) {
    const images = this.getFavoriteImages().filter((row: string) => row != id);
    this.saveFavoriteImages(images);
  }
}
