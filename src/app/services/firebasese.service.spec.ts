import { TestBed } from '@angular/core/testing';

import { FirebaseseService } from './firebasese.service';

describe('FirebaseseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseseService = TestBed.get(FirebaseseService);
    expect(service).toBeTruthy();
  });
});
