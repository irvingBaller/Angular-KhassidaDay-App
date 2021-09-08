import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhassidaSingerComponent } from './khassida-singer.component';

describe('KhassidaSingerComponent', () => {
  let component: KhassidaSingerComponent;
  let fixture: ComponentFixture<KhassidaSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhassidaSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhassidaSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
