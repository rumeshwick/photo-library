import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoRoutingModule } from './single-photo-routing.module';
import { SinglePhotoComponent } from './single-photo.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SinglePhotoComponent],
  imports: [CommonModule, SinglePhotoRoutingModule, MatButtonModule],
})
export class SinglePhotoModule {}
