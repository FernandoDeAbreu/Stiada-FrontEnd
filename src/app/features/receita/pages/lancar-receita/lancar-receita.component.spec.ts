import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarReceitaComponent } from './lancar-receita.component';

describe('LancarReceitaComponent', () => {
  let component: LancarReceitaComponent;
  let fixture: ComponentFixture<LancarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarReceitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
