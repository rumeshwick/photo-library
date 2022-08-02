import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@Component({
  template: `<div infinite-scroll>
    <div style="height: 1000px;width:100%"></div>
  </div>`,
})
class TestComponent {}

describe('InfiniteScrollDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TestComponent, InfiniteScrollDirective],
    }).compileComponents();
  });

  it('should enable scrolling', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const des = fixture.debugElement.queryAll(
      By.directive(InfiniteScrollDirective)
    );
    const overflow = des[0].nativeElement.style.overflow;
    expect(overflow).toEqual('auto');
  });
});
