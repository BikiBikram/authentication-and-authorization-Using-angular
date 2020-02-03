import { TestBed } from '@angular/core/testing';

import { LoginSService } from './login-s.service';

describe('LoginSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSService = TestBed.get(LoginSService);
    expect(service).toBeTruthy();
  });
});
