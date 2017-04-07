import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentDetailComponent } from './torrent-detail.component';

describe('TorrentDetailComponent', () => {
  let component: TorrentDetailComponent;
  let fixture: ComponentFixture<TorrentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
