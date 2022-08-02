import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  modules = ['photos', 'favorites'];

  selectedModule = 'photos';

  constructor(private location: Location) {
    this.modules.forEach((row) => {
      if (this.location.path().includes(row)) {
        this.selectedModule = row;
      }
    });
  }

  ngOnInit(): void {}

  toggleModule(module: string) {
    this.selectedModule = module;
  }
}
