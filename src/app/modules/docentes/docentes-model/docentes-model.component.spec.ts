import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesModelComponent } from './docentes-model.component';

describe('DocentesModelComponent', () => {
  let component: DocentesModelComponent;
  let fixture: ComponentFixture<DocentesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocentesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
