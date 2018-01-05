import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradedatabaseComponent } from './tradedatabase.component';

describe('TradedatabaseComponent', () => {
  let component: TradedatabaseComponent;
  let fixture: ComponentFixture<TradedatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradedatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradedatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
