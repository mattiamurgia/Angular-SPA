import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponentComponent } from './listing-component.component';

describe('ListingComponentComponent', () => {
  let component: ListingComponentComponent;
  let fixture: ComponentFixture<ListingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingComponentComponent]
    });
    fixture = TestBed.createComponent(ListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
