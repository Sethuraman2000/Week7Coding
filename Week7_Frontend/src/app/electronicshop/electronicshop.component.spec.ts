import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicshopComponent } from './electronicshop.component';

describe('ElectronicshopComponent', () => {
  let component: ElectronicshopComponent;
  let fixture: ComponentFixture<ElectronicshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
