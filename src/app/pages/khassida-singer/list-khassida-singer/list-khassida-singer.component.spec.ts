import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKhassidaSingerComponent } from './list-khassida-singer.component';

describe('ListKhassidaSingerComponent', () => {
  let component: ListKhassidaSingerComponent;
  let fixture: ComponentFixture<ListKhassidaSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKhassidaSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKhassidaSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
