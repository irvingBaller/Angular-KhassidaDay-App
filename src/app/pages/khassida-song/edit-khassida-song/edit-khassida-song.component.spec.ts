import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKhassidaSongComponent } from './edit-khassida-song.component';

describe('EditKhassidaSongComponent', () => {
  let component: EditKhassidaSongComponent;
  let fixture: ComponentFixture<EditKhassidaSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKhassidaSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKhassidaSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
