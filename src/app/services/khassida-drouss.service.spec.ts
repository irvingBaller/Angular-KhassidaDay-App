import { TestBed } from '@angular/core/testing';

import { KhassidaDroussService } from './khassida-drouss.service';

describe('KhassidaDroussService', () => {
  let service: KhassidaDroussService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhassidaDroussService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
