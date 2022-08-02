import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { InfiniteScrollDirective } from 'src/app/shared/directives/infinite-scroll.directive';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

@NgModule({
  declarations: [PhotosComponent, InfiniteScrollDirective, LoaderComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class PhotosModule {}
