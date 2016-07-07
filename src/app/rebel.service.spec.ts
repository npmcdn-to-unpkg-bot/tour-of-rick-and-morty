/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { RebelService } from './rebel.service';

describe('Rebel Service', () => {
  beforeEachProviders(() => [RebelService]);

  it('should ...',
      inject([RebelService], (service: RebelService) => {
    expect(service).toBeTruthy();
  }));
});
