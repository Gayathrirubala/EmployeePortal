import { TestBed } from '@angular/core/testing';

import { BrowserService } from './browser.service';

describe('BrowserServiceService', () => {
  let service: BrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
