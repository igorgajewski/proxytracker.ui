import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedcomponentComponent } from './paginatedcomponent.component';

describe('PaginatedcomponentComponent', () => {
  let component: PaginatedcomponentComponent;
  let fixture: ComponentFixture<PaginatedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
