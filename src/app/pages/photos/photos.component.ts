import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getImageId, getRandomImages } from 'src/app/shared/utils/utils';

type Image = {
  url: string;
  id: string;
  isFavorite: boolean;
};

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

  constructor(private _snackBar: MatSnackBar) {
    this.favoriteImages = JSON.parse(
      sessionStorage.getItem('favorite-images') || '[]'
    );

    this.images = JSON.parse(
      sessionStorage.getItem('loaded-images') || '[]'
    ).map((id: string) => ({
      url: `https://picsum.photos/id/${id}/300/300`,
      id,
      isFavorite: this.favoriteImages.includes(id),
    }));
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
        this.images.push(
          ...response.map((url) => {
            const id = getImageId(url);
            return {
              url,
              id,
              isFavorite: this.favoriteImages.includes(id),
            };
          })
        );
        sessionStorage.setItem(
          'loaded-images',
          JSON.stringify(this.images.map((row) => row.id))
        );
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
    sessionStorage.setItem(
      'favorite-images',
      JSON.stringify(this.favoriteImages)
    );
  }
}
