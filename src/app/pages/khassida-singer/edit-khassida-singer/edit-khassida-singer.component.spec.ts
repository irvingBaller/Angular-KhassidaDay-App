import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKhassidaSingerComponent } from './edit-khassida-singer.component';

describe('EditKhassidaSingerComponent', () => {
  let component: EditKhassidaSingerComponent;
  let fixture: ComponentFixture<EditKhassidaSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKhassidaSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKhassidaSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
