import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestlistComponent } from './investlist.component';

describe('InvestlistComponent', () => {
  let component: InvestlistComponent;
  let fixture: ComponentFixture<InvestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
