import { TestBed } from '@angular/core/testing';

import { KhassidaSongService } from './khassida-song.service';

describe('KhassidaSongService', () => {
  let service: KhassidaSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhassidaSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
