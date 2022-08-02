import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  images: string[] = [];

  constructor(private storageService: StorageService) {
    this.images = this.storageService.getFavoriteImages();
  }
}
