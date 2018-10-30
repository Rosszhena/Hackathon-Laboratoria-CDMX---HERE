import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealvideoComponent } from './realvideo.component';

describe('RealvideoComponent', () => {
  let component: RealvideoComponent;
  let fixture: ComponentFixture<RealvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
