import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Output()
  private onLoadMore = new EventEmitter<void>();

  @Input() public isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  loadMore() {
    this.onLoadMore.emit();
  }
}
