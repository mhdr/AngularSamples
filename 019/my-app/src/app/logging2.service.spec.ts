import { TestBed } from '@angular/core/testing';

import { Logging2Service } from './logging2.service';

describe('Logging2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logging2Service = TestBed.get(Logging2Service);
    expect(service).toBeTruthy();
  });
});
