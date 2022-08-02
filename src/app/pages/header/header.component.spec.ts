import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Location } from '@angular/common';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from 'src/test';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'favorites', component: TestComponent },
          { path: 'photos', redirectTo: '' },
        ]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.get(Location);
  });

  it('should create header', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header-text')?.textContent).toContain(
      'Photo Library'
    );
  });

  it('should render navigation buttons', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#photos-btn')?.textContent).toContain(
      'Photos'
    );
    expect(compiled.querySelector('#favorites-btn')?.textContent).toContain(
      'Favorites'
    );
  });

  it('should navigate to favorites page', fakeAsync(() => {
    fixture.debugElement.nativeElement.querySelector('#favorites-btn')?.click();
    tick();
    expect(location.path()).toBe('/favorites');
  }));

  it('should navigate to photos page', fakeAsync(() => {
    fixture.debugElement.nativeElement.querySelector('#photos-btn')?.click();
    tick();
    expect(location.path()).toBe('/');
  }));
});
