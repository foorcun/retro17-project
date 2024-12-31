import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulerPageComponent } from './menuler-page.component';

describe('MenulerPageComponent', () => {
  let component: MenulerPageComponent;
  let fixture: ComponentFixture<MenulerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenulerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenulerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
