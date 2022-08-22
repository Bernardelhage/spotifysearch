import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumspageComponent } from './albumspage.component';

describe('AlbumspageComponent', () => {
  let component: AlbumspageComponent;
  let fixture: ComponentFixture<AlbumspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
