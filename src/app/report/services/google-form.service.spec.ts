import { TestBed, inject } from '@angular/core/testing';

import { GoogleFormService } from './google-form.service';

describe('GoogleFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleFormService]
    });
  });

  it('should be created', inject([GoogleFormService], (service: GoogleFormService) => {
    expect(service).toBeTruthy();
  }));
});
