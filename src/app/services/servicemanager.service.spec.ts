import { TestBed } from '@angular/core/testing';

import { ServicemanagerService } from './servicemanager.service';

describe('ServicemanagerService', () => {
  let service: ServicemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
