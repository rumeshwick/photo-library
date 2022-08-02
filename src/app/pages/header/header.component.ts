import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  modules = ['photos', 'favorites'];

  selectedModule = 'photos';

  constructor(private location: Location) {
    const currentPath = this.location.path();
    if (currentPath.includes('favorites') || currentPath.includes('photos/')) {
      this.selectedModule = 'favorites';
    }
  }

  toggleModule(module: string) {
    this.selectedModule = module;
  }
}
