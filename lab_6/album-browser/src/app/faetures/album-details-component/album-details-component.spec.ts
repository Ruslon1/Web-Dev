import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-details-component';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
