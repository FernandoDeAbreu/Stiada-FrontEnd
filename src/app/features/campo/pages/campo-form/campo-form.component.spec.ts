import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoFormComponent } from './campo-form.component';

describe('CampoFormComponent', () => {
  let component: CampoFormComponent;
  let fixture: ComponentFixture<CampoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
