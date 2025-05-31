import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoEditComponent } from './campo-edit.component';

describe('CampoEditComponent', () => {
  let component: CampoEditComponent;
  let fixture: ComponentFixture<CampoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
