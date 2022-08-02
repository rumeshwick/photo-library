import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PhotosComponent } from './photos.component';
import { firstValueFrom, interval } from 'rxjs';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  let originalTimeout: number;

  beforeEach(async () => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [MatSnackBarModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create photos component', () => {
    expect(component).toBeTruthy();
  });

  it('should display random images', async () => {
    await firstValueFrom(interval(10000));
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.getElementsByTagName('img');
    expect(images).toHaveSize(20);
    expect(true).toBeTruthy();
  });
});
