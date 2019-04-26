import { TestBed } from '@angular/core/testing';

import { Cart } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cart = TestBed.get(Cart);
    expect(service).toBeTruthy();
  });
});
