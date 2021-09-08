import { TestBed } from '@angular/core/testing';

import { KhassidaSingerService } from './khassida-singer.service';

describe('KhassidaSingerService', () => {
  let service: KhassidaSingerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhassidaSingerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
