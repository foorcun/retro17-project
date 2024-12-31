import { TestBed } from '@angular/core/testing';

import { MenulerPageFacadeService } from './menuler-page.facade.service';

describe('MenulerPageFacadeService', () => {
  let service: MenulerPageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenulerPageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
