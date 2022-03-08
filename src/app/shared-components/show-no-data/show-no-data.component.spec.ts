import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoDataComponent } from './show-no-data.component';

describe('ShowNoDataComponent', () => {
  let component: ShowNoDataComponent;
  let fixture: ComponentFixture<ShowNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
