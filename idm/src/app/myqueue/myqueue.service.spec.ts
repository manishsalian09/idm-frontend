import { TestBed, inject } from '@angular/core/testing';

import { MyqueueService } from './myqueue.service';

describe('MyqueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyqueueService]
    });
  });

  it('should be created', inject([MyqueueService], (service: MyqueueService) => {
    expect(service).toBeTruthy();
  }));
});
