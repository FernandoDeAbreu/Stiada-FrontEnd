import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoCreateComponent } from './campo-create.component';

describe('CampoCreateComponent', () => {
  let component: CampoCreateComponent;
  let fixture: ComponentFixture<CampoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
