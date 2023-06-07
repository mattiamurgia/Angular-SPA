import { TestBed } from '@angular/core/testing';

import { MoviesCallApiService } from './movies-call-api.service';

describe('MoviesCallApiService', () => {
  let service: MoviesCallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesCallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
