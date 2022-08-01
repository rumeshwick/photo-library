import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  modules = ['photos', 'favorites'];

  selectedModule = 'photos';

  constructor() {}

  ngOnInit(): void {}

  toggleModule(module: string) {
    this.selectedModule = module;
  }
}
