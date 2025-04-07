import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxylogComponent } from './proxylog.component';

describe('ProxylogComponent', () => {
  let component: ProxylogComponent;
  let fixture: ComponentFixture<ProxylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProxylogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
