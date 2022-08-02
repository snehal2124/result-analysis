import { TestBed } from '@angular/core/testing';

import { SubjectService } from './subject.service';

describe('SpecializationService', () => {
  let service: SubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
