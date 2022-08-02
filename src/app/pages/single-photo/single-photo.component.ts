import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
})
export class SinglePhotoComponent {
  public imageId: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {
    this.imageId = this.activatedRouter.snapshot.params['id'];
  }

  removeFromfavorites() {
    this.storageService.removeFromFavorite(this.imageId);

    this.router.navigate(['/favorites']);
  }
}
