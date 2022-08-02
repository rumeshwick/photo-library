import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/shared/services/storage.service';
import { getRandomImages } from 'src/app/shared/utils/utils';
import { Image } from 'src/app/shared/models/Image';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  private pageSize = 20;
  images: Image[] = [];
  favoriteImages: string[] = [];
  isLoading = false;

  constructor(
    private _snackBar: MatSnackBar,
    private storageService: StorageService
  ) {
    this.favoriteImages = this.storageService.getFavoriteImages();

    this.images = this.storageService.getLoadedImages();
  }

  ngOnInit(): void {
    if (this.images.length === 0) {
      this.loadImages();
    }
  }

  loadImages() {
    if (this.isLoading) return;

    this.isLoading = true;

    getRandomImages(this.pageSize)
      .then((response) => {
        const images = response.map((row) => ({
          ...row,
          isFavorite: this.favoriteImages.includes(row.id),
        }));
        this.images.push(...images);
        this.storageService.saveLoadedImages(this.images);
      })
      .catch((error) => {
        this._snackBar.open(error, '', {
          duration: 1000,
        });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  onClick(image: Image) {
    if (image.isFavorite) {
      image.isFavorite = false;
      this.favoriteImages.splice(this.favoriteImages.indexOf(image.id), 1);
    } else {
      image.isFavorite = true;
      this._snackBar.open('Image added to favorites !', '', {
        duration: 1000,
      });
      this.favoriteImages.push(image.id);
    }

    this.storageService.saveFavoriteImages(this.favoriteImages);
  }
}
