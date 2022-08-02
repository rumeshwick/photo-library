import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, AppRoutingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
