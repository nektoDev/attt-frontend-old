import { TestBed, inject } from '@angular/core/testing';

import { TorrentsService } from './torrents.service';

describe('TorrentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorrentsService]
    });
  });

  it('should ...', inject([TorrentsService], (service: TorrentsService) => {
    expect(service).toBeTruthy();
  }));
});
