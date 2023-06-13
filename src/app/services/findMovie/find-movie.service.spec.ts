import { TestBed } from '@angular/core/testing';

import { FindMovieService } from './find-movie.service';

describe('FindMovieService', () => {
  let service: FindMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
