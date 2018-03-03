import { TestBed, inject } from '@angular/core/testing';

import { Inventario.ServiceService } from './inventario.service.service';

describe('Inventario.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Inventario.ServiceService]
    });
  });

  it('should be created', inject([Inventario.ServiceService], (service: Inventario.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
