import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKhassidaSongComponent } from './add-khassida-song.component';

describe('AddKhassidaSongComponent', () => {
  let component: AddKhassidaSongComponent;
  let fixture: ComponentFixture<AddKhassidaSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKhassidaSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKhassidaSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
