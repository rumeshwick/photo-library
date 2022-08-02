import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
  });

  it('should create loader component', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display loading spinner on loading', () => {
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text')?.textContent).toContain(
      'Loading...'
    );
    expect(compiled.querySelector('mat-spinner')).toBeTruthy();
  });

  it('should hide loading spinner and display load more button while not loading', () => {
    component = fixture.componentInstance;
    component.isLoading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text')).toBeFalsy();
    expect(compiled.querySelector('mat-spinner')).toBeFalsy();
    expect(compiled.querySelector('.load-more-btn')?.textContent).toContain(
      'Load More'
    );
  });
});
