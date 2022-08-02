import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { StorageService } from 'src/app/shared/services/storage.service';

import { FavoritesComponent } from './favorites.component';
import { TestComponent } from 'src/test';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let mockStorageService: StorageService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'photos/:id', component: TestComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.get(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text on favorite images not found', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h2')?.textContent).toContain(
      'No images added to the favorite list'
    );
  });

  it('should display favorite images', () => {
    mockStorageService = TestBed.inject(StorageService);
    spyOn(mockStorageService, 'getFavoriteImages').and.returnValue([
      '100',
      '200',
    ]);

    fixture = TestBed.createComponent(FavoritesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should navigate to single photo page on image click', fakeAsync(() => {
    mockStorageService = TestBed.inject(StorageService);
    spyOn(mockStorageService, 'getFavoriteImages').and.returnValue([
      '100',
      '200',
    ]);

    fixture = TestBed.createComponent(FavoritesComponent);
    fixture.detectChanges();
    fixture.debugElement.nativeElement.querySelector('img')?.click();
    tick();
    expect(location.path()).toBe('/photos/100');
  }));
});
