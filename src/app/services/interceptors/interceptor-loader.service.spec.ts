import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './interceptor-loader.service';

describe('InterceptorLoaderService', () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
