import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDetailsComponent } from './tenant-details.component';

describe('TenantDetailsComponent', () => {
  let component: TenantDetailsComponent;
  let fixture: ComponentFixture<TenantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
