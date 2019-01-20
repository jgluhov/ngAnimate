import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShockwaveComponent } from './shockwave.component';

describe('ShockwaveComponent', () => {
  let component: ShockwaveComponent;
  let fixture: ComponentFixture<ShockwaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShockwaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShockwaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
