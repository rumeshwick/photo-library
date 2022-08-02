import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  images: string[] = [];

  constructor() {
    this.images = JSON.parse(sessionStorage.getItem('favorite-images') || '[]');
  }

  ngOnInit(): void {}
}
