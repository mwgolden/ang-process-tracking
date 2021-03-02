import { TestBed } from '@angular/core/testing';

import { AppInfoApiService } from './app-info-api.service';

describe('AppInfoApiService', () => {
  let service: AppInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
