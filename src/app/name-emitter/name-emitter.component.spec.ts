import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEmitterComponent } from './name-emitter.component';

describe('NameEmitterComponent', () => {
  let component: NameEmitterComponent;
  let fixture: ComponentFixture<NameEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameEmitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
