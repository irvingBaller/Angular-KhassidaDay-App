import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKhassidaSongComponent } from './list-khassida-song.component';

describe('ListKhassidaSongComponent', () => {
  let component: ListKhassidaSongComponent;
  let fixture: ComponentFixture<ListKhassidaSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKhassidaSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKhassidaSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
