import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosCreateComponent } from './membros-create.component';

describe('MembrosCreateComponent', () => {
  let component: MembrosCreateComponent;
  let fixture: ComponentFixture<MembrosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
