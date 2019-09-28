import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PosixMonitorComponent} from './posix-monitor.component';

describe('PosixMonitorComponent', () => {
  let component: PosixMonitorComponent;
  let fixture: ComponentFixture<PosixMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PosixMonitorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosixMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
