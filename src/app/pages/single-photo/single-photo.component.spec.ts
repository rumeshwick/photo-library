import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { SinglePhotoComponent } from './single-photo.component';
import { TestComponent } from 'src/test';

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePhotoComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'favorites', component: TestComponent },
        ]),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 100 } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    location = TestBed.get(Location);
  });

  it('should create single photo component', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy();
    expect(compiled.querySelector('img')?.getAttribute('src')).toEqual(
      'https://picsum.photos/id/100/600/600'
    );
  });

  it('should render action buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#remove-btn')?.textContent).toContain(
      'Remove from favorites'
    );
    expect(compiled.querySelector('#back-btn')?.textContent).toContain(
      'Back to favorites'
    );
  });

  it('should go back to favorite screen on button click', fakeAsync(() => {
    fixture.debugElement.nativeElement.querySelector('#back-btn')?.click();
    tick();
    expect(location.path()).toBe('/favorites');

    fixture.debugElement.nativeElement.querySelector('#remove-btn')?.click();
    tick();
    expect(location.path()).toBe('/favorites');
  }));
});
