import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKhassidaDroussComponent } from './add-khassida-drouss.component';

describe('AddKhassidaDroussComponent', () => {
  let component: AddKhassidaDroussComponent;
  let fixture: ComponentFixture<AddKhassidaDroussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKhassidaDroussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKhassidaDroussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
