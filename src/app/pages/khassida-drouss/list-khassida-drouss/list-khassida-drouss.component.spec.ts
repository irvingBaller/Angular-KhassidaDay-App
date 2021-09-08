import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKhassidaDroussComponent } from './list-khassida-drouss.component';

describe('ListKhassidaDroussComponent', () => {
  let component: ListKhassidaDroussComponent;
  let fixture: ComponentFixture<ListKhassidaDroussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKhassidaDroussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKhassidaDroussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
