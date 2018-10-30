import { TestBed } from '@angular/core/testing';

import { ConnectionbdService } from './connectionbd.service';

describe('ConnectionbdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionbdService = TestBed.get(ConnectionbdService);
    expect(service).toBeTruthy();
  });
});
